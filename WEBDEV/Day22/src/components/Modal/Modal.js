import React from "react";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";

const animationTimin = {
  enter: 400,
  exit: 1000,
};

const modal = (props) => {
  //   const cssClasses = ["Modal"];

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTimin}
      classNames={{
        enter: "",
        enterActive: "ModalOpen",
        exit: "",
        exitActive: "ModalClosed",
      }}
      // classNames is different
    >
      {/* {(state) => {
        const cssClasses = [
          "Modal",
          state === "entering"
            ? "ModalOpen"
            : state === "exiting"
            ? "ModalClosed"
            : null,
        ];
        return ( */}
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
      {/* ); */}
      {/* }} */}
    </CSSTransition>
  );
};

export default modal;
