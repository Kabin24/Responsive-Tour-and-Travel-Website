import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeImg from "../assets/nepal3.jpg";
function Home (){
    return(
        <>
       <Navbar/>
       <Hero 
       cName="hero"
       heroImg={HomeImg}
       title="Your Journey Your Story "
       text="Choose Your Favorite Destination"
       buttonText="Travel Plan"
       url="/"
       btnClass="show"
       />

        </>
    );

}

export default Home;