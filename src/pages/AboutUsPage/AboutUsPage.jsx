import s from './AboutUsPage.module.css'
import image from '../../components/images/hand.png'

const AboutUsPage = () => {
  return (
    <>
      <div className={s.wrap}>
        <img src={image} className={s.image} alt='Not found page' />
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
            Don’t think you’re unusual because there are thousands of people who
            struggle with the same every day, not just in the workplace but in
            their personal life too. Luckily, there is something very simple you
            can do to keep your life and work more organized.
          </p>
          <p className={s.description}>
            Having a list of everything you need to do written down in one place
            means you shouldn’t forget anything important. By prioritising the
            tasks in the list you plan the order in which you’re going to do
            them and can quickly see what needs your immediate attention and
            what tasks you can leave until a little later.
          </p>
        </div>
      </div>
      <h1 className={s.message}>
        To start using App should <span className={s.login}>Log In</span>
      </h1>
    </>
  )
}

export default AboutUsPage
