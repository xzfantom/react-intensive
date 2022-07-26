import React,{Component} from 'react'

class Main extends Component{
    state = {
        header: "",
        userName: "",
        userSurname: "",
        berthDate: "",
        userPhone:"",
        userWeb: "",
        userAbout:"",
        userSteak:"",
        projectDescrip:"",


    }

    onChange = e =>{

        this.setState({[e.target.name]:e.target.value})
    }
    onChange1 = e =>{

        this.setState({projectDescrip :e.target.value})
    }
    onSubmit =e =>{
        e.preventDefault()
        this.setState({userName:'',
            userSurname:""
        })
    }
    selectState = e =>{
        this.setState({berthDate:e.target.value})
    }

    render() {
        const  {userName,userSurname,berthDate,
            userPhone,userWeb,userAbout,userSteak,projectDescrip} = this.state
        return(
            <div>
            <form onSubmit={this.onSubmit}>
                <h4>Имя: </h4>
                <input type="text"
                       value={userName} placeholder="Имя"
                       onChange={this.onChange}
                       name="userName"
                />

                <label>Фамилия:</label>
                <input type="text"
                       value={userSurname} placeholder="Фамилия"
                       onChange={this.onChange}
                       name="userSurname"
                />

                <label>Дата рождения: </label>
                <input type="date"
                       value={berthDate}
                       onChange={this.selectState}
                       name="userDate"
                />


                <label>Телефон: </label>
                <input type="tel"
                       value={userPhone} placeholder="380(99)-999-99-99"
                       onChange={this.onChange}
                       name="userPhone"
                />

                <label>Сайт: </label>
                <input type="text"
                       value={userWeb} placeholder="Сайт"
                       onChange={this.onChange}
                       name="userWeb"
                />

                <label>О себе: </label>

                <textarea rows='7' value={userAbout} placeholder="О себе"
                          onChange={this.onChange}
                          name="userAbout">


                </textarea>


                <label>Стек технологий: </label>

                <textarea rows='7' value={userSteak} placeholder="Стек технологий"
                          name="userSteak"
                          onChange={this.onChange}
                          >

                </textarea>


                <label>Описание последнего проекта: </label>
                <textarea rows='7' value={projectDescrip}  placeholder="Описание последнего проекта"
                          onChange={this.onChange1}
                          name="userDesr" >
                </textarea>

                <div className="buttons" >
                    <button> Отмена</button>
                    <button type="submit"> Сохранить</button>

                </div>
            </form>


        </div>)


    }
}
export default Main;
