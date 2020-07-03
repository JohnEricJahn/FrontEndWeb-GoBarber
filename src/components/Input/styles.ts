import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  color: #666360;
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;

  & + div {
    margin-top: 8px;
  }

  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: none;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
