import React from 'react'

import { useForm } from 'react-hook-form'

const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm()

  const OnSubmit = data => {
    alert(
      `Thank you for contacting us, ${data.inputName}. We'll reply to you as soon as possible!`
    )
  }

  return (
    <form className="contact__form" onSubmit={handleSubmit(OnSubmit)}>
      <h2 className="heading-secondary">Send en Besked</h2>
      <label htmlFor="inputName" className="label-primary">
        Navn:
      </label>
      <input
        type="text"
        id="inputName"
        name="inputName"
        className="input-primary"
        ref={register({ required: true, minLength: 2 })}
      />
      {errors.inputName && (
        <span className="contact__error">
          Enter your name (min. 2 characters)
        </span>
      )}

      <label htmlFor="inputEmail" className="label-primary">
        Email:
      </label>
      <input
        type="email"
        id="inputEmail"
        name="inputEmail"
        className="input-primary"
        ref={register({
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'invalid email address'
          }
        })}
      />
      {(errors.inputEmail && errors.inputEmail.message) ||
        (errors.inputEmail && (
          <span className="contact__error">Enter your email address</span>
        ))}

      <label htmlFor="inputPhone" className="label-primary">
        Telefonnr:
      </label>
      <input
        type="tel"
        id="inputPhone"
        name="inputPhone"
        className="input-primary"
        ref={register({ required: true, minLength: 8, maxLength: 8 })}
      />
      {errors.inputPhone && (
        <span className="contact__error">Enter your phone number</span>
      )}

      <label htmlFor="inputMessage" className="label-primary">
        Besked:
      </label>
      <textarea
        cols="30"
        rows="10"
        id="inputMessage"
        name="inputMessage"
        className="textarea-primary"
        ref={register({ required: true, minLength: 30 })}
      />
      {errors.inputMessage && (
        <span className="contact__error">
          Enter your message (min. 30 characters)
        </span>
      )}

      <button className="btn-primary">Send Besked</button>
    </form>
  )
}

export default ContactForm
