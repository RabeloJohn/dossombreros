import { Route, Switch } from 'react-router-dom'

import Especialidades from './pages/OptEspecialidades'
import ContactUs from './pages/OptContact'
import AboutUs from './pages/OptAbout'
import Layout from './components/layout/Layout'
import Modal from './components/Modal'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Especialidades />
        </Route>
        <Route path='/contact-us'>
          <ContactUs />
        </Route>
        <Route path='/about-us'>
          <AboutUs />
        </Route>
        <Route path='/modal'>
          <Modal />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
