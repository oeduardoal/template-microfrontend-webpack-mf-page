import React from "react";
import {
  Heading,
  Button,
  Input,
  Container,
  Box,
} from "@grupoboticario/flora-react";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Account = () => {
  const query = useQuery();
  const name = query.get("name");

  return (
    <Container
      size="large"
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        paddingTop: "$7",
        gap: "$4",
      }}
    >
      <Heading level={5} css={{ fontWeight: "$strong" }}>
        Olá {name}
      </Heading>
      <Box>
        <Input id="input-test" labelText="Input" placeholder="Text" />
      </Box>
      <Button>Button Account</Button>
    </Container>
  );
};

export default Account;
