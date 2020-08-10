function page(value) {
  const code = `
import React from "react";
import { Container } from "./styles";

const ${value}: React.FC = () => {
  return (
    <Container>
      <span>${value}</span>
    </Container>
  );
};

export default ${value};
  `;

  return code;
}

module.exports = page;
