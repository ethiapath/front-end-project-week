import React, { useState } from 'react';
import './Form.css';

const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    onChange: e => setValue(e.target.value)
  };
}

export const Form = ({ onSubmit, action, history, note }) => {
  if (note === undefined) {
    note = {
      title: '',
      textBody: ''
    }
  }
  const title = useInputValue(note.title);
  const textBody = useInputValue(note.textBody)

  return (
    <div className="note-form">
      <form onSubmit={e => {
        e.preventDefault();
        onSubmit({
          title: title.value,
          textBody: textBody.value
        })
        history.push('/')
      }}>
        <input {...title} />
        <input {...textBody} />
        <button type="submit">{action}</button>
      </form>
    </div>
  )
}