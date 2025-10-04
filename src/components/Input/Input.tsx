import React, { useState } from "react";
import CloseEye from "../../image/closeEye.svg";
import OpenEye from "../../image/openEye.svg";
import Clear from "../../image/clear.svg";
import "./Input.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  clearable?: boolean;
}

export const Input: React.FC<InputProps> = ({
  type = "text",
  clearable = false,
  placeholder,
  value: propValue,
  onChange: propOnChange,
  ...props
}) => {
  const [value, setValue] = useState(propValue || "");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    propOnChange?.(e);
  };

  const handleClear = () => setValue("");

  const isPassword = type === "password";

  return (
    <div className="inputWrapper">
      <div className="Box">
        <input
          {...props}
          type={isPassword && showPassword ? "text" : type}
          className="input"
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />

        {!isPassword && clearable && value && (
          <button type="button" className="button" onClick={handleClear}>
            <img className="img" src={Clear} alt="Clear" />
          </button>
        )}

        {isPassword && (
          <button
            type="button"
            className="button"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            <img
              className="img"
              src={showPassword ? OpenEye : CloseEye}
              alt={showPassword ? "Hide password" : "Show password"}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
