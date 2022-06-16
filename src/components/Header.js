import './header.css';
import logo from '../logo.svg';
import Navigation from './Navigation';

export default function Header(props) {
    return (
        <header className='header'>
            <img src={logo} className='header__logo' alt='logo' />
            <Navigation navType='primary' showTitle={false} />
            {props.showImage && <div className='header__hero'>
                Header image
            </div>}
        </header>
    );
}