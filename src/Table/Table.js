import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import {FaTrash} from 'react-icons/fa'

const Table = () => {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        fetch('https://locker-server.vercel.app/all-data')
            .then(res => res.json())
            .then(data => {
              setDatas(data)
            })
    }, [datas])

    // delete data messege 
    const handleDelete = (info) => {

        const agree = window.confirm('Are you sure to remove this data ?')
        if (agree) {
            fetch(`https://locker-server.vercel.app/secret-data/${info._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                     toast.success(' This data has been deleted successfully !')
                        

                    }
                })
            }}

    return (
        <div className='px-5 md:px-10 py-5 md:py-10 bg-white'>
         
            <div class="overflow-x-auto">

            {
        datas.length === 0 ?
  <div className='flex flex-col  justify-center items-start md:items-center space-x-4 pt-40 mb-5'>
  {/* <div className='flex  justify-center items-center space-x-4 pt-40 mb-5'> */}
      
      <img className='md:w-[300px] h-[300px]' src="https://t3.ftcdn.net/jpg/05/83/75/88/240_F_583758801_OHmszhBvtD3I9pllltBNN15GYUl6YsSg.jpg" alt='locker'/>
      <p className='text-xl md:text-3xl font-bold  whitespace-nowrap px-4 py-2 text-left  text-[#58D98C] -mt-7'>Your locker is empty now.</p>
</div>


        :
  <table class="min-w-full divide-y-2 divide-gray-200 text-sm ">
    <thead>
      <tr>
        <th
          class="whitespace-nowrap text-base md:text-xl  px-4 py-2 text-left font-medium text-gray-900"
        >
          ID
        </th>
        <th
          class="whitespace-nowrap text-base md:text-xl  px-4 py-2 text-left font-medium text-gray-900"
        >
          User Name
        </th>
        <th
          class="whitespace-nowrap text-base md:text-xl  px-4 py-2 text-left font-medium text-gray-900"
        >
         First Name
        </th>
        <th
          class="whitespace-nowrap text-base md:text-xl  px-4 py-2 text-left font-medium text-gray-900"
        >
         Password
        </th>
        <th
          class="whitespace-nowrap text-base md:text-xl  px-4 py-2 text-left font-medium text-gray-900"
        >
         Remove
        </th>
      </tr>
    </thead>

    <tbody class="divide-y divide-gray-100">
      {
        datas.map((info,index)=>(
          <tr className='odd:bg-gray-50'>
            <td className='text-base md:text-xl whitespace-nowrap px-4 py-2 text-left font-normal text-gray-900'>{index+1}</td>
            <td className='text-base md:text-xl whitespace-nowrap px-4 py-2 text-left font-normal text-gray-900'>{info.userName}</td>
            <td className='text-base md:text-xl whitespace-nowrap px-4 py-2 text-left font-normal text-gray-900'>{info.firstName}</td>
            <td className='text-base md:text-xl whitespace-nowrap px-4 py-2 text-left font-normal text-gray-900'>{info.password}</td>
            <td className='text-base md:text-xl whitespace-nowrap px-4 py-2 text-left font-normal text-red-500 pl-10'><FaTrash onClick={()=>handleDelete(info)}/></td>
          </tr>
        ))
      }
    </tbody>
  </table>
}
</div>
        </div>
    );
};

export default Table;


