import styled from "styled-components";

const FormFieldContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const FormLabel = styled.label`
  margin-right: 16px;
  min-width: 180px;
  text-align: right;
  font-size: 1.2rem;
  color: #f5f5f5;
`;

const ImplementationInput = styled.input`
  background-color: #444;
  border: 1px solid #777;
  color: #f5f5f5;
  border-radius: 5px;
  padding: 8px;
  font-size: 1.2rem;
  width: 100%;
`;

const ImplementationFormField = ({ label, value, setValue }) => {
  return (
    <FormFieldContainer>
      <FormLabel>{label}</FormLabel>
      <ImplementationInput
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </FormFieldContainer>
  );
};

export default ImplementationFormField;
