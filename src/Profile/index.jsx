import React from 'react';
import styles from './index.module.css';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const {
    //   firstName,
    //   lastName,
    //   date_of_birth,
    //   telephone,
    //   web_site,
    //   about,
    //   skills,
    //   last_project_description,
    // } = this.props.state.inputs;
    return (
      <div>
        <div className={styles.headingWrapper}>
          <h1>Создание анкеты</h1>
        </div>
        <section className={styles.mainContent}>Profile</section>
      </div>
    );
  }
}

export default Profile;
