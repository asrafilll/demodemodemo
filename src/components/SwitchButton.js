export const SwitchButton = ({ onChangeTemplate }) => {
  const handleTemplateChange = (template) => {
    onChangeTemplate(template);
  };

  return (
    <div className="absolute bottom-5">
      <div className="px-2 py-2 bg-gradient-to-b from-slate-900 to-slate-800 rounded-lg space-x-2 mt-5">
        <button
          onClick={() => handleTemplateChange("1")}
          className="switch-button"
        >
          FullScreen
        </button>
        <button
          onClick={() => handleTemplateChange("2")}
          className="switch-button"
        >
          Top Bottom
        </button>
        <button
          onClick={() => handleTemplateChange("3")}
          className="switch-button"
        >
          Left Right
        </button>
        <button
          onClick={() => handleTemplateChange("4")}
          className="switch-button"
        >
          Header Content Footer
        </button>
        <button
          onClick={() => handleTemplateChange("5")}
          className="switch-button"
        >
          Top Bottom Left Panel
        </button>
        <button
          onClick={() => handleTemplateChange("6")}
          className="switch-button"
        >
          Top Bottom Right Panel
        </button>
      </div>
    </div>
  );
};
