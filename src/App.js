import './App.css';
import photo1 from "./assests/photo1.jpg";
import photo2 from "./assests/photo2.jpg";
import photo3 from "./assests/photo3.jpg";
import Hero from "./components/Hero";
import Slider from './components/Slider';
import Navbar from './components/Navbar';

const navbarLinks = [{url: "#", title: "Home"},{url: "#", title: "Find Space"},{url: "#", title: "Rent"},{url: "#", title: "SignUp/Login"}];

function App() {
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks}/>
     <Hero imageSrc = {photo1}/>  
     <Slider className="photo_2"
      imageSrc={photo2} 
      title={"Smart Parking"}
      subtitle={"Our platform makes parking easy."}
     />  
     <Slider
      imageSrc={photo3} 
      title={"Hassle free parking"}
      subtitle={"Park like never before"}
      flipped={true}
     /> 

    </div>
  );
}

export default App;
