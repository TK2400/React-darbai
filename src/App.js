import './App.css';
import Navigation from './components/Navigation';
import Card from './components/Card';
import logo from './logo.svg';

export default function App() {
  return (
    <div className='app'>
      <header className='header'>
        <img src={logo} className='header__logo' alt='logo' />
        <Navigation navType='primary' />
        <div className='header__hero'>
          Header image
        </div>
      </header>
      <main>
        <div className='cards'>
         <Card cardTitle='About' cardText='about about about about about about about about about about' />
         <Card cardTitle='Company'cardText='Company copany cmpanuy compnay company company company' />
         <Card cardTitle='Sevices'cardText='Services services services services services services services'/>             
        </div>

        <div className="content">
          <article className='content__article'>
            <section>
              <h2 className='content__title'>Services</h2>
              <p className='content__paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non nisl vel velit convallis accumsan ut sit amet est. Nullam sit amet fermentum magna. Duis finibus congue quam nec rhoncus. Ut id dignissim orci.</p>
            </section>
            <section>
              <h3 className='content__sub-header'>Sub Header</h3>
              <p className='content__paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non nisl vel velit convallis accumsan ut sit amet est. Nullam sit amet fermentum magna. Duis finibus congue quam nec rhoncus. Ut id dignissim orci.</p>
            </section>
          </article>
          <Navigation navType='secondary' />
        </div>
      </main>
    </div>
  );
}

