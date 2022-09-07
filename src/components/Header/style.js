import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 20vh;
  background-color: #0F73A4;
`

export const Icon = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.mode};
  cursor: pointer;
  margin-right: 10px;
`