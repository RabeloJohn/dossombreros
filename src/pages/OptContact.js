import { useHistory } from 'react-router-dom'
import InsertContactUs from '../components/pagesaux/ContactUsTemplate'

function ContactUs() {
  const history = useHistory()
  function addContactUsHandler(ContactUsData) {
    fetch(
      'https://dos-sombreros-default-rtdb.firebaseio.com/userrequests.json',
      {
        method: 'POST',
        body: JSON.stringify(ContactUsData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      history.replace('/modal')
    })
  }

  return (
    <section>
      <h1>
        Get in touch with us! <br></br>We'd love to hear from you.
      </h1>
      <InsertContactUs onAddContactUs={addContactUsHandler} />
    </section>
  )
}

export default ContactUs
