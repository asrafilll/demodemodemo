import React, { useState, useEffect } from "react";
import DefaultScreen from "./components/DefaultScreen";
import AlternativeScreen from "./components/AlternativeScreen";
import DefaultError from "./pages/DefaultError";
import Pusher from "pusher-js";

const pusherAPPKey = process.env.REACT_APP_PUSHER_KEY;
const pusherCluster = process.env.REACT_APP_PUSHER_CLUSTER;
const backendURL = process.env.REACT_APP_BACKEND_URL;

const pusher = new Pusher(pusherAPPKey, {
  cluster: pusherCluster,
});

export default function App() {
  const [defaultConfiguration, setDefaultConfiguration] = useState();
  const [alternativeConfiguration, setAlternativeConfiguration] = useState();
  const [loading, setLoading] = useState(true);
  const [timeoutId, setTimeoutId] = useState();
  const [activeConfiguration, setActiveConfiguration] = useState();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const key = urlParams.get("key");
    const channel = pusher.subscribe(`screen.${key}`);
    channel.bind("screen.updated", function (message) {
      const { default_configuration, alternative_configuration } = message.data;
      setDefaultConfiguration(default_configuration);
      setAlternativeConfiguration(alternative_configuration);
      if (
        alternative_configuration !== null &&
        Boolean(alternative_configuration.is_active)
      ) {
        clearTimeout(timeoutId);
        if (alternative_configuration.duration_time > 0) {
          setTimeoutId(
            setTimeout(() => {
              setActiveConfiguration("default");
            }, alternative_configuration.duration_time * 1000)
          );
        }
        const disableAlternative = async () => {
          await fetch(
            `${backendURL}/api/outlet-screens/${key}/alternative-configuration/deactivate`,
            {
              method: "POST",
            }
          );
        };

        disableAlternative();
        setActiveConfiguration("alternative");
      }
    });
    return () => {
      channel.unbind("screen.updated");
      pusher.unsubscribe(`screen.${key}`);
    };
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const key = urlParams.get("key");
    const getData = async () => {
      const response = await fetch(`${backendURL}/api/outlet-screens/${key}`);
      const { data } = await response.json();
      const { default_configuration, alternative_configuration } = data;
      setDefaultConfiguration(default_configuration);
      setAlternativeConfiguration(alternative_configuration);
      if (
        alternative_configuration !== null &&
        Boolean(alternative_configuration.is_active)
      ) {
        clearTimeout(timeoutId);
        if (alternative_configuration.duration_time > 0) {
          setTimeoutId(
            setTimeout(() => {
              setActiveConfiguration("default");
            }, alternative_configuration.duration_time * 1000)
          );
        }

        setActiveConfiguration("alternative");
        const disableAlternative = async () => {
          await fetch(
            `${backendURL}/api/outlet-screens/${key}/alternative-configuration/deactivate`,
            {
              method: "POST",
            }
          );
        };
        disableAlternative();
      }
      setLoading(false);
    };
    getData();
  }, []);

  if (loading) return <DefaultError />;

  if (activeConfiguration === "alternative") {
    return <AlternativeScreen configuration={alternativeConfiguration} />;
  } else {
    return <DefaultScreen configuration={defaultConfiguration} />;
  }
}
