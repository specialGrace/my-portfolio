
import React from 'react';

import {FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaGithubSquare} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer class="footer p-4  rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 text-white  ">

    <ul class="flex flex-wrap items-center mt-3 sm:mt-0">
        <li>
            <a  target="_blank" href="https://web.facebook.com/CodeQueenG"   rel="noopener noreferrer nofollow"><FaFacebookSquare  className="mr-4 mt-2 text-black-500 hover:underline md:mr-6 dark:text-black-400"/></a>
        </li>
      
        <li>
            <a target="_blank" href="https://twitter.com/gracias_tech"   rel="noopener noreferrer nofollow" ><FaTwitterSquare class="mr-4 mt-2  hover:underline md:mr-6 dark:text-black-400"/></a>
        </li>
        <li>
            <a target="_blank" href="https://www.instagram.com/gracias_tech/"   rel="noopener noreferrer nofollow"><FaInstagramSquare class="mr-4 mt-2 text-black-500 hover:underline md:mr-6 dark:text-black-400"/></a>
        </li>
        <li>
            <a target="_blank" href="https://github.com/specialGrace"   rel="noopener noreferrer nofollow" ><FaGithubSquare  class=" mr-4 mt-2 text-black-500 hover:underline dark:text-black-400"/></a>
        </li>
    </ul>

      <p className='mr-4 text-black-400 mt-2 opacity-50'>&copy; {new Date().getFullYear()} Grace Adebayo. All rights reserved</p>
      <p className=' text-black-400 mt-2 opacity-50'>call or whatsapp via: +2347014497590</p>
      
     </footer>
 
  );
}

export default Footer;
