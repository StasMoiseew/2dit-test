import { ChangeEvent, FC, useEffect, useState } from "react";

import "./Input.css";

type Props = {
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  placeholder?: string;
  className?: string;
  isPhone?: boolean;
  isEmail?: boolean;
};

export const Input: FC<Props> = ({
  value,
  onChange,
  label,
  placeholder,
  className,
  isPhone,
  isEmail
}) => {
  const [currentValue, setCurrentValue] = useState("");

  const baseClassName = className ? `input ${className}` : "input";

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const clearValue = event.target.value.replace(/ /gm, '');
    if (isPhone) {
      let pattern = /(\+7|8)[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/g;
      let correctNumber = clearValue.replace(pattern, '+7 ($2) $3-$4-$5');
      console.log('correctNumber', correctNumber);
      setCurrentValue(correctNumber);
      onChange?.(correctNumber);
    } else {
      setCurrentValue(clearValue);
      onChange?.(clearValue);
    }
  }  

  useEffect(() => {
    setCurrentValue(value || "");
  }, [value]);

  return (
    <div className={baseClassName}>
      <input
        type={isEmail ? 'email' : 'text'}
        value={currentValue}
        onChange={handleChange}
        className="input__field"
        placeholder={placeholder}
      />
    </div>
  );
};
