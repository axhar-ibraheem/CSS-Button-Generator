import { useState } from "react";

const BorderSelector = (props) => {
  
  return (
    <>
      <h5>border</h5>
      <form>
        <div className="border-input border-text">
          <label htmlFor="border">Border:</label>
          <input type="text" value={props.border} />
          <div className="range">
            <span>0</span>
            <input
              type="range"
              name="border"
              min="0"
              max="50"
              value={props.border}
              onChange={(e) => props.setBorder(Number(e.target.value))}
            />
            <span>50</span>
          </div>
        </div>
        <div className="borderRadius-input border-text">
          <label htmlFor="borderRadius">Border radius:</label>
          <input type="text" value={props.borderRadius} />
          <div className="range">
            <span>0</span>
            <input
              type="range"
              name="borderRadius"
              min="0"
              max="50"
              value={props.borderRadius}
              onChange={(e) => props.setBorderRadius(Number(e.target.value))}
            />
            <span>50</span>
          </div>
        </div>
      </form>
    </>
  );
};

export default BorderSelector;
