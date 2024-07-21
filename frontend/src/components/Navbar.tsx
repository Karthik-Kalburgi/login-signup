import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Login from "@/pages/Auth/Login";


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
          "Franchises",
          "Blogs",
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
  <PopoverContent><Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Sign In</TabsTrigger>
    <TabsTrigger value="password">Sign Up</TabsTrigger>
  </TabsList>
  <TabsContent value="account"><Login></Login></TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>
</PopoverContent>
</Popover>

       
        <button className="px-4 py-2 text-primary-foreground bg-primary hover:bg-primary/80 rounded-lg">
          Virtual Tour
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
