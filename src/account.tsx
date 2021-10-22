import React from "react";
import { Container, Heading, Button, Input } from "@grupoboticario/flora-react";
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
      <Button>Button Account</Button>
      <Input id="input-test" labelText="Input" placeholder="Text" />
    </Container>
  );
};

export default Account;
