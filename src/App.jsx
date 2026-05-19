import Collection from "./components/Collections"
import Footer from "./components/Footer"
// import ScrollHorizontal from "./components/Gallary"
import HeroCarousel from "./components/Hero"
import HowItWorks from "./components/Howitworks"
import Navbar from "./components/Navbar"
import Brands from "./components/patners"
import Testimonial from "./components/Testimonials"
import WhatsAppFloat from "./components/Whatsapp"
import WhyChooseUs from "./components/Whychoose"
// import Herosection from "./components/Herosection"



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
