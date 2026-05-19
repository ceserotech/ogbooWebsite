import { Phone, MapPin } from "lucide-react";
export default function Navbar() {
  return (
    <div className="fixed top-0 right-0 z-50 w-full h-20 md:h-25  bg-black py-0">
      <div className="mx-auto flex w-[95%] items-center justify-between px-6 py-1 md:py-0 md:px-12">
        {/* Logo */}

        <img
          src="/images/logo.png"
          alt=""
          className="w-[20%] md:w-[7%] p-0 m-0"
        />

        {/* Button */}
        <div className="flex flex-col gap-1 items-end">
          <a
            href="tel:+2348136495940"
            className="  flex items-center gap-1
                px-1 py-1 text-[12px]
                md:px-4 md:py-2 md:text-base
                bg-yellow-400 text-white
                rounded-full
                hover:bg-gray-800 transition"
          >
            <Phone size={15} />
            Call Now
          </a>

          <p className="text-white italic flex items-center gap-1 font-light text-sm pb-0">
            <a
              href="https://www.google.com/maps?q=Branch+2.0,+No.+6+Odenigbo+market,+Ohaozara+LGA,+Ebonyi+State"
              target="_blank"
              rel="noopener noreferrer"
              className=" flex items-center gap-1
                px-1 py-1 text-[11px]
                md:px-4 md:py-2 md:text-base
                bg-black text-white
                rounded-full
                hover:bg-gray-800 transition"
            >
              <MapPin size={16} />
              Our Location
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
