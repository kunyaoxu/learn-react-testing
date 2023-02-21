import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  font-weight: bold;
  color: white;
  background-color: #1055bb;
  cursor: pointer;

  &:hover {
    color: grey;
    background-color: #dddddd;
  }
`;
