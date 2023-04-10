import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex flex-col items-center bg-white'>

            <img src='https://t3.ftcdn.net/jpg/05/63/07/02/240_F_563070274_kPYHFlrykvj3XWsvEVJ5zsmvgbbHaBD8.jpg' alt='' className='mt-20' />
            <p className='text-xl md:text-3xl font-bold  whitespace-nowrap px-4 py-2 text-left  text-gray-800 -mt-7'>You have been lost.</p>
            <Link to='/'>
           
                <button className='text-xl font-semibold rounded-lg px-3 py-2 bg-purple-300 mt-5'>Come with me</button>

            </Link>

        </div>
    );
};

export default Error;