import logo from './logo.svg';
import './App.css'; 
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Footer from './Components/Footer';
import FAQ from './Components/FAQ';
import DieticianHelp from './Components/DieticianHelp';
import About from './Components/About';
import OurService from './Components/OurService';
import HowWeWork from './Components/HowWeWork';
import ConsultationForm from './Components/ConsultationForm';
import SpecialtiesSlider from './Components/SpecialtiesSlider';
import TestimonialSlider from './Components/TestimonialSlider';
import NutriHubBanner from './Components/NutriHubBanner';
import './index.css'


function App() {
  return (
   <>
     <Navbar title="DieticianMegha" menu="Home" about="About" service="Specalities" blog="Testimonials" faq="FAQ" contact="Contact"/>
     <Main/>
     <About/> 
     <SpecialtiesSlider />
     <HowWeWork />
     <OurService />
     <DieticianHelp />
     <NutriHubBanner />
     <TestimonialSlider />
     <ConsultationForm/>
     <FAQ />
     <Footer />
   </> 
  );  
}  

export default App;
