import './navigation.css';

export default function Navigation(props) {
    return (
        <nav className={`navigation ${props.navType}`}>
            <h3>Navigation</h3>
            <ul className={`navigation__list ${props.navType}`}>
                <li className='navigation__list-item'><a href='http://google.com'>Home</a></li>
                <li className='navigation__list-item'><a href='http://google.com'>Product</a></li>
                <li className='navigation__list-item'><a href='http://google.com'>Company</a></li>
                <li className='navigation__list-item'><a href='http://google.com'>Contact</a></li>
            </ul>
        </nav>
    );
}