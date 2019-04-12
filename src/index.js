import React from 'react';
import { render } from "react-dom";
import { EcosystemHeader} from "./lib";
import { EcosystemWrapper } from "./lib";

const App = () => (
  <div>
    <EcosystemWrapper>
      <EcosystemHeader/>
    </EcosystemWrapper>
  </div>
);

render(<App />, document.getElementById("root"));
