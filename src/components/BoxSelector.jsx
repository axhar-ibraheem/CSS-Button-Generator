import { useState } from "react";
const BoxSelector = (props) => {
 
  return (
    <>
      <h5>box</h5>
      <form>
        <div className="border-input border-text">
          <label htmlFor="paddingX">Padding X:</label>
          <input type="text" value={props.paddingX} />
          <div className="range">
            <span>0</span>
            <input
              type="range"
              name="paddingX"
              min="0"
              max="50"
              value={props.paddingX}
              onChange={(e) => props.setPaddingX(Number(e.target.value))}
            />
            <span>50</span>
          </div>
        </div>
        <div className="borderRadius-input border-text">
          <label htmlFor="paddingY">Padding Y:</label>
          <input type="text" value={props.paddingY} />
          <div className="range">
            <span>0</span>
            <input
              type="range"
              name="paddingY"
              min="0"
              max="50"
              value={props.paddingY}
              onChange={(e) => props.setPaddingY(Number(e.target.value))}
            />
            <span>50</span>
          </div>
        </div>
      </form>
    </>
  );
};

export default BoxSelector;