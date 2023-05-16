import styled from '@emotion/styled';

export const TabletContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 52px;
  color: #0d161b;
  margin-bottom: 24px;
`;

export const Input = styled.input`
  margin-left: 16px;
  font-size: 18px;
  padding: 4px 4px 4px 30px;
  border: none;
  border-bottom: 1px solid #c4c4c4;
  background-color: transparent;
`;

export const Button = styled.button`
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: #0d161b;
  margin: 8px;
  padding: 12px 40px;
  border: 1.5px solid #86969b;
  border-radius: 8px;
  background-color: transparent;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #a6f309;
    border: 1.5px solid #dedede;
  }
`;

export const Label = styled.label`
  position: relative;
  display: block;
  max-width: 280px;

  margin: 8px auto;

  @media screen and (min-width: 768px) {
    margin: 6px;
  }
`;

export const FormIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translate(-50%, -50%);
`;
