import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import { InputLabel, TextInput } from "./TextInput.styled";

interface InputProps {
  icon?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  onChange?: ChangeEventHandler;
  value?: string;
  role?: string;
}

export const TextInputProps = ({ icon, placeholder, onChange, value, type, role }: InputProps) => {
  return (
    <InputLabel>
      {icon && <img src={icon} alt="" />}
      <TextInput
        role={role}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type={type}
        aria-label="input"
      />
    </InputLabel>
  );
};
