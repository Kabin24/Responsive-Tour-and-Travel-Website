import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from"../assets/nepal2.avif"
import Footer from "../components/Footer";
import AboutUs from "../components/Aboutus";


function About (){
    return(
        <>
               
       <Navbar/>
       <Hero 
       cName="hero-mid"
       heroImg={AboutImg}
       title="About "
      
       />
       <AboutUs/>
       <Footer/>

        </>
       
    )

}

export default About;