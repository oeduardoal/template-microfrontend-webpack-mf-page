import React from "react";
import { Container } from "@grupoboticario/flora-react-container";
import { Heading } from "@grupoboticario/flora-react-heading";
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
    </Container>
  );
};

export default Account;
