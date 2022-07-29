import React from 'react'
import './style.css';

class Form extends React.Component {
    constructor(){
        super();
    this.state = {
        firstName: '',
        lastName: '',
        DateOfB: '',
        phone: '',
        email: '',
        message_01: '',
        message_02: '',
        message_03: '',
    };

    }
    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({[event.target.name]: event.target.value})
    }

    handelClear = () => {
            this.setState({
            firstName: '',
            lastName: '',
            DateOfB: '',
            phone: '',
            email: '', 
            message_01: '',
            message_02: '',
            message_03: '',
            
            })
        document.getElementById("mainInput").reset();
    }
   
    render() {
        const{firstName, lastName, DateOfB, phone, email, message_01, message_02, message_03} = this.state;

        return <div className='form'>
        <h1> Анкета </h1>
        <form id="mainInput">
            <label>
            <h2>Имя</h2>
            <br/>
            <input
                id="mainInput"
                type='text'
                name='firstName' required
                placeholder='Ваше имя'
                value={firstName}
                onChange={this.handleChange}
               
            />
            </label>
            <br/>
            <label>
            <h2>Фамилия</h2>
            <br/>
            <input
                id="mainInput"
                type='text'
                name='lastName' required
                placeholder='Ваша фамилия'
                value={lastName}
                onChange={this.handleChange}
                
            />
            </label>
            <br />
            <label>
            <h2>Дата рождения</h2>
            <br/>
            <input

                id="mainInput"
                type='date'
                name='DateOfB' 
                placeholder='Date'
                value={DateOfB}
                onChange={this.handleChange}
            />
            </label>
            <br />
            <label>
            <h2>Телефон</h2>
            <br/>
            <input
            id="mainInput"
                type='tel'
                name='phone'
                value={phone}  
                onChange={this.handleChange}
                placeholder='7-7777-77-77'
               
          />
          </label>
          <br />
          <label>
          <h2>Сайт</h2>
          <br/>
          <input   
          id="mainInput"  
                type='url'
                name='email'
                value={email}
                onChange={this.handleChange}
                placeholder="Сайт"
                required
          /> </label>
          <br />
            <label>
            <h2>О себе</h2>
            <br />
            <textarea 
            id="mainInput"
                type='text'
                name='message_01'
                value={message_01}
                onChange={this.handleChange}
                rows='7'
                placeholder="Напишите о себе"
                
            />
            </label>
            <br />
            <label>   
            <h2>Стек технологий</h2>
            <br />
            <textarea 
            id="mainInput"
                type='text'
                name='message_02'
                value={message_02}
                onChange={this.handleChange}
                rows='7'
                placeholder="Напишите о технологиях"
                
            />     
            </label> 
            <br />
            <label>   
            <h2>Описание последнего проекта</h2>
            <br />
            <textarea 
            id="mainInput"
                type='text'
                name='message_03'
                value={message_03}
                onChange={this.handleChange}
                rows='7'
                placeholder="Напишите о последнем проекте"
                
            />     
            </label> 
            <br />
            <div className='all_btn'>
            <button className='btn' onClick={this.handelClear}>Отмена</button>
            <button className='btn' onClick={this.handelSubmit}>Сохранить</button> 
            </div>
            </form>
           
        </div>
    }
}

export {Form}