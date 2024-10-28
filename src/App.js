import './App.css';
import ContactInformation from './components/ContactInformation';
import EventDatesAndVenues from './components/EventDatesAndVenues';
import FamilyTransformationEvent from './components/FamilyTransformationEvent';
import FAQSection from './components/FAQSection';
import SchoolsScroller from './components/SchoolsScroller';
import SeminarDetails from './components/SeminarDetails';
import SeminarPhase from './components/SeminarPhase';
import Testimonials from './components/Testimonials';
import YouthPeaceAmbassadorEvent from './components/YouthPeaceAmbassadorEvent';

function App() {
  return (
   <div>
    <FamilyTransformationEvent />
    <YouthPeaceAmbassadorEvent />
    <EventDatesAndVenues />
    <SeminarDetails />
    <Testimonials />
    <SeminarPhase />
    <SchoolsScroller />
    <FAQSection />
    <ContactInformation />
    
   </div>
  );
}

export default App;
