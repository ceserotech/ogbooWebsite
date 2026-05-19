export default function Navbar() {
  return (
    <div className="fixed top-0 right-0 z-50 w-full h-25  bg-black py-0">
      <div className="mx-auto flex w-[95%] items-center justify-between px-6 py-1 md:py-0 md:px-12">
        
        {/* Logo */}
    
          
          <img src="/images/logo.png" alt="" className="w-[20%] md:w-[7%] p-0 m-0"/>
        

        {/* Button */}
        <button className="rounded-full bg-yellow-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-yellow-400">
          Contact Us
        </button>
      </div>
    </div>
  );
}