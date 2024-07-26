// src/pages/SignupPage.tsx
import React, { useState } from 'react';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";


const SignupPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        // Handle signup logic here
        console.log(email, password)
    };

    return (
        <div className="flex justify-center items-center h-screen">
        <Card color="transparent" shadow={false}>
         <Typography variant="h4" color="blue-gray">
           Sign Up
         </Typography>
         <Typography color="gray" className="mt-1 font-normal">
           Nice to meet you! Enter your details to register.
         </Typography>
         <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
           <div className="mb-1 flex flex-col gap-6">
             <Typography variant="h6" color="blue-gray" className="-mb-3">
               Your Name
             </Typography>
             <Input
               size="lg"
               placeholder="name@mail.com"
               className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
               labelProps={{
                 className: "before:content-none after:content-none",
               }}
             />
             <Typography variant="h6" color="blue-gray" className="-mb-3">
               Your Email
             </Typography>
             <Input
               size="lg"
               placeholder="name@mail.com"
               className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
               labelProps={{
                 className: "before:content-none after:content-none",
               }}
               onChange={(e) => setEmail(e.target.value)}
             />
             <Typography variant="h6" color="blue-gray" className="-mb-3">
               Password
             </Typography>
             <Input
               type="password"
               size="lg"
               placeholder="********"
               className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
               labelProps={{
                 className: "before:content-none after:content-none",
               }}
               onChange={(e) => setPassword(e.target.value)}
             />
           </div>
           <Checkbox
             label={
               <Typography
                 variant="small"
                 color="gray"
                 className="flex items-center font-normal"
               >
                 I agree the
                 <a
                   href="#"
                   className="font-medium transition-colors hover:text-gray-900"
                 >
                   &nbsp;Terms and Conditions
                 </a>
               </Typography>
             }
             containerProps={{ className: "-ml-2.5" }}
           />
           <Button className="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={handleSignup}>
             sign up
           </Button>
           <Typography color="gray" className="mt-4 text-center font-normal">
             Already have an account?{" "}
             <a href="/login" className="font-medium text-gray-900">
               Sign In
             </a>
           </Typography>
         </form>
       </Card>
       </div>
     );
};

export default SignupPage;


