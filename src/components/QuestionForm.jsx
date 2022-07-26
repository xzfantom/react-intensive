import React from 'react';
import FormInput from './FormInput';
import FormTextarea from './FormTextArea';
import style from './QuestionForm.module.css';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      secondname: '',
      birthday: '',
      phone: '',
      website: '',
      about: '',
      technologystack: '',
      lastproject: '',
    };
  }

  handleInput = (name, value) => {
    this.setState({ [name]: value })
  }

  handleSubmit = () => {
    console.log(this.state);
  }

  handleReset = () => {
    this.setState({
      name: '',
      secondname: '',
      birthday: '',
      phone: '',
      website: '',
      about: '',
      technologystack: '',
      lastproject: '',
    });
  }

  render() {
    return (
      <div className={style.QuestionForm}>
        <form>
          <FormInput id='name' name='Имя' value={this.state.name} onChange={this.handleInput} />
          <FormInput id='secondname' name='Фамилия' value={this.state.secondname} onChange={this.handleInput} />
          <FormInput id='birthday' name='Дата рождения' value={this.state.birthday} onChange={this.handleInput} />
          <FormInput id='phone' name='Телефон' value={this.state.phone} onChange={this.handleInput} />
          <FormInput id='website' name='Сайт' value={this.state.website} onChange={this.handleInput} />
          <FormTextarea id='about' name='О себе' value={this.state.about} onChange={this.handleInput} />
          <FormTextarea id='technologystack' name='Стек технологий' value={this.state.technologystack} onChange={this.handleInput} />
          <FormTextarea id='lastproject' name='Описание последнего проекта' value={this.state.lastproject} onChange={this.handleInput} />
          <div className={style.buttons}>
            <input type="button" name="cancel" value="Отмена" onClick={this.handleReset} />
            <input type="button" name="save" value="Сохранить" onClick={this.handleSubmit} />
          </div>
        </form>
      </div>
    )
  }
}

export default QuestionForm;