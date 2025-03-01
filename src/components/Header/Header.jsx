import Menu from "../Menu/Menu";
import { useNavigate } from "react-router-dom";
// import { useContent } from 'react';
// import { ThemeContext} from '../../context/context'
import useResize from "../../hooks/useResize";
import Burger from "../Burger/Burger";
import {useState} from 'react';
import Button from "../Button/Button";
import "./Header.css";

import { IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'

import { useContext } from 'react'
import { ThemeContext } from '../Context/Context'

export default function Header() {
    const navigate = useNavigate()
    // const {toggleTheme} = useContent(ThemeContext);
    const width = useResize();
    // console.log(width);
    // const [isOpen, setOpen] = useState()
    const {theme, toggleTheme} = useContext(ThemeContext)
  const ButtonDark = styled(IconButton)({
		color: 'Yellow',
	})
  const ButtonLight = styled(IconButton)({
		color: 'black',
	})
  
    return (
        <header className='header'>
                {width > 768 && (
				<>
					<div className='logo'>Yuriy Tretiakov</div>
					<Menu />
				</>
			)}
            {width <= 768 && <Burger />}
            {/* <Button onClick={() => navigate('/contacts')} label='Контакты'/>
            <Button label='Сменить тему' onClick={() => toggleTheme()}/> */}
        <Button className="button-contact" onClick={() => navigate('contacts')} label= "Контакты"/>
        {theme === 'light' && (
				<ButtonDark onClick={() => toggleTheme()}>
					<DarkModeIcon />
				</ButtonDark>
			)}
			{theme === 'dark' && (
				<ButtonLight onClick={() => toggleTheme()}>
					<LightModeIcon />
				</ButtonLight>
			)}
        </header>
    )
}