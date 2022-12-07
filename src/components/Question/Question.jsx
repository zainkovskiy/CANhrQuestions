import React from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TextField from '@mui/material/TextField';
import { Controller } from "react-hook-form";

import './Question.scss';

export function Question({ question, register, control }) {
  return (
    <div className="question">
      <div className="question__header">
        {question.question}
      </div>
      <div className="question__body">
        <div>
          {
            question.type === 'check' &&
            <Controller
              control={control}
              name='test'
              render={({field}) => (
                <ToggleButtonGroup
                  color="primary"
                  exclusive
                  {...field}
                >
                  <ToggleButton value="Да">Да</ToggleButton>
                  <ToggleButton value="Нет">Нет</ToggleButton>
                </ToggleButtonGroup>
              )}
            />
          }
          {
            question.type === 'text' &&
            <TextField
              size="small"
              autoComplete="off"
              {...register('test2')}
            />
          }
        </div>
      </div>
    </div>
  )
}