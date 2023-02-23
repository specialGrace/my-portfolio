import {useRef} from 'react';
import Title from './Title';
import emailjs from "@emailjs/browser";

const Contact = () => {
const form=useRef()
      function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm(
          "service_m8m3nvt",
          "template_i9rgd3b",
         form.current,
          "VJHkCQk2GqomMnfKH"
        ).then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
        e.target.reset()
      }
   return (
      <div className="flex flex-col mb-10 mx-auto">
         <div className="flex justify-center items-center">
            <form
             ref={form}
              
             
               className="flex flex-col w-full md:w-7/12"
               onSubmit={sendEmail}
            >
               <Title>Contact</Title>
               <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
               />
               <input
                  type="text"
                  name="user_email"
                  placeholder="Email"
                  className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
               />

<input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
               />
               
               <textarea
                  name="message"
                  placeholder="Message"
                  rows="10"
                  className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
                  
               />
               <button
                  type="submit"
                  className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white"
               >
                  Hire Me
               </button>
            </form>
         </div>
      </div>
   )
}

export default Contact;
