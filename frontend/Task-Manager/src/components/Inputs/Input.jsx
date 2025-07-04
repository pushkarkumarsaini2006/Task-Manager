import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Input = ({ value, onChange, label, placeholder, type, id, name }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      {label ? (
        <label
          className="text-[13px] text-slate-800"
          htmlFor={id || name || label?.replace(/\s+/g, "").toLowerCase()}
          id={(id || name || label?.replace(/\s+/g, "").toLowerCase()) + "-label"}
        >
          {label}
        </label>
      ) : null}
      <div className="input-box">
        <input
          id={id || name || label?.replace(/\s+/g, "").toLowerCase()}
          aria-labelledby={label ? (id || name || label?.replace(/\s+/g, "").toLowerCase()) + "-label" : undefined}
          name={
            name ||
            id ||
            label?.replace(/\s+/g, "").toLowerCase()
          }
          type={
            type == "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          className="w-full bg-transparent outline-none"
          value={value ?? ""}
          onChange={(e) => onChange(e)}
          autoComplete={
            type === "password"
              ? "current-password"
              : type === "email" || name?.toLowerCase().includes("email") || placeholder?.includes("@")
              ? "email"
              : name?.toLowerCase().includes("user")
              ? "username"
              : undefined
          }
          aria-label={label}
        />

        {type === "password" && (
          <>
            {showPassword ? (
              <FaRegEye
                size={22}
                className="text-primary cursor-pointer"
                onClick={() => toggleShowPassword()}
              />
            ) : (
              <FaRegEyeSlash
                size={22}
                className="text-slate-400 cursor-pointer"
                onClick={() => toggleShowPassword()}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Input;
