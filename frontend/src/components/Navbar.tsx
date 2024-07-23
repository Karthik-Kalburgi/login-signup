import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import Signin from "@/pages/Auth/Signin";
import Signup from "@/pages/Auth/Signup";


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 border-b border-border bg-background">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <img
            src="/logo.jpeg"
            alt="Peerlist logo"
            className=" p-1 w-[120px] h-[50px]"
          /> 
       
        </div>
        <span className="text-muted-foreground"></span>
        {[
          "Home",
          "About Us",
          "Pre-built Wardrobes",
          "Build your Own Wardrobe",
        ].map((item, i) => (
          <a key={i} href="#" className="text-foreground hover:text-primary">
            {item}
          </a>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        
          
          <Popover>
  <PopoverTrigger className="px-4 py-2 text-primary-foreground bg-primary hover:bg-primary/80 rounded-lg">Join Modulo</PopoverTrigger>
  <PopoverContent><Tabs defaultValue="login" className="">
  <TabsList>
    <TabsTrigger value="login">Sign In</TabsTrigger>
    <TabsTrigger value="register">Sign Up</TabsTrigger>
  </TabsList>
  <TabsContent value="login"><Signin/></TabsContent>
  <TabsContent value="register"><Signup/></TabsContent>
</Tabs>
</PopoverContent>
</Popover>

       
        <button className="px-4 py-2 text-primary-foreground bg-primary hover:bg-primary/80 rounded-lg">
          Virtual Tour
        </button>
        <button className="px-4 py-2 text-primary-foreground bg-primary hover:bg-primary/80 rounded-lg">
          Call For Expert
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
