'use client'
import React, { useEffect, useState, FC } from "react";
import './styles.css'

interface OptionSelectProps {
  name: string,
  value: string,
  onChangeFunc: (props: any) => void,
  style?: object,
  label?: string,
  required?: boolean,
  options: any[],
  error?: string
}

export const OptionSelect: FC<OptionSelectProps> = (props) => {
  const {
    name = "",
    value = "",
    onChangeFunc = (props: any) => {},
    style = {},
    label = "",
    required = false,
    options = [],
    error = ""
  } = props
  const [inputValue, setInputValue] = useState(value)

  const onChange = (e: any) => {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    onChangeFunc({name, value: inputValue})
  }, [inputValue])

  useEffect(() => {
    setInputValue(value)
  }, [value])

  return (
    <div className="select-container">
      <p className="select-label">
        {label} {required && <span style={{ fontSize: "18px", color: "red" }}>*</span>}
      </p>

      <select
        className="select"
        name={name}
        onChange={onChange}
        required={required}
        style={style}
      >
        {
          options.map((option, index) => (
            <option
              value={option.value}
              key={"optsel-" + index}
            >
              {option.label}
            </option>
          ))
        }
      </select>
      {
        error &&
        <p className="error-label">
          {error}
        </p>
      }
    </div>
  )
}
