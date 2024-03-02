import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const data = 'Hello from parent!';

  return <ChildComponent message={data} />;
}

export default ParentComponent;

import React from 'react';

function ChildComponent(props) {
  return <p>{props.message}</p>;
}

export default ChildComponent;




// default value if props is not passed 
import React from 'react';

function Greeting(props) {
  const { name = 'Guest' } = props;

  return <p>Hello, {name}!</p>;
}

export default Greeting;


import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <Greeting /> {/* Outputs: Hello, Guest! */}
      <Greeting name="John" /> {/* Outputs: Hello, John! */}
    </div>
  );
}

export default App;


// make dynamic cards from the same code for different persons 