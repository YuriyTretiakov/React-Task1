import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import './FooterMenu.css'

export default function FooterMenu () {
    const MENUFOOTER = [
        {el: 'Follow me', id: uuid()},
        {el: 'Карта страницы', id: uuid()},
        {el: 'Новости', id: uuid()},
               ]
    return (
        <ul className="footerМenu">
            {MENUFOOTER.map(({el, id}) => <a key={id}> {el}</a>)}

        </ul>
    )
}