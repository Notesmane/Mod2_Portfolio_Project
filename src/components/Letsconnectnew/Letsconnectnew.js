import "./App.css";
import { useState } from "react";
import styles from './lcnew.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Name: ${formData.name}, Email: ${formData.email}, Subject: ${formData.subject}, Message: ${formData.message}`
    );
  };
  return (
    <div className="Form">
      <div>
        <h1>
          Thanks for taking the time to reach out. How can I help you today?
        </h1>
      </div>
      <div className="contactFormContainer">
        <form onSubmit={handleSubmit}>
          <div className="nameEmailContainers">
            <div>
              <label htmlFor="name">Name:</label>

              <div className="inputBox">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="nameEmailContainers">
              <div>
                <label htmlFor="email">Email:</label>

                <div className="inputBox">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="subjectContainer">
            <div>
              <label htmlFor="subject">Subject:</label>
              <div className="inputBox">
                <input
                  type="subject"
                  className="subjectBox"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

            </div>
          </div>

          <div className="propContainer">
            <div>

            </div>
            <label htmlFor="message">Message:</label>

            <div className="inputBox">
              <input
                type="message"
                className="messageBox"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="propContainer">
            <button type="submit">Submit</button>
          </div>
        </form>
        
      </div>
    </div>
  );
}
