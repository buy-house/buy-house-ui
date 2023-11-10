import React from "react";
import styled from "styled-components";

const TextFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
  color: #172234;
`;

const Input = styled.input`
  height: 48px;
  padding: 14px 20px;
  font-size: 14px;
  background-color: #e0e0e0;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  outline: none;
  color: #172234;

  &:focus {
    border: 1px solid #ccc;
  }
`;

const StyledTextField = ({ label, placeholder, value, onChange, register }) => {
  return (
    <TextFieldWrapper>
      <Label>{label}</Label>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        $register={register}
      />
    </TextFieldWrapper>
  );
};

export default StyledTextField;
