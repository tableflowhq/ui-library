import { useRef, useState } from "react";
import classes from "../utils/classes";
import { PillProps } from "./types";
import style from "./style/Pill.module.scss";
import Icon from "../Icon";


export default function PillInput({
  label,
  className,
  error,
  variants = [],
  placeholder,
  ...props
}: PillProps) {
  const Element = "input";
  const [pills, setPills] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const variantStyles = classes(variants.map((c: string) => style[c]));
  const containerClassName = classes([
    style.container,
    variantStyles,
    className,
  ]);

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: any) => {
    if ([" ", "Enter"].includes(event.key) && inputValue.trim()) {
      setPills([...pills, inputValue.trim()]);
      setInputValue("");
      event.preventDefault();
    }
    if(event.key === "Backspace" && !inputValue) {
      handleRemovePill(pills.length - 1);
    }
  };

  const handleRemovePill = (indexToRemove: any) => {
    setPills(pills.filter((_, index) => index !== indexToRemove));
  };

    const iconElement = (
      <span className={style.icon}>
          <Icon icon='cross' />
      </span>
  );

  const inputWrapper = (
    <div className={classes([style.inputWrapper, error && style.hasError])}>
      {pills.map((pill, index) => (
        <div key={index} className={style.pill}>
          {pill}
          <span onClick={() => handleRemovePill(index)}>{iconElement}</span>
        </div>
      ))}
      <input
        type="text"
        ref={inputRef}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder={pills.length === 0 ? placeholder : ""}
        style={{ width: pills.length ? `${inputValue.length + 1}ch` : "100%" }}
        {...props}
      />
    </div>
  );

  return (
    <div className={containerClassName}>
      <label>
        {label ? <span className={style.label}>{label}</span> : null}
        {inputWrapper}
      </label>
    </div>
  );
}