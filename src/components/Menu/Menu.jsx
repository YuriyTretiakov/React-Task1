import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import './Menu.css'

export default function Menu () {
    const MENU = [
        {el: 'На главную', id: uuid()},
        {el: 'Обо мне', id: uuid()},
        {el: 'Отзывы', id: uuid()},
        {el: 'Блог', id: uuid()}
        ]
    return (
        <ul className="menu">
            {MENU.map(({el, id}) => <a key={id}> {el}</a>)}

        </ul>
    )
}