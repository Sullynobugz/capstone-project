import styled from "styled-components";

const FormField = styled.div`
  align-items: center;
  display: flex;
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
`;

const TextInput = ({ id, label, value, setValue }) => {
  return (
    <FormField>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <ImplementationInput
        type="text"
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </FormField>
  );
};

export default TextInput;
