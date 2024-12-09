import Image from 'next/image';
import React from 'react';
import Bg from '../../Resources/Group 1 (3).png';
import { MapPin, Phone, Mail, Github, Linkedin, Instagram, X } from 'lucide-react';
import Link from 'next/link';
import { TextField } from '@mui/material';


function Contact() {
  return (
    <div className='lg:h-[90vh] h-[190vh] relative lg:top-0 top-[90vh]' id='Contact'>
 
    
      <div className='lg:w-[80vw] w-[90vw] lg:h-[80vh] bg-white relative lg:left-[10vw] left-[5vw] rounded-md top-[6vh] lg:top-[4vh] flex flex-col lg:flex-row p-6 lg:p-10 shadow-lg'>
        <div className='lg:w-[40vw] w-full mb-10 lg:mb-0'>
          <p className='font-bold text-4xl lg:text-5xl'>Get In Touch</p>
          <p className='mt-8 lg:mt-16 lg:w-[35vw] text-gray-700'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, modi itaque! Id atque alias, dicta excepturi aspernatur necessitatibus temporibus qui quam, consectetur fugit laboriosam harum quisquam incidunt expedita vero. Ipsam?
          </p>
          
          <div className='mt-10 space-y-6'>
            <div className='flex items-center space-x-2'>
              <MapPin />
              <p>Addis Ababa, Ethiopia</p>
            </div>
            <div className='flex items-center space-x-2'>
              <Phone />
              <p>(+251) 924 5695</p>
            </div>
            <div className='flex items-center space-x-2'>
              <Mail />
              <p>Kerim.Tarik.Qe2282@gmail.com</p>
            </div>
          </div>
          
          <div className='flex space-x-4 mt-8'>
            <Link href={'#'}><X className='w-6 h-6' /></Link>
            <Link href={'#'}><Instagram className='w-6 h-6' /></Link>
            <Link href={'#'}><Github className='w-6 h-6' /></Link>
            <Link href={'#'}><Linkedin className='w-6 h-6' /></Link>
          </div>
        </div>
        
        <div className='lg:w-[40vw] w-full'>
          <p className='font-bold text-3xl lg:text-4xl mb-6'>Send me a message</p>
          
          <form className='space-y-6'>
            <input 
              type="text" 
              name='name' 
              placeholder="Name" 
              className="bg-gray-50 border border-gray-300 h-12 rounded-lg w-full px-4"
              required 
            />
            
            <input 
              type="email" 
              name='email' 
              placeholder="Your Email" 
              className="bg-gray-50 border border-gray-300 h-12 rounded-lg w-full px-4"
              required 
            />
            
            <input 
              type="text" 
              name='subject' 
              placeholder="Subject" 
              className="bg-gray-50 border border-gray-300 h-12 rounded-lg w-full px-4"
              required 
            />
            
            <textarea 
              name='message' 
              placeholder="Message" 
              className="bg-gray-50 border border-gray-300 h-36 rounded-lg w-full px-4"
              required 
            ></textarea>
          </form>
          
          <button 
            type="button" 
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mt-8"
          >
            Send Message
          </button>
        </div>
      </div>
    
      <div className='h-16 lg:h-20 bg-blue-600 flex justify-center items-center mt-16 lg:mt-16'>
        <p className='text-white text-center'>© Kerim Tarik Developments 2024 all Rights Reserved</p>
      </div>
    </div>
  );
}

export default Contact;
