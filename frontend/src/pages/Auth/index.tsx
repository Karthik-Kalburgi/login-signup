import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { FormEvent, useState, ChangeEvent } from "react";

type InputField = {
  name: string;
  type: string;
  placeholder: string;
};

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmpassword: string;
};

const Auth = () => {
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
    confirmpassword: "",
  });

  const onRegister = async (e: FormEvent) => {
    e.preventDefault();

    // Handle form submission
    console.table(formValues);
    const res = await axios.post(`/api/check`, { data: formValues });
    console.log(res.data);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="flex-center flex-col min-w-screen min-h-screen">
      <form onSubmit={onRegister} className="flex-center flex-col gap-4">
        {inputFields.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div>{item.name}</div>
            <Input
              name={item.name.toLowerCase().replace(" ", "")} // Convert name to corresponding state key
              placeholder={item.placeholder}
              type={item.type}
              onChange={handleInputChange}
            />
          </div>
        ))}

        <Button>Register</Button>
      </form>
    </div>
  );
};

export default Auth;
