import React from "react";
import { useWidgetProps } from "../use-widget-props";

export function App() {
  const widgetProps = useWidgetProps() || {};
  const { title_text } = widgetProps;

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      padding: '16px',
      fontSize: '18px',
      fontWeight: 'bold'
    }}>
      {title_text || 'hi'}
    </div>
  );
}

export default App;