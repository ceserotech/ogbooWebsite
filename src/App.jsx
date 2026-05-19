import Collection from "./components/Collections"
import Footer from "./components/Footer"

import HeroCarousel from "./components/Hero"
import HowItWorks from "./components/Howitworks"
import Navbar from "./components/Navbar"
import Brands from "./components/Partners"
import Testimonial from "./components/Testimonials"
import WhatsAppFloat from "./components/Whatsapp"
import WhyChooseUs from "./components/Whychoose"




function App() { 

  return (
    <>
    <Navbar />
      <HeroCarousel/>
      <Brands />
       {/* <Herosection /> */}
       <Collection/>
       {/* <ScrollHorizontal/> */}
       <WhyChooseUs />
       <Testimonial />
       <HowItWorks />
       <Footer/>
       <WhatsAppFloat/>
    </>
  )
}

export default App
