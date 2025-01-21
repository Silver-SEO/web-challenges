import styled, { css } from "styled-components";

export default function BoxWithStyledComponents() {
  return <StyledContainer></StyledContainer>;
}

const StyledContainer = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  margin: 2rem;
`;
// '
//   .box-with-classname:hover {
//     background-color: red;
//   }

//   .box-with-classname--black {
//     background-color: black;
//   }'
