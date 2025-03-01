import Menu from "../Menu/Menu";
// import { useNavigate } from "react-router-dom";
import "./Header.css";
import Button from "../Button/Button";


export default function Header() {
    // const navigate = useNavigate()
    return (
        <header className='header clearfix'>
            <div className='logo'>Yuriy Tretiakov</div>
            <Menu />
            <Button className='button-contact' onClick={() => console.log('Контакты')} label='Контакты'/>
        </header>
    )
}