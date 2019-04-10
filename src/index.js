import React from 'react';
import { render } from "react-dom";
import { TextInput } from "./lib";
import { EcosystemWrapper } from "./lib";

const App = () => (
  <div>
    <EcosystemWrapper>
      <h1>Hello React</h1>
      <TextInput label="Email Address" placeholder="name@example.com" />
    </EcosystemWrapper>
  </div>
);

render(<App />, document.getElementById("root"));
