import { useState } from "react";
import WindowSizeComponent from "./display-window-size";
import IntlComponent from "./international-component";

const Common = () => {
  const [hello] = useState("Hello World!");

  return (
    <>
      <div>hi there</div>
      <div>{hello}</div>
      <IntlComponent />
      <WindowSizeComponent />
    </>
  );
};
export default Common;
