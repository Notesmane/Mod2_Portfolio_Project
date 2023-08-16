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