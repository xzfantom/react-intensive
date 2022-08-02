import React from 'react';
import QuestionForm from './QuestionForm';
import QuestionResult from './QuestionResult';

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

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { ...emptyState };
  }

  onSubmit = (result) => {
    this.setState({ ...result, submitted: true });
  }

  render() {
    const { submitted, ...data } = this.state;
    return submitted ? <QuestionResult data={data} /> : <QuestionForm onSubmit={this.onSubmit} />;
  }
}

export default App;