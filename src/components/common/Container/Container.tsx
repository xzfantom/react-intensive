import s from './Container.module.css'

type Props = {
  children?: JSX.Element
}

const Container = ({ children }: Props) => {
  return <div className={s.container}>{children}</div>
}

export default Container
