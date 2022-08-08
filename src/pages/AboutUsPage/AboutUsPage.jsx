import s from './AboutUsPage.module.css'
import image from '../../images/hand.png'

const AboutUsPage = () => {
  return (
    <>
      <div className={s.wrap}>
        <img src={image} className={s.image} alt='hand' />
        <div className={s.contentWrap}>
          <h1 className={s.heading}>What is a ToDo List?</h1>
          <p className={s.description}>
            Do any of the following seem familiar?
          </p>
          <ul className={s.description}>
            <li>
              You often feel completely overwhelmed with the amount of work
              you’ve got to do?
            </li>
            <li>You sometimes forget to do things that are important.</li>
            <li>You find it a struggle to keep to deadlines.</li>
          </ul>
          <p className={s.description}>
            Having a list of everything you need to do written down in one place
            means you shouldn’t forget anything important. By prioritising the
            tasks in the list you plan the order in which you’re going to do
            them and can quickly see what needs your immediate attention and
            what tasks you can leave until a little later.
          </p>
        </div>
      </div>
      <h2 className={s.message}>
        To start using App should <span className={s.login}>Log In</span>
      </h2>
    </>
  )
}

export default AboutUsPage
