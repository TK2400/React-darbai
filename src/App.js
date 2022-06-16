import './App.css';
import Navigation from './components/Navigation';
import Card from './components/Card';
import Section from './components/Section';
// import logo from './logo.svg';
import Header from './components/Header';



export default function App() {
  return (
    <div className='app'>
      <Header showImage={true}/>
      <main>
        <div className='cards'>
          <Card cardTitle='About' cardText='about about about about about about about about about about' />
          <Card cardTitle='Company' cardText='Company copany cmpanuy compnay company company company' />
          <Card cardTitle='Sevices' cardText='Services services services services services services services' />
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

