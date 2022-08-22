import { Link } from 'react-router-dom'

import classes from './MainNavigation.module.css'

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img
          className={classes.img}
          src='https://thumbs.dreamstime.com/b/mexican-hat-1550667.jpg'
          alt='mexicanhat'
          width='80'
        />
        &nbsp; Dos Sombreros
      </div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Especialidades</Link>
          </li>
          <li>
            <Link to='/contact-us'>Contact Us</Link>
          </li>
          <li>
            <Link to='/about-us'>About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
