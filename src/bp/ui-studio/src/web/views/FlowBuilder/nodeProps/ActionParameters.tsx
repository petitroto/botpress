import _ from 'lodash'
import React, { FC } from 'react'

import { ParameterValue } from './ActionDialog'
import { ActionParameter } from './ActionParameter'

export const ActionParameters: FC<{
  parameterValues: ParameterValue[]
  onUpdate: (parameterValues: ParameterValue[]) => void
}> = props => {
  const { onUpdate, parameterValues } = props

  return (
    <React.Fragment>
      {parameterValues.map((parameterValue, idx) => {
        const { name } = parameterValue.definition
        return (
          <ActionParameter
            key={name}
            parameterValue={parameterValue}
            onValueUpdated={parameterValue => {
              const copy = [...parameterValues]
              copy[idx] = { ...parameterValue }
              onUpdate(copy)
            }}
          />
        )
      })}
    </React.Fragment>
  )
}