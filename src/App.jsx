import React, { useState } from 'react';
import QuestionForm from './components/QuestionForm/QuestionForm';
import QuestionResult from './components/QuestionResult/QuestionResult';

const emptyState = {
  name: '',
  secondname: '',
  birthday: '',
  phone: '',
  website: '',
  about: '',
  technologystack: '',
  lastproject: '',
  submitted: false,
};

export default function App() {
  const [state, setState] = useState({ ...emptyState });

  const { submitted, ...data } = state;

  const onSubmit = (result) => {
    setState({ ...result, submitted: true });
  }

  return submitted ? <QuestionResult data={data} /> : <QuestionForm onSubmit={onSubmit} />;
}
