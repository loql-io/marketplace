import { TextField, useTheme } from '@material-ui/core';
import styled, { css } from 'styled-components';
import React from 'react';

const TextInput = styled(TextField)`
  max-width: 100%;
  width: 345;
  min-height: 68;
  height: auto;

  .MuiInputAdornment-root {
    align-items: flex-end;
    height: 100%;
    max-height: 79%;
    margin-right: 1;
    flex: 1;
    margin-top: 14;

    p {
      color: ${(props) => props.theme.palette.primary.dark};
    }
  }

  .MuiOutlinedInput-adornedStart {
    background: white;
  }

  .MuiOutlinedInput-adornedEnd {
    background: white;
  }

  .MuiInputBase-input {
    margin-top: 2;
    padding-bottom: 6;
    background: white;
  }

  input,
  textarea {
    background: transparent;
  }

  input:valid:focus + fieldset,
  textarea:valid:focus + fieldset {
    ${(props) =>
      css`
        border: 1px solid ${props.theme.palette.primary.dark};
      `}
  }

  .MuiFormLabel-root.Mui-focused {
    color: '#816E68';
  }

  input:valid + fieldset {
    border: 1px solid #c0a9a8;
    border-radius: 5;
  }

  fieldset {
    legend {
      width: 0;
    }
  }

  .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
    border-width: 2;
  }

  input:disabled {
    border-color: 1px solid red;
    color: #c4c4c4;
  }

  .MuiFormHelperText-root {
    font-size: 12px;
    white-space: nowrap;
  }

  .MuiInputLabel-outlined {
    transform: translate(14px, 16px) scale(1);
  }

  .MuiInputLabel-outlined.MuiInputLabel-shrink {
    transform: translate(14px, 7px) scale(0.75);
  }

  .PrivateNotchedOutline {
    width: 0;
  }

  .MuiOutlinedInput-multiline {
    background: #fff;
  }
`;

export default function CustomTextInputField(props) {
  const theme = useTheme();
  return (
    <TextInput theme={theme} variant={props.variant || 'outlined'} {...props} />
  );
}
