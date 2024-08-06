
import './App.css';
import MembershipPlans from './Components/MembershipPlans/MembershipPlans';
import NavBar from './Components/NavBar/NavBar';
import RegisterSection from './Components/RegisterSection/RegisterSection';
import UnlimitedClasses from './Components/UnlimitedClasses/UnlimitedClasses';
import WhatsAppButton from './Components/WhatsAppButton/WhatsAppButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



function App() {
  return (
    <div className="App">
    <NavBar/>
    <RegisterSection/>
    <MembershipPlans/>
    <WhatsAppButton/>
    <UnlimitedClasses/>
    
    </div>
  );
}

export default App;
