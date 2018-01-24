import React from 'react';
import styled from 'styled-components';

const RoundedButton = styled.button`
  border: none;
  border-radius: 50px;
  cursor: pointer;
  display: inline-block;
  line-height: 4rem;
  font-size: 20px;
  margin: 2px 2px;
  outline: none;
  padding: 0 10px;
  box-shadow: 3px 6px 6px rgba(0,0,0,.4);
  text-transform: uppercase;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 7px 14px 14px rgba(0,0,0,.4);
  }

  &:active {
    transform: translateY(-2px);
    box-shadow: 6px 12px 12px rbga(0,0,0,.4);
  }
`;

export default RoundedButton;