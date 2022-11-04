import React, { useState } from 'react'

const Form = () => {
    const [disabled, setDisabled] = useState(false);
    const [contact, setContact] = useState({
        first_name: '',
        last_name: '',
        email: "",
        message: ""
    })
    const [errors, setErrors] = useState(false)
    const { last_name, first_name, email, message } = contact;

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!disabled) return;
        // if (!last_name || !first_name || !email || !message) return;

        if (!message) {
            setErrors(true)
        }
    }

    return (
        <div className='contact'>
            <div className="contact__header">
                <h2>Contact</h2>
                <p>Hi there,  contact me to ask me about anything you have in mind.</p>
            </div>

            <form className="contact__form" onSubmit={handleSubmit}>
                <div className="input50">
                    <div className="form__group">
                        <label htmlFor="first_name">First Name</label>
                        <input type="text" name="first_name" id="first_name" placeholder='Enter Your First Name' value={first_name} onChange={handleChange} />
                    </div>
                    <div className="form__group">
                        <label htmlFor="last_name">Last Name</label>
                        <input type="text" name="last_name" id="last_name" placeholder='Enter Your Last Name' value={last_name} onChange={handleChange} />
                    </div>
                </div>

                <div className="input100">
                    <div className="form__group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" placeholder='yourname@gmailcom' value={email} onChange={handleChange} />
                    </div>

                    <div className="form__group">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" placeholder="Send me a message and I'll reply you as soon as possible" value={message} onChange={handleChange} ></textarea>
                        {errors && <p className="error">Please enter a message</p>}
                    </div>
                </div>
                <div className="aggree">

                    <input type="checkbox" name="" id="" className="checkbox" onClick={() => setDisabled(!disabled)} />
                    <p>You agree to providing your data to Benedict who may contact you</p>
                </div>
                <button type="submit" id='btn__submit' className='button' style={{
                    backgroundColor: !disabled && '#B2DDFF'
                }}>Send Message</button>
            </form>

        </div>
    )
}

export default Form
