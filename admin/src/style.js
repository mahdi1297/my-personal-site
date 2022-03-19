import styled from "styled-components";

const Body = styled.div`
  width: 83%;
  position: absolute;
  left: 0;
  padding: 10px;

  @media (max-width: 1200px) {
    width: 77%;
  }

  @media (max-width: 1000px) {
    width: 72%;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export { Body };
