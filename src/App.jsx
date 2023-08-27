import { useState } from "react";
import BorderSelector from "./components/BorderSelector";
import BoxSelector from "./components/BoxSelector";
import SingleButton from "./components/SingleButton";
import Values from "values.js";
import Toast from "./components/Toast";
function App() {
  const [color, setColor] = useState("#2954ff");
  const [border, setBorder] = useState(0);
  const [borderRadius, setBorderRadius] = useState(0);
  const [paddingX, setPaddingX] = useState(0);
  const [paddingY, setPaddingY] = useState(0);
  const [colorList, setColorList] = useState(new Values("#2954ff").all(10));
  const [isVisible, setIsVisible] = useState(false);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    let colors = new Values(color).all(10);
    setColorList(colors);
  };

  return (
    <>
      <div className="title">
        <h3>CSS Button Generator</h3>
        <div className="underline"></div>
      </div>
      <section className="container">
        <article className="color-selector selector">
          <h5 className="color-title">Background color </h5>
          <form className="color-form" onSubmit={onSubmitHandler}>
            <div className="color-picker">
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
              <input
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </div>

            <button
              style={{
                background: `${color}`,
                color: `${
                  color.charCodeAt(1) >= 97 && color.charCodeAt(1) <= 102
                    ? "#000000"
                    : "#ffffff"
                }`,
              }}
              className="btn"
              type="submit"
            >
              submit
            </button>
          </form>
        </article>
        <article className="border-selector selector">
          <BorderSelector
            setBorder={setBorder}
            setBorderRadius={setBorderRadius}
            borderRadius={borderRadius}
            border={border}
          />
        </article>
        <article className="hover-selector selector">
          <BoxSelector
            paddingX={paddingX}
            paddingY={paddingY}
            setPaddingX={setPaddingX}
            setPaddingY={setPaddingY}
          />
        </article>
      </section>
      <div className="buttons">
        {colorList.map((color, index) => {
          return (
            <SingleButton
              key={index}
              {...color}
              index={index}
              hexValue={color.hex}
              border={border}
              borderRadius={borderRadius}
              paddingX={paddingX}
              paddingY={paddingY}
              setIsVisible={setIsVisible}
            />
          );
        })}
      </div>
      {isVisible && <Toast setIsVisible = {setIsVisible} isVisible = {isVisible}/>}
    </>
  );
}

export default App;
