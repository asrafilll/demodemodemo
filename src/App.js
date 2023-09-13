import React, { useState, useEffect } from "react";
import DefaultScreen from "./components/DefaultScreen";
import DefaultError from "./pages/DefaultError";

export default function App() {
  const [defaultConfiguration, setDefaultConfiguration] = useState();
  const [alternativeConfiguration, setAlternativeConfiguration] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const key = urlParams.get("key");
      const response = await fetch(
        `http://13.251.246.148/command-centre/api/outlet-screens/${key}`
      );
      const { data } = await response.json();
      const { default_configuration, alternative_configuration } = data;
      setDefaultConfiguration(default_configuration);
      setAlternativeConfiguration(alternative_configuration);
      setLoading(false);
    };
    getData();
  }, []);

  if (loading) {
    return <DefaultError />;
  } else {
    return (
      <div>
        <DefaultScreen configuration={defaultConfiguration} />
      </div>
    );
  }
}
