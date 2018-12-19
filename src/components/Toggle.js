import { useState } from 'react';

//use to wrap component to expose 'on' property and 'toggle' method
// to use, wrap component in anonymous function passing in (on, toggle)
export default props => {
  const [on, toggleOn] = useState(false);
  const toggle = (shown  = on) => toggleOn(!shown);
  return props.children(on, toggle);
};
