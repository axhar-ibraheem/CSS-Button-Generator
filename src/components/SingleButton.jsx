import React, { useState } from "react";
import { RxCopy } from "react-icons/rx";
const SingleButton = (props) => {
  const { hexValue: color, paddingX, paddingY, border, borderRadius } = props;
  const cssStyle = `
      .btn{
        cursor: pointer;
        background: #${props.hexValue};
        border: ${border}px solid #ccc;
        border-radius: ${borderRadius}px;
        padding: ${paddingY}px ${paddingX}px;
        font-size: 1rem;
        color: ${
          color.charCodeAt(1) >= 97 && color.charCodeAt(1) <= 102
            ? "#000000"
            : "#ffffff"
        }
        box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.77)
      };
  `;
  const onCopyHandler = () => {
    navigator.clipboard.writeText(cssStyle);
  };
  return (
    <div className="single-button">
      <button
        style={{
          fontSize: "1rem",
          letterSpacing:"0.1rem",
          cursor: "pointer",
          background: `#${props.hexValue}`,
          color: `${
            color.charCodeAt(1) >= 97 && color.charCodeAt(1) <= 102
              ? "#000000"
              : "#ffffff"
          }`,
          paddingTop: `${paddingY}px`,
          paddingBottom: `${paddingY}px`,
          paddingLeft: `${paddingX}px`,
          paddingRight: `${paddingX}px`,
          border: `${border > 10 ? 10 : border}px solid #ccc`,
          borderRadius: `${borderRadius}px`,
          boxShadow: `0px 0px 2px 0px rgba(0, 0, 0, 0.77)`
        }}
      >
        Click Me
      </button>
      <div className="copy-code" onClick={onCopyHandler}>
        <RxCopy className="copy-icon" />
        <p>Copy CSS</p>
      </div>
    </div>
  );
};

export default SingleButton;
