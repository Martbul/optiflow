

import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";
import Home from "./pages/home/Home";
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Path from "./paths";
import AIandAutomation from "./pages/ai-and-automation/AIandAutomation";
import MakecomConsulting from "./pages/make.com-consulting/Make.comConsulting";


function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path={Path.Home} element={<Home />} />
        <Route path={Path.AIAgency} element={<AIandAutomation />} />
        <Route path={Path.MakeConsulting} element={<MakecomConsulting />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
