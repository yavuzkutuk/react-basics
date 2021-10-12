import LogoApp from '../../assets/img/logo.png';

export default function Logo(props){
    const {title} = props;
    return(
        <img src={LogoApp} alt={title} />
    )
}