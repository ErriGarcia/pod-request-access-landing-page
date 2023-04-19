import logo from '../images/desktop/logo.svg'

const Header = () => {
    return (
        <header className='header'>
            <img className='header-logo' src={logo} alt='logo' />
        </header>
    )
}

export default Header