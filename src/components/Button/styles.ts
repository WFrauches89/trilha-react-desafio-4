import styled from 'styled-components';
import { IButtonPropsStyled } from './types';

export const ButtonContainer = styled.button<IButtonPropsStyled>`
  width: 100%;
  height: 42px;
  background-color: #81259d;
  color: #fff;

  border: 1px solid #81259d;
  border-radius: 21px;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
    background-color: #f30000;
    cursor: not-allowed;
  }
`;
