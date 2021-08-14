import React, {useState} from 'react'
import styled from '@emotion/styled'
import {srOnlyStyles} from '../shared/styles'

type Option = {
  label: string
  value: any
}

type RadioGroupProps = {
  name: string
  defaultValue?: any
  options: Option[]
  onChange?: (value: any) => void
}

const RadioGroup: React.FC<RadioGroupProps> = props => {
  const {options, name, defaultValue, onChange} = props
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange && typeof onChange === 'function') {
      onChange(e.currentTarget.value)
    }
  }

  return (
    <RadioContainer>
      {options.map((option: Option) => (
        <RadioItem as={'label'} key={`${name}-${option.value}`}>
          <input
            type="radio"
            name={name}
            value={option.value}
            defaultChecked={defaultValue === option.value}
            onChange={handleChange}
          />
          <span>{option.label}</span>
        </RadioItem>
      ))}
    </RadioContainer>
  )
}

const Button = styled.button`
  display: inline-flex;
  min-width: 120px;
  cursor: pointer;
  font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 16px;
  font-weight: normal;
  text-align: center;

  span {
    display: inline-block;
    width: 100%;
    padding: 8px 16px;
    background-color: white;
    color: black;
    border-radius: 8px;
  }

  input[type='radio']:checked + span {
    background-color: black;
    color: white;
  }

  input {
    ${srOnlyStyles}
  }
`

const RadioContainer = styled.div`
  display: grid;
  gap: 10px;
`

const RadioItem = styled(Button)`
  display: flex;
`

export default RadioGroup
