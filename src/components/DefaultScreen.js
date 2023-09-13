import TopBottomLeftPanel from "../pages/TopBottomLeftPanel";
import FullScreen from "../pages/FullScreen";
import TopBottom from "../pages/TopBottom";
import LeftRight from "../pages/LeftRight";
import HeaderContentFooter from "../pages/HeaderContentFooter";
import TopBottomRightPanel from "../pages/TopBottomRightPanel";
import DefaultError from "../pages/DefaultError";

export default function DefaultScreen({ configuration }) {
  switch (+configuration.template) {
    case 0:
      return <FullScreen contents={configuration.contents} />;
    case 1:
      return <TopBottom contents={configuration.contents} />;
    case 2:
      return <LeftRight contents={configuration.contents} />;
    case 3:
      return <HeaderContentFooter contents={configuration.contents} />;
    case 4:
      return <TopBottomLeftPanel contents={configuration.contents} />;
    case 5:
      return <TopBottomRightPanel contents={configuration.contents} />;
    default:
      return <DefaultError />;
  }
}
