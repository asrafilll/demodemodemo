import TopBottomLeftPanel from "./components/TopBottomLeftPanel";
import Pusher from "pusher-js";
import React, { useEffect, useState } from "react";
import FullScreen from "./components/FullScreen";
import TopBottom from "./components/TopBottom";
import LeftRight from "./components/LeftRight";
import HeaderContentFooter from "./components/HeaderContentFooter";
import TopBottomRightPanel from "./components/TopBottomRightPanel";
import DefaultError from "./components/DefaultError";

export default function App() {
  // PUSHER
  const pusher = new Pusher("7e598924e6bcbea58d12", {
    cluster: "ap1",
  });

  // HANDLE DATA FROM WEBSOCKET
  const [data, setData] = useState({
    template: "",
    images: [],
  });

  useEffect(() => {
    const channel = pusher.subscribe("my-channel");
    channel.bind("my-event", function (receivedData) {
      setData(receivedData);
    });

    return () => {
      channel.unbind("my-event");
      pusher.unsubscribe("my-channel");
    };
  }, []);

  switch (data.template) {
    case "1":
      return <FullScreen images={data.images} />;
    case "2":
      return <TopBottom images={data.images} />;
    case "3":
      return <LeftRight images={data.images} />;
    case "4":
      return <HeaderContentFooter images={data.images} />;
    case "5":
      return <TopBottomLeftPanel images={data.images} />;
    case "6":
      return <TopBottomRightPanel images={data.images} />;
    default:
      return <DefaultError />;
  }
}
