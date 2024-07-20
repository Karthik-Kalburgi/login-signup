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
  label: string;
};

type FormValues = {
  name: string;
  password: string;
};

const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const inputFields: InputField[] = [
    {
      label: "Username / Email",
      name: "Name",
      type: "text",
      placeholder: "Enter Username/Email",
    },
    {
      label: "Password",
      name: "Password",
      type: "password",
      placeholder: "Enter Password",
    },
  ];

  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    password: "",
  });

  const onRegister = async (e: FormEvent) => {
    e.preventDefault();

    // Handle form submission
    console.table(formValues);
    const res = await axios.post(`/api/user/login`, { ...formValues });
    if (res.data.error) {
      toast({
        title: `${res.data.message}`,
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return;
    }

    toast({
      title: `${res.data.message}`,
      description: "You are a part of Modulo Family!",
    });
    navigate(`/home`);
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
          className="px-5 py-20 w-[400px] flex-center flex-col bg-gray-500 gap-4 border-2 border-slate-500 rounded-xl  "
        >
          {inputFields.map((item, index) => (
            <div key={index} className="flex flex-col gap-1">
              <div className="">{item.name}:</div>
              <Input
                name={item.name.toLowerCase().replace(" ", "")} // Convert name to corresponding state key
                placeholder={item.placeholder}
                type={item.type}
                onChange={handleInputChange}
              />
            </div>
          ))}
          <Button>Sign In</Button>
          <div className="flex items-center gap-1">
            Not a User?{" "}
            <span
              onClick={() => {
                navigate({ pathname: `/signup` });
              }}
              className="cursor-pointer hover:underline"
            >
              Register
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
