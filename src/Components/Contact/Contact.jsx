import React from 'react'
import './Contact.css'

function Contact()
{

   const [result, setResult] = React.useState("");

   const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ef916bff-2a98-49cd-a97d-04d05ab62df5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

    return(
        <div className='contact' id="contact">
            <div className='contact-col'>
                <h3>Feel free to reach out to us anytime! 📧</h3>
                <p>Whether you have questions, need assistance with your travel plans, or want to share your feedback, we're here to help. 
                    At Travelora, your satisfaction is our top priority, and we believe in making your travel experience as smooth as possible.
                </p>
                <ul>
                    <li>✉️Email   : support@travelora.com</li>
                    <li>📞Phone   : 8825744173</li>
                    <li>📍Address : 29,Ramalingam Street, Kovilpatti</li>
                </ul>
            </div>
            <div className='contact-col'> 
                <form onSubmit={ onSubmit}>
                    <label>Your Name</label>
                    <input type='text' name='name' placeholder='Enter Your Name' required></input>
                    <label>Phone Number</label>
                    <input type='tel' name='phone' placeholder='Enter Your Phone Number' required></input>
                    <label>Enter Your message</label>
                    <textarea name='message' rows='6' placeholder='Enter the message' ></textarea>
                    <button className='btn dark-btn' type='submit'>Submit Now</button>
                </form>   
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact