import React from 'react';
import {SiGooglesheets} from 'react-icons/si'


const Table = () => {

       //https://docs.google.com/spreadsheets/d/1tZh9IJroAOfkn2m5dXsMzmti2ejONep8aj07bTutRkU/edit#gid=0 
 return (
     
        <div className='flex justify-center items-center space-x-2 px-5 md:px-10 first-line: py-5 md:py-10 bg-white' >
 
    <h1 className='text-xl md:text-2xl lg:text-5xl font-semibold text-green-600'>Google sheet :</h1>
    <a href='https://docs.google.com/spreadsheets/d/1tZh9IJroAOfkn2m5dXsMzmti2ejONep8aj07bTutRkU/edit#gid=0' target='blank'>
    <SiGooglesheets className='text-xl md:text-2xl lg:text-5xl font-semibold text-green-600'/>
    </a>
        </div>
    );
};

export default Table;


