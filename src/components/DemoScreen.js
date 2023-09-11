import TopBottomLeftPanel from "./TopBottomLeftPanel";
import FullScreen from "./FullScreen";
import TopBottom from "./TopBottom";
import LeftRight from "./LeftRight";
import HeaderContentFooter from "./HeaderContentFooter";
import TopBottomRightPanel from "./TopBottomRightPanel";
import DefaultError from "./DefaultError";
import { useState } from "react";
import { SwitchButton } from "./SwitchButton";

const templateComponents = {
  1: <FullScreen />,
  2: <TopBottom />,
  3: <LeftRight />,
  4: <HeaderContentFooter />,
  5: <TopBottomLeftPanel />,
  6: <TopBottomRightPanel />,
  default: <DefaultError />,
};

export default function DemoScreen() {
  const [selectedTemplate, setSelectedTemplate] = useState("");

  const selectedComponent =
    templateComponents[selectedTemplate] || templateComponents.default;

  const handleTemplateChange = (template) => {
    setSelectedTemplate(template);
  };

  return (
    <div className="flex flex-col w-screen h-screen items-center">
      {selectedComponent}
      <SwitchButton onChangeTemplate={handleTemplateChange} />
    </div>
  );
}
