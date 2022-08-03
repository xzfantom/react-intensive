import s from './Tab.module.css'

const Tab = () => {
  return (
    <div className={s.wrap}>
      <button className={s.button} type='button'>
        completed
      </button>
      <button className={s.button} type='button'>
        active
      </button>
    </div>
  )
}

export default Tab
