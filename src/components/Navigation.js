import './navigation.css';

export default function Navigation(props) {
    // const showTitle = props.navType === 'secondary'// susije su props.showTitle
    const navigationItems = [
        'Home',
        'Product',
        'Company',
        "Contact"
    ]

    const navigationElements = navigationItems.map((navigationItem) => {
        return (
            <li
                key={navigationItem}
                className='navigation__list-item'>
                <a href='http://google.com'>{navigationItem}</a>
            </li >
        )

})

return (
    <nav className={`navigation ${props.navType}`}>
        {props.showTitle && <h3>Navigation</h3>}
        <ul className={`navigation__list ${props.navType}`}>
            {navigationElements}
        </ul>
    </nav>
);
}