import styled from "vue3-styled-components";

export const StyledButton = styled.button`
  font-size: 1.5em;
  color: #6657F5;
  border-radius: 5px;
  border: 1px ridge #6657F5;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 700;
  font-family: inherit;
  background-color: white;
  cursor: pointer;
  transition: border-color 0.25s;


  &:hover {
    background-color: #F2F2F2;
  }
  
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

`;