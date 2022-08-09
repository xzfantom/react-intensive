import styles from './style.module.css'

const ResultForm = function(props) {
  const result = props.result;
  
  return (
    <div className={styles.formFinally}>
      <h1>{result.name} {result.surname}</h1>
      <span><span className={styles.formFinallyLabel}>Дата рождения: </span>{result.date}</span>
      <span><span className={styles.formFinallyLabel}>Телефон: </span>{result.num}</span>
      <span><span className={styles.formFinallyLabel}>Сайт: </span>{result.website}</span>
      <div><span className={styles.formFinallyLabel}>О себе: </span>{result.about}</div>
      <div><span className={styles.formFinallyLabel}>Стек технологий: </span>{result.technologyStack}</div>
      <div><span className={styles.formFinallyLabel}>Описание последнего проекта: </span>{result.lastProjectDescription}</div>
    </div>
  )
}

export default ResultForm