import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
const Locker = () => {                           
   
    const [passwordType, setPasswordType] = useState("password");

    const togglePassword =()=>{
        if(passwordType==="password")
        {
         setPasswordType("text")
         return;
        }
        setPasswordType("password")
      }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const form = e.target
    //     const userName = form.userName.value
    //     const firstName = form.firstName.value
    //     const others= form.others.value
    //     const password = form.password.value

    //     const info = {
    //       userName,
    //       firstName,
    //       others,
    //       password
    //     }
    //     console.log(info);
    //     fetch("https://locker-server.vercel.app/post-data", {
    //       method: "POST",
    //       headers: {
    //         "content-type": "application/json",
    //       },
    //       body: JSON.stringify(info),
    //     })
    //       .then((res) => res.json())
    //       .then((data) => {
    //         if (data.acknowledged) {
    //           toast.success(`Your data is saved successfully`);
    //          form.reset('')
    //         } else {
    //           toast.error("Error");
    //         }
    //       })
    //       .catch((err) => toast.error(err));
    //   }
    const [firstName,setFirstName]=useState('')
    const [userName,setUserName]=useState('')
    const [others,setOthers]=useState('')
    const [password,setPassword]=useState('')
    

 
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const url = 'https://script.google.com/macros/s/AKfycbzlngB9mxYNpeCKhinvGKKV1caidcnRxbVX1u4DG9ggIInaB7_TZ-8gGB9Qd_WkbCZ3/exec';
      console.log(formData)
      fetch(url, {
        method: 'POST',
        body: formData, 
      })
        .then((res) => res.json())
        .then((data) => {
          setFirstName('')
          setOthers('')
          setPassword('')
          setUserName('')
          toast.success("Your information is submitted successfully")
          
        })
        .catch((err) => console.log(err));
    };
    
      

    return (
        <div className="flex flex-col  items-center pt-20 px-5 md:px-10 bg-gray-100 min-h-screen" >
        <div className="flex flex-col justify-center items-center space-y-1 shadow-lg w-full lg:w-[800px] px-3 md:p-10 md:space-y-3 border-2 rounded-lg bg-white ">
           <h1 className='text-2xl md:text-5xl font-bold font-Roboto text-green-600 my-2 md:my-0'>Locker Number 21</h1>
            <form onSubmit={handleSubmit}  className="flex flex-col items-start space-y-3 border-2 p-2 rounded-lg hover:shadow-gray-700  w-full">
              
                <input  
               type='text'
               value={userName} onChange={(e) => setUserName(e.target.value)}
               name='UserName'
               placeholder="Username"    
               className='w-full h-10 md:h-20 pt-0 md:pt-3 px-2 text-lg md:text-xl border border-gray-200 
               rounded-md outline-none bg-white text-gray-900' 
               required />

               <input  
               type='text'
               value={firstName} onChange={(e) => setFirstName(e.target.value)}
               name='FirstName'
               placeholder="First name"    
               className='w-full h-10 md:h-20 pt-0 md:pt-3 px-2 text-lg md:text-xl border border-gray-200 
               rounded-md outline-none bg-white text-gray-900' 
               required />

               <textarea  
               type='text'
               value={others} onChange={(e) => setOthers(e.target.value)}
               name='Others'
               placeholder="Others"    
               className='w-full h-16 md:h-28 pt-0 md:pt-3 px-2 text-lg md:text-xl border border-gray-200 
               rounded-md outline-none bg-white text-gray-900' 
               required 
               maxLength={150}>
               </textarea>


              <div className='w-full relative'>
               <input  
               type={passwordType}
               value={password} onChange={(e) => setPassword(e.target.value)}
               name='Password' 
               placeholder='Password'
               className='w-full h-10 md:h-16 px-2 text-lg md:text-xl border border-gray-200 rounded-md 
               outline-none bg-white text-gray-900 mb-3' 
               required />
               <div className="absolute right-3 top-2 md:right-6 md:top-5" onClick={togglePassword}>
                     { passwordType==="password"? <AiOutlineEye className='text-xl md:text-3xl'/> : <AiOutlineEyeInvisible className='text-xl md:text-3xl'/>  }
                     </div>
                </div>
               <button class="group relative h-12 w-full md:w-48 overflow-hidden rounded-lg bg-white text-xl font-semibold shadow">
                <div class="absolute inset-0 w-3 bg-green-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span class="relative text-gray-900 group-hover:text-white">Save now !</span>
               </button>

            </form>
       </div>
        </div>
    );
};

export default Locker;
1
2
3
4
5
6

8
9
1
2
3
4
5
6
7