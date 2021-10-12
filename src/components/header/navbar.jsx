import LogoApp from './logo';

export default function Navbar(){
    return(
        <nav className="uk-navbar-container uk-navbar">
            <div className="uk-navbar-left">
                <ul className="uk-navbar-nav">
                    <li>
                        <a href="/#">
                            <LogoApp title="Merci Hurkan" />
                        </a>
                        <div className="uk-navbar-dropdown">
                            <ul className="uk-nav uk-navbar-dropdown-nav">
                                <li className="uk-active"><a href="/#">Active</a></li>
                                <li><a href="/#">Item</a></li>
                                <li><a href="/#">Item</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="/#">Item</a></li>
                </ul>

            </div>
        </nav>
    )
}