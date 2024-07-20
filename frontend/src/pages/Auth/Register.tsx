import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { FormEvent, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

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
  confirmpassword: string;
};

const Register = () => {
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
    {
      name: "Confirm Password",
      type: "password",
      placeholder: "Enter Confirm Password",
    },
  ];

  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    password: "",
    mobile: "",
    confirmpassword: "",
  });

  const onRegister = async (e: FormEvent) => {
    e.preventDefault();
    // Checking for Confirm password and Password
    if (formValues.confirmpassword != formValues.password) {
      toast({
        title: `Passwords don't match`,
        description: "Type in again!",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return;
    }

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
    navigate(`/login`);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="flex-center min-w-screen min-h-screen">
      <div className="w-1/2"></div>
      <div className="w-1/2 flex-center">
        <form
          onSubmit={onRegister}
          className="px-5 py-20 w-[400px] flex-center flex-col bg-gray-500 gap-4 border-2 border-slate-500 rounded-xl"
        >
          {inputFields.map((item, index) => (
            <div key={index} className="flex flex-col gap-1">
              <div>{item.name}:</div>
              <Input
                name={item.name.toLowerCase().replace(" ", "")} // Convert name to corresponding state key
                placeholder={item.placeholder}
                type={item.type}
                onChange={handleInputChange}
              />
            </div>
          ))}
          <Button>Sign Up</Button>
          <div className="flex items-center gap-1">
            Already a User?{" "}
            <span
              onClick={() => {
                navigate({ pathname: `/` });
              }}
              className="cursor-pointer hover:underline"
            >
              Login
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
