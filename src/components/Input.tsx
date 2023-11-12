import React, { useState } from 'react';
import styled from 'styled-components';

interface InputProps {
  required?: boolean;
  error?: boolean;
  noLabel?: boolean;
  icon?: boolean;
  width?: string | number;
  img?: (HTMLElement & SVGAElement) | string;
  labelText?: string;
  placeholderText: string;
  errorText?: string;
  filter?: string;
  setFilter?: any;
  setFormValue?: (arg: string) => string;
  type: string;
  isInnerTooltip?: boolean;
  tooltipText?: string;
  disabled?: boolean;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface CustomInputProps {
  error?: boolean;
  icon?: boolean;
  img?: HTMLElement & SVGAElement;
}

interface LabelProps {
  width?: string | number;
}

interface IconProps {
  setIcon: HTMLElement & SVGAElement;
}

const CustomInput = styled.input<CustomInputProps>`
  padding: 12px};
  border-radius: 4px};
  border: ${({ error, theme }) =>
    error
      ? `1px solid #FF0000`
      : `1px solid #000`};
  background-color: #fff;
  box-sizing: border-box
  font-family: Poppins;
  font-size: 14px;
  line-height: 20px;
  ::placeholder {
    color: #FF0000;
    font-family: Poppins;
    font-size: 14px;
    line-height: 20px;
  }
  &:focus {
    border: 1px solid #000;
    box-shadow: #000 0px 0px 4px 0px;
    outline: none;
  }
  ${({ icon, img }) => {
    if (icon) {
      return `background-image: url(${img}); background-repeat: no-repeat; background-position: 98% 50%;`;
    }
  }}
`;
export const Label = styled.label<LabelProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  width: ${({ width }) => width || '18.75rem'};
`;

export const Input = React.forwardRef<any, InputProps>(
  (
    {
      required,
      error,
      noLabel,
      icon,
      width = 0,
      labelText = 'label text',
      placeholderText = 'Field Text',
      errorText = 'Error Text',
      setFilter,
      setFormValue,
      type = 'text',
      disabled,
      name,
      onChange
    },
    ref
  ) => {
    const [hidePassword, setHidePassword] = useState(true);

    return (
      <Label width={width}>
        {labelText && (
          <p className="font-lato-bold text-md text-primary">
            {labelText} {required && <span className="text-danger">*</span>}
          </p>
        )}
        <div style={{ position: 'relative', width: 'inherit' }}>
          <CustomInput
            style={{
              width: `100%`,
              paddingTop: 12,
              paddingBottom: 12,
              paddingRight: 0,
              paddingLeft: 12,
              border: '1px solid #16236E',
              borderRadius: 4,
            }}
            ref={ref}
            type={type === 'password' && hidePassword ? 'password' : 'text'}
            placeholder={placeholderText}
            error={error}
            icon={icon}
            disabled={disabled}
            name={name}
            onChange={onChange}
          />
        </div>

        {error && <p className="text-danger text-sm font-lato">{errorText}</p>}
      </Label>
    );
  }
);

Input.displayName = 'Input';