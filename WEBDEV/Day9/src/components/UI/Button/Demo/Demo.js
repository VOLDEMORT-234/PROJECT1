import React from "react";

const DemoOutput = (props) => {
  return <p>{props.show ? "HI MY NAME IS DEEPESH" : ""}</p>;
};

export default React.memo(DemoOutput);
//   {
//     showParagraph && <p>This is new!</p>;
//   }
