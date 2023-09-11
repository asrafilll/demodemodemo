import FullScreen from "./pages/FullScreen";
import TopBottom from "./pages/TopBottom";
import HeaderContentFooter from "./pages/HeaderContentFooter";
import LeftRight from "./pages/LeftRight";
import TopBottomRightPanel from "./pages/TopBottomRightPanel";
import TopBottomLeftPanel from "./pages/TopBottomLeftPanel";
import DefaultError from "./pages/DefaultError";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultError />,
  },
  {
    path: "/fullscreen",
    element: <FullScreen />,
  },
  {
    path: "/topbottom",
    element: <TopBottom />,
  },
  {
    path: "/leftright",
    element: <LeftRight />,
  },
  {
    path: "/headercontentfooter",
    element: <HeaderContentFooter />,
  },
  {
    path: "/topbottomleftpanel",
    element: <TopBottomLeftPanel />,
  },
  {
    path: "/topbottomrightpanel",
    element: <TopBottomRightPanel />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
