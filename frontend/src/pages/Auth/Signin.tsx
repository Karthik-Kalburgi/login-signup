import { ChangeEvent, FormEvent, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { useToast } from "@/components/ui/use-toast";

import axios from "axios";
import { ToastAction } from "@/components/ui/toast";
import { useUser } from "@/states/UserState";

type InputField = {
  name: string;
  type: string;
  placeholder: string;
};

type FormValues = {
  email: string;
  password: string;
};

function Signin() {
  const { toast } = useToast();
  const { setUser } = useUser();
  const inputFields: InputField[] = [
    {
      name: "Email",
      type: "text",
      placeholder: "Enter Username/Email",
    },
    {
      name: "Password",
      type: "password",
      placeholder: "Enter Password",
    },
  ];

  const [formValues, setFormValues] = useState<FormValues>({
    email: "",
    password: "",
  });

  const onRegister = async (e: FormEvent) => {
    e.preventDefault();

    // Handle form submission
    const API_URL = import.meta.env.VITE_API_URL;

    console.table(formValues);
    const res = await axios.post(`${API_URL}/api/user/login`, {
      ...formValues,
    });
    if (res.data.error) {
      toast({
        title: `${res.data.message}`,
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return;
    }

    setUser(res.data.user);

    toast({
      title: `${res.data.message}`,
      description: "You are a part of Modulo Family!",
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <Card className="">
      {/* <CardHeader>
        <CardTitle></CardTitle>
        <CardDescription>
          
        </CardDescription>
      </CardHeader> */}
      <form onSubmit={onRegister}>
        <CardContent className="space-y-2 p-2">
          <div className="space-y-1 border-gray-400 border-2 p-2 rounded-xl">
            <div className="flex-center text-sm gap-1">
              <FcGoogle className="" size={20} />
              <p className="font-semibold"> Continue with Google</p>
            </div>
          </div>

          {inputFields.map((item) => (
            <div key={item.name} className="space-y-1">
              <Label htmlFor={item.name}>{item.name}</Label>
              <Input
                name={item.name.toLowerCase().replace(" ", "")}
                id={item.name}
                type={item.type}
                placeholder={item.name}
                onChange={handleInputChange}
              />
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <Button type="submit">Sign In</Button>
        </CardFooter>
      </form>
    </Card>
  );
}

export default Signin;
