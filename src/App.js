import { Route, Switch } from 'react-router-dom'

import AllMeetupsPage from './pages/AllMeetups'
import NewMeetupPage from './pages/NewMeetup'
import FavoritesPage from './pages/Favorites'
import Layout from './components/layout/Layout'
import Modal from './components/Modal'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllMeetupsPage />
        </Route>
        <Route path='/contact-us'>
          <NewMeetupPage />
        </Route>
        <Route path='/about-us'>
          <FavoritesPage />
        </Route>
        <Route path='/modal'>
          <Modal />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
