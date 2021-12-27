import styled from "styled-components";

export const Transparent = styled.div`
  background: transparent !important;
`;

export const Header = styled.div`
  background: transparent !important;
`;

export const Centered = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const AppContainer = styled.div`
  background: rgb(34, 193, 195);
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );
  min-height: 100vh;
  padding: 20px;
`;

export const yo = () => {
  console.log("yo");
};

export default () => {
  console.log("hi");
};