import Testimonials from "../../components/testimonials/Testimonials"
import "./Home.css"
import Faq from './../../components/faq/Faq';
import BookACall from './../../components/book-a-call/BookACall';
import OurHelp from "../../components/ourhelp/Ourhelp";
import OurAutomations from './../../components/our-automations/OurAutomations';
import Assessment from './../../components/assessment/Assessment';
import Header from "../../components/header/Header";


export default function Home() {
   return (
      <>
         <Header/>
         <OurAutomations/>
         <OurHelp/>
         <BookACall/>
         <Faq/>
         <Testimonials />
         <Assessment/>
      </>
   )
}