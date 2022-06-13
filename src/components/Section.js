import './section.css';

export default function Section(props) {
    return (
            <section>
              <h2 className={`content__${props.sectionType}`}>{`${props.nameTitle}`}</h2>
              <p className='content__paragraph'>{`${props.sectionText}`}</p>
            </section>

    );
}