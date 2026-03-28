function Header() {
  return (
    <div className="bg-black text-white p-4 flex justify-between items-center">
      <div className="flex justify-between gap-4  ">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix"
          className="h-6 md:h-8"
        />{" "}
   
     
        <ul
          className="flex items-center text-white gap-5"  >
      
          <li className="hover:text-red-600 cursor-pointer">Home</li>
          <li className="hover:text-red-600 cursor-pointer">TV Shows</li>
          <li className="hover:text-red-600 cursor-pointer">Movies</li>
          <li className="hover:text-red-600 cursor-pointer">Latest</li>
          <li className="hover:text-red-600 cursor-pointer">My List</li>
        </ul>
      </div>
      <div className="flex  gap-4 text-sm">
        <button className="hover:text-red-600">Search</button>
        <button className="hover:text-red-600">Kids</button>
        <button className="hover:text-red-600">Kids</button>

        <img
          src="https://i.imgur.com/0y0y0y0.png"
          alt="User"
          className="h-8 w-8 rounded-full border border-white"
        />
      </div>
    </div>
  );
}

export default Header;
 
<nav className="bg-black text-white px-6 py-4 flex items-center justify-between ">
  <div className="flex items-center gap-4">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
      alt="Netflix"
      className="h-6 md:h-8"
    />
    <ul className="hidden md:flex gap-6 text-sm font-medium">
      <li className="hover:text-red-600 cursor-pointer">Home</li>
      <li className="hover:text-red-600 cursor-pointer">TV Shows</li>
      <li className="hover:text-red-600 cursor-pointer">Movies</li>
      <li className="hover:text-red-600 cursor-pointer">Latest</li>
      <li className="hover:text-red-600 cursor-pointer">My List</li>
    </ul>
  </div>

  <div className="flex  gap-4 text-sm">
    <button className="hover:text-red-600">Search</button>
    <button className="hover:text-red-600">Kids</button>
    <button className="hover:text-red-600">Kids</button>

    <img
      src="https://i.imgur.com/0y0y0y0.png"
      alt="User"
      className=" rounded-full border border-white"
    />
  </div>
</nav>;
