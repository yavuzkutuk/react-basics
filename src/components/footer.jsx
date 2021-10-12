import Copyright from "./footer/copyright";
import Navfooter from "./footer/navfooter";

export default function Footer(){
    return(
        <footer>
            <div className="uk-child-width-1-2 uk-grid" data-uk-grid>
                <div>
                    <Copyright/>
                </div>
                <div>
                    <Navfooter/>
                </div>
            </div>
        </footer>
    )
}