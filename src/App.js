import './App.css';
import Navigation from './components/Navigation';
import Card from './components/Card';
import Section from './components/Section';
// import logo from './logo.svg';
import Header from './components/Header';



export default function App() {
  const cardsData = [

    {
      cardTitle: "About",
      cardText: "about about about about about about about about about about",
    },
    {
      cardTitle: "Company",
      cardText: "about about about about about about about about about about",
    },
    {
      cardTitle: "Services",
      cardText: 'Services services services services services services services',
    },

  ]

  return (
    <div className='app'>
      <Header showImage={true} />
      <main>
        <div className='cards'>
          {cardsData.map((el) => {
            return <Card key={el.cardText} cardTitle={el.cardTitle} cardText={el.cardText} />
          })}

        </div>
        <div className="content">
          <article className='content__article'>
            <Section sectionType="title" nameTitle="Section" sectionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non nisl vel velit convallis accumsan ut sit amet est. Nullam sit amet fermentum magna. Duis finibus congue quam nec rhoncus. Ut id dignissim orci" />
            <Section sectionType="sub-header" nameTitle="Sub-header" sectionText="consectetur adipiscing elit. asdasdad asda  ljsdad alskjdalsdj lasjdlaksjlakdj asda ntum magna. Duis finibus congue quam nec rhoncus. Ut id dignissim orci" />
          </article>
          <Navigation navType='secondary' showTitle={true} />
        </div>
      </main>
    </div>
  );
}

