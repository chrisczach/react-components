import { useState } from 'react';

//use to wrap component to expose 'on' property and 'toggle' method
// to use, wrap component in anonymous function passing in (on, toggle)
const Toggle = props => {
  const [on, setOn] = useState(false);
  const toggle = () => setOn((on) => !on);
  return props.children(on, toggle);
};

export default Toggle;
