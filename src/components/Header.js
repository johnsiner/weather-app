import './header.css';
import Input from './Input';

const Header = props => {
    return (
        <div className='header'>
            <i className="fa-solid fa-cloud cloud-icon"></i>
            <Input />
        </div>
    );
}

export default Header;
