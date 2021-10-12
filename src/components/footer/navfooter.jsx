export default function Navfooter(){
    return(
        <nav className="uk-navbar-container yk-background-primary" data-uk-navbar>
            <div className="uk-navbar-left">
                <ul className="uk-navbar-nav">
                    <li className="uk-active"><a href="/">Menu 1</a></li>
                    <li className="uk-parent"><a href="/">Menu 2</a></li>
                    <li><a href="/">Menu 3</a></li>
                </ul>
            </div>
        </nav>
    )
}