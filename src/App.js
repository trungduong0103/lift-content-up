import React from "react";
import "./styles.css";

function ParentComponent({ children }) {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  const reset = React.useState({})[1];

  return (
    <div
      style={{
        border: `3px dashed black`,
        backgroundColor: randomColor,
        padding: 15
      }}
    >
      Hey I've slotted my child here:
      <div style={{ padding: 15 }}>
        {/* Rendering ChildComponent inside render will not skip re-render */}
        {/* <ChildComponent /> */}
        {children}
      </div>
      <button onClick={() => reset({})}>Reset</button>
    </div>
  );
}

function ChildComponent() {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  return (
    <div
      style={{
        border: `3px dashed black`,
        backgroundColor: randomColor,
        padding: 30
      }}
    >
      I'm a child
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <ParentComponent>
        <ChildComponent />
      </ParentComponent>
    </div>
  );
}
