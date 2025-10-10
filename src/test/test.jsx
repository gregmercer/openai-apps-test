import React from "react";
import { useWidgetProps } from "../use-widget-props";

export function App() {
  const widgetProps = useWidgetProps() || {};
  const { title_text } = widgetProps;

  const helloAgain = async () => {
    await window.openai?.callTool("test-tool", { "title_text": "hi again. :)" });
  };

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      padding: '16px',
      fontSize: '18px',
      fontWeight: 'bold'
    }}>
      <div>{title_text || 'hi'}</div>
      <button
        onClick={helloAgain}
        style={{
          marginTop: '10px',
          padding: '8px 16px',
          fontSize: '14px',
          cursor: 'pointer',
          backgroundColor: 'green',
          color: 'white',
          border: 'none',
          borderRadius: '4px'
        }}
      >
        Say Hello Again
      </button>
    </div>
  );
}

export default App;