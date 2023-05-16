import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;

  background: #ffffff;

  box-shadow: 0px 6px 14px rgba(25, 31, 52, 0.06);
  border-radius: 6px;

  margin: 6px;
  padding: 6px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #fffdf8;
    box-shadow: 0px 6px 14px rgba(25, 31, 52, 0.18);
  }

  ${'' /* cursor: pointer; */}
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  fill: #f37825;
`;
