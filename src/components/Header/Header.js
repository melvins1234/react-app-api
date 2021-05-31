import '../preset.scss';
import '../style.scss';
import Nav from '../Nav/Nav';
import CompanyLogo from '../Comp-Logo/Logo';


const Header = () => {
    return(
        <div className='wrapper'>
            <Nav />
            <CompanyLogo />
        </div>
    )
}
    

export default Header;