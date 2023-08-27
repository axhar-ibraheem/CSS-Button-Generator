import { useEffect } from "react";

const Toast = (props) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      props.setIsVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [props.isVisible]);

  return (
    <div className="toast visible">
      <div className="progress"></div>
      <div className="message">Copied to clipboard.</div>
    </div>
  );
};

export default Toast;
