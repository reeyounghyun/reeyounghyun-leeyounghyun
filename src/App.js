import './App.css';
import Footer from './componentes/layout/Footer';
import PageTitle from './componentes/layout/PageTitle';
import Section1 from './componentes/section1';
import Section2 from './componentes/section2';
import Section4 from 'componentes/section4';
import Section5 from 'componentes/section5';
import Section6 from 'componentes/section6';
import Porject from 'componentes/porject';

function App() {
  return (
    <div id="parallax__cont">
      <PageTitle />
      <main className="overflow-hidden">
        <Section1 />
        <Porject/>
        <Section2 />
        <Section4/>
        <Section5/>
        <Section6/>
      </main>
      <Footer />
    </div>
  );
}

export default App;