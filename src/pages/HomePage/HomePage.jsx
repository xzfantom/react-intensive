import Todos from '../../components/Todos/Todos'
import DisplayTodos from '../../components/DisplayTodos/DisplayTodos'
import s from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={s.wrap}>
      <Todos />
      <DisplayTodos />
    </div>
  )
}

export default HomePage
