'use client'
import React, { useState, useEffect, FC } from 'react'
import "./styles.css"

interface InputProps {
  name: string,
  value: string,
  onChangeFunc: (props: any) => void,
  type?: string,
  style?: object,
  label?: string,
  required?: boolean,
  placeholder?: string
  error?: string
}

export const Input: FC <InputProps> = (props) => {
  const {
    name = "",
    value = "",
    onChangeFunc = (props: any) => {},
    type = "text",
    style = {},
    label = "",
    required = false,
    placeholder = '',
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
    <div className="input-container">
      {
        label &&
        <p className="input-label">
          {label} {required && <span style={{ fontSize: "18px", color: "red" }}>*</span>}
        </p>
      }


      {
        type !== "textarea"
        ? <input
          className="input"
          type={type}
          name={name}
          value={inputValue}
          onChange={onChange}
          style={style}
          required={required}
          placeholder={placeholder}
        />
        : <textarea
            className="textarea"
            name={name}
            value={inputValue}
            onChange={onChange}
            required={required}
            placeholder={placeholder}
          />
      }

      {
        error &&
          <p className="error-label">
            {error}
          </p>
      }
    </div>
  )
}
