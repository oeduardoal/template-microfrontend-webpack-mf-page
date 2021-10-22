import React from "react";
import { Container } from "@grupoboticario/flora-react-container";
import { Heading } from "@grupoboticario/flora-react-heading";
import { Button } from "@grupoboticario/flora-react-button";
import { Input } from "@grupoboticario/flora-react-input";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Account = () => {
  const query = useQuery();
  const name = query.get("name");

  return (
    <Container size="large" css={{ paddingTop: "$8" }}>
      <Heading level={5} css={{ fontWeight: "$strong" }}>
        Olá {name}
      </Heading>
      <Button>Button Accounr</Button>
      <Input id="input-test" labelText="Input" placeholder="Text" />
    </Container>
  );
};

export default Account;
