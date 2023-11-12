import React, { ForwardRefRenderFunction, forwardRef } from 'react';
import Select, { Props as SelectProps } from 'react-select';
import styled from 'styled-components';

const customStyles = {
  container: (provided: any) => {
    return {
      ...provided,
      width: '100%',
    };
  },
  placeholder: (provided: any) => {
    return {
      ...provided,
      fontFamily: 'Lato',
      fontWeight: 400,
      fontSize: '.875rem',
      textAlign: 'left',
      lineHeight: '1.25rem',
      color: '#ADB5BD',
      padding: '0.25rem 0.5rem',
    };
  },
  indicatorSeparator: () => ({}),
  dropdownIndicator: (provided: any) => ({
    provided,
    padding: 0,
    lineHeight: 0,
    color: '#ADB5BD',
    paddingRight: '0.5rem',
  }),
  singleValue: (provided: any) => {
    return {
      ...provided,
      fontFamily: 'Lato',
      fontWeight: 400,
      fontSize: '.875rem',
      textAlign: 'left',
      padding: '0.25rem 0.5rem',
    };
  },
  valueContainer: (provided: any) => {
    return {
      ...provided,
      padding: 0,
    };
  },
  input: (provided: any) => {
    return {
      ...provided,
      margin: 0,
      padding: '0.25rem 0.5rem',
      cursor: 'pointer',
    };
  },
  menu: (provided: any) => {
    return {
      ...provided,
      width: '100%',
      padding: '1rem',
      background: 'white',
      boxShadow: '0rem 0.75rem 1.5rem 0rem rgba(176, 184, 192, 0.2)',
      borderRadius: '.75rem',
      marginTop: '.25rem',
    };
  },
  option: (provided: any, state: any) => {
    return {
      ...provided,
      color: state.isSelected ? '#fff' : '#16236E',
      backgroundColor: state.isSelected ? '#16236E' : '#fff',
      ':hover': {
        backgroundColor: state.isSelected ? '#16236E' : '#E9ECEF',
      },
      cursor: 'pointer',
    };
  },
};

const Label = styled.label`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
`;

interface CustomSelectProps extends SelectProps<any, false> {
  label: string;
  error?: {
    message: string;
  };
  // ... add any other props you expect
}

const CustomSelectComponent = (
  props: CustomSelectProps,
  ref: React.Ref<any>
) => {
  return (
    <Label className="flex w-full font-lato">
      <p className="text-sm text-gray-500">{props.label}</p>
      <Select
        ref={ref}
        id={props.id}
        name={props.name}
        styles={customStyles}
        noOptionsMessage={() => 'No hay opciones'}
        isSearchable={false}
        options={props.options}
        {...props}
      />
      {props.error && (
        <p className="text-sm text-red-500">{props.error.message}</p>
      )}
    </Label>
  );
};

export const CustomSelect = forwardRef(CustomSelectComponent);
