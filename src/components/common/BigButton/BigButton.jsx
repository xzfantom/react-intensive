import s from './BigButton.module.css'

const BigButton = (props) => {
  const {
    text,
    icon,
    onClick = () => {},
    type = 'button',
    disabled = false,
  } = props

  return (
    <button
      className={s.button}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <img className={s.image} src={icon} alt={text} />}
      <span className={s.heading}>{text}</span>
    </button>
  )
}

export default BigButton
