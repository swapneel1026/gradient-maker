import randomcolor from "randomcolor";
import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ColorPicker = () => {
  const [color1, setColor1] = useState(randomcolor());
  const [color2, setColor2] = useState(randomcolor());
  const [color3, setColor3] = useState(randomcolor());
  const [color4, setColor4] = useState(randomcolor());
  const [textColor, setTextColor] = useState("");
  const [direction, setDirection] = useState("to right");
  const [gradientPallete, setGradientPallete] = useState(2);
  const [output, setOutput] = useState("");

  console.log(output);
  useEffect(() => {
    setOutput(
      `linear-gradient(${direction}, ${color1}, ${color2}${
        gradientPallete === "3" ? `, ${color3}` : ""
      }${gradientPallete === "4" ? `, ${color3}, ${color4}` : ""})`
    );
  }, [color1, color2, direction, color3, color4, gradientPallete]);

  return (
    <div
      className={`absolute inset-0 z-50 flex items-center justify-center w-full `}
      style={{ background: output }}
    >
      <div className="relative w-full max-w-xl p-6 overflow-y-auto bg-white rounded-lg shadow-lg max-h-[calc(100vh-4rem)] overflow-auto scrollbar-hide">
        <h2 className="mb-4 text-2xl font-bold">Gradient Maker</h2>

        <div className="flex items-center mb-4 ">
          <label className="font-semibold">Variations:</label>
          <select
            name=""
            id=""
            className="w-full p-1 ml-4 border rounded-md"
            onChange={(e) => setGradientPallete(e.target.value)}
          >
            <option disabled>Select no. of colors for gradient</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </div>

        {/* Color Pickers */}
        <div className="flex flex-col gap-4">
          {Array.from(Array(Number(gradientPallete)).keys())?.map((gp) => {
            return (
              <label key={gp} htmlFor="color1" className="flex items-center">
                <span className="mr-2 font-semibold">Color {gp + 1}:</span>
                <input
                  type="color"
                  name={`color${gp + 1}`}
                  id={`color${gp + 1}`}
                  value={
                    gp === 0
                      ? color1
                      : gp === 1
                      ? color2
                      : gp === 2
                      ? color3
                      : color4
                  }
                  onChange={(e) => {
                    if (gp === 0) setColor1(e.target.value);
                    if (gp === 1) setColor2(e.target.value);
                    if (gp === 2) setColor3(e.target.value);
                    if (gp === 3) setColor4(e.target.value);
                  }}
                  className="w-10 h-10 border-none rounded cursor-pointer"
                />
              </label>
            );
          })}

          <label htmlFor="color1" className="flex items-center">
            <span className="mr-2 font-semibold">Text Color:</span>
            <input
              type="color"
              name="textColor"
              id="textColor"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
              className="w-10 h-10 border-none rounded cursor-pointer"
            />
          </label>
          {
            <label htmlFor="direction" className="flex items-center">
              <span className="mr-2 font-semibold">Direction:</span>
              <select
                id="direction"
                onChange={(e) => setDirection(e.target.value)}
                value={direction}
                className="w-full p-1 border rounded"
              >
                <option value="to right">to right</option>
                <option value="to left">to left</option>
                <option value="to top">to top</option>
                <option value="to bottom">to bottom</option>
              </select>
            </label>
          }
          {
            <button
              className="w-full px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-600"
              onClick={() => {
                setColor1(randomcolor());
                setColor2(randomcolor());
                setColor3(randomcolor());
                setColor4(randomcolor());
              }}
            >
              Generate Random Gradient
            </button>
          }
        </div>

        {/* Output Box */}
        <div
          className={`flex items-center justify-center w-full h-32 mt-6 text-sm font-bold border rounded-lg shadow-md`}
          style={{
            background: output,
            color: textColor,
          }}
        >
          {"Gradient"}
        </div>
        <div className="mt-4 ">
          <SyntaxHighlighter language="javascript" style={docco}>
            {output}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
