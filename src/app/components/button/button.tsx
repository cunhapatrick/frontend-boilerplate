import React, { useState, useEffect } from "react";
import { Button } from "antd";
import "./styles.button.less";

// NOTE React Hook code to create component
export default function button() {
  const [name] = useState("Button Example");
  const [counter, setCount] = useState(0);

  useEffect(() => {
    document.title = name;
    console.log(counter);
    // ComponentWillUnmount
    return () => {};
  }, [counter]);

  function handleCount() {
    setCount(counter + 1);
  }

  return <Button onClick={handleCount}>{name}</Button>;
}

// NOTE Common classfull component code for react
// export default class extends Component {
//   render() {
//     return <Button>Button Example</Button>;
//   }
// }

// NOTE useEffect Notes
/**
 * useEffect(1 parameter): componentDidMount, componentDidUpdate
 */
