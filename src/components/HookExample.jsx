import React, { useState } from 'react';

function Example() {
  // Declare state variables
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={(prevCount) => setCount(prevCount + 1)}>Click me</button>
    </div>
  );
}
