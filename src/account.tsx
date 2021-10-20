import React from "react";

const Account: React.FC = ({ name = "Not logged" }) => {
  return <>{name ? `Welcome ${name}` : ""}</>;
};

export default Account;
