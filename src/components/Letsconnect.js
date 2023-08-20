import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({name: '', email: '', subject: '', message: ''});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value})); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${formData.name}, Email: ${formData.email}, Subject: ${formData.subject}, Message: ${formData.message}`);
    };
    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>

            <label htmlFor="subject">Subject:</label>
            <input type="subject" id="subject" name="subject" value={formData.subject} onChange={handleChange}/>

            <label htmlFor="message">Message:</label>
            <input type="" id="message" name="message" value={formData.message} onChange={handleChange}/>

            <button type="submit">Submit</button>

        </form>
    )
}





// import {useState} from 'react';
 
// export default function ContactForm()  {
// 	const  [name, setName] =  useState('');

// 	const  handleChange = (e) => {
// 		setName(e.target.value);
// 	};

// return  (
// <form>
// 	<label>Input Value:
//         <input  
//             type="text"  
//             value={ name } 
//             onChange={handleChange} 
//         />
// 	</label>
// 	<p>Name: { name }</p>
// </form>
// )};



// ====================================================


// import { useState, useRef, useContext } from 'react';

// // const [formData, setFormData] = useState({

// //     name:'',
// //     email:'',
// //     subject:'',
// //     message:''
// // })

// const handleSubmit = (e) => {
//     e.preventDefault();

//     const newMessage = {...formData, id: new Date()};
// }

// function Letsconnect() {

//     return (
//         <div>
//             <h1>Let's Connect</h1>
//             <p>Interested in connecting about a project or a job opportunity? Feel free to leave me a message and I will get back to you shortly.</p>
//             <br/>
//             <form>
//                 <div>
//                     <label>Your Name: </label>
//                     <input
//                         type='text'
//                         value={formData.name}
//                         // onChange={handleChange}
//                         name='name'            
//                     />
//                 </div>
//                 <div>
//                     <label>Your Email: </label>
//                     <input
//                         type='text'
//                         value={formData.email}
//                         // onChange={handleChange}
//                         name='email'
//                         placeholder="Enter your Email"            
//                     />
//                 </div>
//                 <div>
//                     <label>Subject: </label>
//                     <input
//                         type='text'
//                         value={formData.subject}
//                         // onChange={handleChange}
//                         name='subject'            
//                     />
//                 </div>
//                 <div>
//                     <label>Message: </label>
//                     <input
//                         type='text'
//                         value={formData.message}
//                         // onChange={handleChange}
//                         name='message'            
//                     />
//                 </div>
//                 <button>Submit</button>
                

//             </form>
//         </div>
//     )

// }

// export default Letsconnect;