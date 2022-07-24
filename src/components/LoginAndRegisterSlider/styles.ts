import styled from "styled-components";

export const Container = styled.div`
  width: 50vw;
  height: 100vh;

  display: flex;
  align-items: flex-end;

  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  background-color: ${props => props.theme.colors.bg_color_dark};
`;
