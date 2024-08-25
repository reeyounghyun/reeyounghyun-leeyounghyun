import './App.css';
import Footer from './common/Footer';
import PageTitle from './common/PageTitle';
import Guestbook from './componentes/Guestbook';
import Home from './pages/Home';

function App() {
  return (
    <>
      <PageTitle />
      <section className='flex items-center justify-center text-white truncate bg-black border-4 border-red-600 h-dvh'>
        <div className='leading-tight uppercase text-8xl'>
          <span className='block text-transparent' style={{WebkitTextStroke:'2px #b1dd40'}}>GSAP</span>
          ScrollTrigger
          <Home />
        </div>
      </section>
      <Footer />
    </> 
  );
}

export default App;