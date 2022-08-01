import {useState} from 'react';
import './App.css';
import FormInput from './components/FormInput';
import FormTextarea from './components/FormTextarea';

function App() {
  let [values, setValues] = useState({
    firstName:'',
    lastName:'',
    birthday:'',
    phone:'',
    site:'',
    about:'',
    stak:'',
    project:'',
  });

  const inputs = [
    {
      id: 1,
      name:'firstName',
      type: "text",
      placeholder: "Напишите своё имя",
      errorMessage:
        'Поле должно быть заполнено. Первая буква должна быть заглавной',
      label: 'Имя',
      pattern: "^[A-Z, А-Я]{1}[A-Za-zА-Яа-яЁё]{1,15}$",
      required: true,
    },
    {
      id: 2,
      name:'lastName',
      type: "text",
      placeholder: "Напишите свою фамилию",
      errorMessage:
      'Поле должно быть заполнено. Первая буква должна быть заглавной',
      label: 'Фамилия',
      pattern: "^[A-Z, А-Я]{1}[A-Za-zА-Яа-яЁё]{1,15}$",
       required: true,
    },
    {
      id: 3,
      name:'birthday',
      type: 'date',
      placeholder: "Дата рождения",
      label: 'Дата',
    },
    {
      id: 4,
      name:'phone',
      type: 'tel',
      placeholder: "7-7777-77-77",
      errorMessage:
        'Поле должно быть заполнено. Формат номера 7-7777-77-77',
      label: 'Телефон',
      pattern: "^[0-9]{1}-[0-9]{4}-[0-9]{2}-[0-9]{2}$",
      required: true,
    },
    {
      id: 5,
      name:'site',
      type: 'url',
      placeholder: "Сайт",
      errorMessage:
      'Поле должно быть заполнено. Имя сайта должно начинаться с https://',
      label: 'Сайт',
      pattern: "^https?://.+",
      required: true,
    },  
  ];

  const textareas = [
    {
      id: 6,
      name:'about',
      type: 'text',
      placeholder: "Расскажите о себе",
      errorMessage:
      'Поле должно быть заполнено',
      label: 'О себе',
      pattern: "^{3,600}$",
      maxLength: '600',
      required: true,
    },

    {
      id: 7,
      name:'stak',
      type: 'text',
      height: '140',
      placeholder: 'Стек',
      errorMessage:
        'Поле должно быть заполнено',
      label: 'Стек технологий',
      pattern: "^{3,600}$",
      maxLength: '600',
      required: true,
      },
  
    {
      id: 8,
      name:'project',
      type: 'text',
      placeholder: 'О последнем проекте',
      maxLength: '600',
      errorMessage:
        'Поле должно быть заполнено',
      label:  'Описание последнего проекта',
      pattern: "^{3,600}$",
      required: true,
      },


  ]
  
  const onChange =(e)=>{
    setValues({...values, [e.target.name]: e.target.value})
  }

  const handleClear = (e)=>{
    e.preventDefault(); 
    //document.getElementById("mainForm").reset();
    setValues({
      firstName:'',
      lastName:'',
      birthday:'',
      phone:'',
      site:'',
      about:'',
      stak:'',
      project:'',
    });
  }

  const handelSubmit=(e)=>{
    //e.preventDefault();  
    console.table (values)
    alert('Данные отправлены')
    setValues({
      firstName:'',
      lastName:'',
      birthday:'',
      phone:'',
      site:'',
      about:'',
      stak:'',
      project:'',
    });
  }
  

  return (
    <div className="app">
      <form>
      <h1>Анкета</h1>
      {inputs.map((input)=>(
        <FormInput 
        id='mainForm'
        key={input.id} 
        {...input} 
        value={values[input.name ]} 
        onChange={onChange}></FormInput> 
      ))}
      {textareas.map((textarea)=>(
        <FormTextarea 
        key={textarea.id}
        {...textarea}
        value={values[textarea.name]}
        onChange={onChange}></FormTextarea>
      ))}
    
      <button onClick={handleClear}>Отмена</button>
      <button onClick={handelSubmit}>Отправить</button>
      </form>
    </div>
  );
}

export default App;
