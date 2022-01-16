import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers.js';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    //handles form inputs
    function handleChange(e) {

        //validation
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } 
        else { //if input is not email field, then just check for any length
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
        }
        //updates state
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }
    }// console.log(formState);

    //handle form SUBMIT
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }

    return (
      <form className="p-4 bg-4" id="contact-form" onSubmit={handleSubmit}>

        <div className="mb-3 customclass1 d-block mx-auto">
          <label htmlFor="email" className="form-label">Email Address:</label>
          <input type="email" className="form-control" name="email" defaultValue={email} onBlur={handleChange} aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">I'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3 customclass1 d-block mx-auto">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="name" className="form-control" name="name" defaultValue={name} onBlur={handleChange}/>
        </div>

        <div className="mb-3 customclass1 d-block mx-auto">
          <label htmlFor="message" className="form-label">Your Message:</label>
          <textarea type="message" className="form-control" name="message" defaultValue={message} onBlur={handleChange}/>
        </div>
        
        <div className="mb-3 customclass1 d-block mx-auto">
        {/* jsx equiv to if statement:  */}
        {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
                )}
        </div>
        <button type="submit" className="btn btn-primary customclass1 d-block mx-auto">Submit</button>
      </form>
      )

}

export default ContactForm;