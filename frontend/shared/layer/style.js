import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  height: 100%;
  margin: auto;
  max-width: 1400px;
  min-width: 320px;

  @media (min-width: 900px) {
    width: ${(props) => (props.fluid ? "95%" : "85%")};
  }

  @media (min-width: 1200px) {
    width: ${(props) => (props.fluid ? "95%" : "80%")};
  }
`;

export const Flex = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: ${(props) => props.direction ? props.direction : 'row'};
    justify-content: ${(props) => props.justify ? props.justify : 'flex-start'};
    align-items: ${(props) => props.align ? props.align : ''};
    flex-wrap: ${(props) => props.wrap ? 'wrap' : 'no-wrap'}
`
