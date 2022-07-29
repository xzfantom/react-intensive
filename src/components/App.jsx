import React, { useState } from 'react';
import QuestionForm from './QuestionForm';
import QuestionResult from './QuestionResult';

const emptyState = () => ({
  name: '',
  secondname: '',
  birthday: '',
  phone: '',
  website: '',
  about: '',
  technologystack: '',
  lastproject: '',
  submitted: false,
});

export default function App() {
  const [state, setState] = useState(emptyState());

  const { submitted, ...data } = state;

  const onSubmit = (result) => {
    setState({ ...result, submitted: true });
  }

  if (submitted) {
    return (
      <QuestionResult data={data} />
    )
  }
  return (
    <QuestionForm onSubmit={onSubmit} />
  );
}
