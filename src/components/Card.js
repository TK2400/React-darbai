import './card.css';

export default function Card(props) {
       return (
        <article className='card'>
            <h2 className='card__title'>{props.cardTitle}</h2>
            <p className='card__paragraph'>{props.cardText}</p>
          </article>
    );
}