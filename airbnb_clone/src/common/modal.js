import styled from "styled-components";

export const ModalDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  opacity: ${(props) => (props.value ? "" : "0.8")};

  background-color: ${(props) =>
    props.value ? "" : "rgba(119, 117, 117, 0.5)"};
`;
