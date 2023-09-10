export default function DefaultError({ onChangeTemplate }) {
  const handleTemplateChange = (template) => {
    onChangeTemplate(template);
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="text-center text-lg">Waiting Data to Display </h1>

      <div className="px-4 py-2 bg-slate-200 rounded-lg space-x-2 mt-5">
        <button
          onClick={() => handleTemplateChange("1")}
          className="bg-white px-4 py-2 rounded-lg"
        >
          1
        </button>
        <button
          onClick={() => handleTemplateChange("2")}
          className="bg-white px-4 py-2 rounded-lg"
        >
          2
        </button>
        <button
          onClick={() => handleTemplateChange("3")}
          className="bg-white px-4 py-2 rounded-lg"
        >
          3
        </button>
        <button
          onClick={() => handleTemplateChange("4")}
          className="bg-white px-4 py-2 rounded-lg"
        >
          4
        </button>
        <button
          onClick={() => handleTemplateChange("5")}
          className="bg-white px-4 py-2 rounded-lg"
        >
          5
        </button>
        <button
          onClick={() => handleTemplateChange("6")}
          className="bg-white px-4 py-2 rounded-lg"
        >
          6
        </button>
      </div>
    </div>
  );
}
