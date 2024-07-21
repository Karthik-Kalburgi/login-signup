const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 border-b border-border bg-background">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <img
            src="https://placehold.co/24x24?text=P"
            alt="Peerlist logo"
            className="rounded-full bg-primary p-1"
          />
          <span className="text-lg font-semibold text-foreground">
            Peerlist
          </span>
        </div>
        <span className="text-muted-foreground">/</span>
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
        <button className="px-4 py-2 text-secondary-foreground bg-secondary hover:bg-secondary/80 rounded-lg">
          Log In
        </button>
        <button className="px-4 py-2 text-primary-foreground bg-primary hover:bg-primary/80 rounded-lg">
          Join Peerlist
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
