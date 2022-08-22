import { useRef } from 'react'

import Card from '../ui/Card'
import classes from './ContactUsTemplate.module.css'

function InsertContactUs(props) {
  const titleInputRef = useRef()
  const imageInputRef = useRef()
  const detailInputRef = useRef()
  const descriptionInputRef = useRef()

  function submitHandler(event) {
    event.preventDefault()

    const enteredTitle = titleInputRef.current.value
    const enteredImage = imageInputRef.current.value
    const enteredDetail = detailInputRef.current.value
    const enteredDescription = descriptionInputRef.current.value

    const EspData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredDetail,
      description: enteredDescription,
    }

    props.onAddContactUs(EspData)
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Your name</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Your email</label>
          <input type='email' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='detail'>Subject</label>
          <input type='text' required id='detail' ref={detailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Your message</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send</button>
        </div>
      </form>
    </Card>
  )
}

export default InsertContactUs
