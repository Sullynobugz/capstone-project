import React, { useState } from "react";
import styled from "styled-components";

const Label = styled.label`
  color: #f5f5f5;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  background-color: #444;
  border: 1px solid #777;
  color: #f5f5f5;
  border-radius: 5px;
  padding: 8px;
  margin: 8px 0;
  width: 100%;
`;

const ImplementationFormField = ({ label, value, setValue }) => {
  return (
    <div>
      <Label>{label}</Label>
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default ImplementationFormField;
