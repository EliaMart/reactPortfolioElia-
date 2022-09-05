import React, { useRef } from "react";
import emailjs from "emailjs-com"

const ContactForm =  () => {

    const form = useRef();


    const sendEmail = async (event) => {
        event.preventDefault();

        emailjs.sendForm(
            "service_mwd4jvd",
            "template_6mxr8sf",
            form.current,
            "R77956g1ojXKVTDUW"
        ).then (
            result => console.log(result.text),
            error => console.log(error.text)

        );
    };



return (
<div>
<form ref={form} onSubmit={sendEmail} method="POST">
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" name="user_name" required />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" name="user_email" required  />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" name="message" required rows="5"></textarea>
    </div>
    <button type="submit" value="Send"className="btn btn-primary">Submit</button>
</form>
</div>
);
};

export default ContactForm