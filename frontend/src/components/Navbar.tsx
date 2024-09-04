import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Signin from "@/pages/Auth/Signin";
import Signup from "@/pages/Auth/Signup";
import { useUser } from "@/states/UserState";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, clearUser } = useUser();

  return (
    <nav className="flex items-center justify-between p-2 border-b border-border bg-background">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 ml-3">
          <img
            src="/logo.jpeg"
            alt="Peerlist logo"
            className=" p-1 w-[120px] h-[50px]"
          />
        </div>
        <div className="md:flex items-center justify-center gap-4 hidden">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Pre-built Wardrobes", path: "/prebuilt" },
          ].map((item, i) => (
            <a
              onClick={() => {
                navigate(item.path);
              }}
              key={i}
              href="#"
              className="text-foreground hover:text-primary"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <div className="flex items-center space-x-4">
        {user._id ? (
          <button
            onClick={() => clearUser()}
            className="hidden md:flex px-4 py-2 text-primary-foreground bg-destructive hover:bg-destructive/90 hover:text-black rounded-lg"
          >
            Signout
          </button>
        ) : (
          <Popover>
            <PopoverTrigger className="px-4 py-2 text-primary-foreground bg-primary hover:bg-primary/80 rounded-lg">
              Join Modulo
            </PopoverTrigger>
            <PopoverContent>
              <Tabs defaultValue="login" className="">
                <TabsList>
                  <TabsTrigger value="login">Sign In</TabsTrigger>
                  <TabsTrigger value="register">Sign Up</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                  <Signin />
                </TabsContent>
                <TabsContent value="register">
                  <Signup />
                </TabsContent>
              </Tabs>
            </PopoverContent>
          </Popover>
        )}
        <button className="hidden md:flex px-4 py-2 text-primary-foreground bg-primary hover:bg-primary/80 rounded-lg">
          Virtual Tour
        </button>
        <button className="hidden md:flex px-4 py-2 text-primary-foreground bg-primary hover:bg-primary/80 rounded-lg">
          Call For Expert
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
