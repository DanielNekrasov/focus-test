import React from 'react'
import styled from '@emotion/styled'
import {Button, srOnlyStyles} from '../shared/styles'

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
      <legend>{name}</legend>
      {options.map((option: Option) => (
        <Radio key={`${name}-${option.value}`}>
          <input
            type="radio"
            name={name}
            value={option.value}
            defaultChecked={defaultValue === option.value}
            onChange={handleChange}
          />
          <Button as={'span'}>{option.label}</Button>
        </Radio>
      ))}
    </RadioContainer>
  )
}

const Radio = styled.label`
  input {
    ${srOnlyStyles}
  }

  input[type='radio']:checked + ${Button} {
    background-color: var(--color-gray);
    color: var(--color-white);
    box-shadow: none;
  }

  input[type='radio']:focus-visible + ${Button} {
    outline: 3px solid rgba(131, 192, 253, 0.5);
  }
`

const RadioContainer = styled.fieldset`
  display: grid;
  gap: 10px;
  border: 0;

  legend {
    ${srOnlyStyles}
  }
`

export default RadioGroup
