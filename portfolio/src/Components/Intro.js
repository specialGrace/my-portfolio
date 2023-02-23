import React from 'react';
import Typical from 'react-typical';
import styles from "./Intro.module.css"
import img5 from "../Components/Images/img5.png"

const Intro = () => {
  return (
    <div className='flex items-center justfify-center flex-col text-center pt-20 pb-6'>
      <img src={img5} className={styles.myImg} alt="myImage" />
      <h1 className='text-4xl md:text-7xl dark:text-white
      mb-1 md:mb-3 font-bold'>Adebayo Tunmise Grace</h1>
      <h3 className='text-base font-bold md:text-2xl mb-3'>Software Developer</h3>
      <p className='max-w-xl mb-6 font-bold'>Hello, I'm a software developer with a solid background in JavaScript frameworks like ReactJS and Nextjs and also intimately familiar with the MERN (MongoDB, Express, React, and Node.js) software stack.</p>
      <p  className='max-w-xl mb-6 font-bold'>I  <Typical
   loop={Infinity}
   wrapper='b'
   steps={['create 💻',
   3000,
    'design 🔖',
    3000,
    'develop 👩‍💻',
    3000,
     'deploy',
     3000,
     'maintain 👍',
     3000]}/>
     <br /> websites that are both functional and aesthetical pleasing.I have a strong understanding of web standard and best practices, I am passionate about creating websites that users will find easy to use and visually appealing
        </p >
        <p className='max-w-xl mb-6 font-bold'>I focused on React technologies which bring a lot of benefits to various people and industries</p>
      

<p>
 
</p>
</div>
  );
}

export default Intro;
