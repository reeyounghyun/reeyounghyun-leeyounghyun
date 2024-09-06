import './App.css';
import Footer from './componentes/layout/Footer';
import PageTitle from './componentes/layout/PageTitle';
import Section1 from './componentes/section1';
import Section2 from './componentes/section2';
import Section3 from './componentes/section3';


function App() {
  return (
    <div id="parallax__cont">
      <PageTitle />
      {/* title */}
      <main className="overflow-hidden" id="parallax__cont">
        <Section1 />
        <Section2 />
        <main id="horizontal">
          <Section3 />
          <Section3 />
        </main>
      </main>
      <Footer />
    </div>
  );
}

export default App;