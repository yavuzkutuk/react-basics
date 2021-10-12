export default function Copyright(){
    const year = new Date().getFullYear();

    return(
        <div className="yk-copyright">
            © 2013-{year} Wild Code School. Tous droits réservés
        </div>
    )
}