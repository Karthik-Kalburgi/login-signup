import React, { ChangeEvent, FormEvent, useState } from 'react'

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';
import axios from 'axios';

type InputField = {
  name: string;
  type: string;
  placeholder: string;
};

type FormValues = {
  name: string;
  email: string;
  mobile: string;
  password: string;
  
};
function Signup() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const inputFields: InputField[] = [
    {
      name: "Name",
      type: "text",
      placeholder: "Enter Name",
    },
    {
      name: "Email",
      type: "email",
      placeholder: "Enter Email",
    },
    {
      name: "Mobile",
      type: "number",
      placeholder: "Enter Mobile Number",
    },
    {
      name: "Password",
      type: "password",
      placeholder: "Enter Password",
    },
   
  ];
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    password: "",
    mobile: "",
    
  });

  const onRegister = async (e: FormEvent) => {
    e.preventDefault();
    // Checking for Confirm password and Password
    

    // Handle form submission
    console.table(formValues);
    

    const res = await axios.post(`/api/user/register`, { ...formValues });
    if (res.data.error) {
      toast({
        title: `${res.data.message}`,
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }

    toast({
      title: `${res.data.message}`,
      description: `You are a part of Modulo Family! ${res.data.data.name}`,
    });
  
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };


  return ( 

    <Card>
      {/* <CardHeader>
        <CardTitle></CardTitle>
        <CardDescription>
          
        </CardDescription>
      </CardHeader> */}
      <form onSubmit={onRegister}>
      <CardContent className="space-y-2 p-2">
        <div className="space-y-1 border-gray-400 border-2 p-2 rounded-xl">
        <div className="flex-center text-sm gap-1">          
        <FcGoogle className="" size={20}/>
        <p className="font-semibold"> Continue with Google</p>
        </div>

        </div>
        <div></div>{inputFields.map((item,index) =>(
          <div key={item.name} className="space-y-1">
          <Label htmlFor={item.name}>{item.name}</Label>
          <Input 
          name={item.name.toLowerCase().replace(" ", "")}
          id={item.name} type={item.type} placeholder={item.placeholder}onChange={handleInputChange} />
        </div>
        ))}
        
       
      </CardContent>
      <CardFooter>
        <Button type='submit'>Sign Up</Button>
      </CardFooter>
      </form>
    </Card>
  )
}

export default Signup