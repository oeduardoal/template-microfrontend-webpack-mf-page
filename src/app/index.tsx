import React from "react";
import { Heading } from "@grupoboticario/flora-react-heading";

const App: React.FC = ({ name = "Not logged" }) => {
  return <Heading>Account Store {name}</Heading>;
};

export default App;
