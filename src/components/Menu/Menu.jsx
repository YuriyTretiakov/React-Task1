import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import './Menu.css'

export default function Menu () {
    // const MENU = [
    //     {el: 'На главную', id: uuid()},
    //     {el: 'Обо мне', id: uuid()},
    //     {el: 'Отзывы', id: uuid()},
    //     {el: 'Блог', id: uuid()}
    //     ]
    // return (
    //     <ul className="menu">
    //         {MENU.map(({el, id}) => <a key={id}> {el}</a>)}

    //     </ul>
    // )
    const MENU = [
        { title: "На главную", to: "/", key: uuid() },
        { title: "Обо мне", to: "about", key: uuid() },
        { title: "Отзывы", to: "testimonials", key: uuid() },
        { title: "Блог", to: "blog", key: uuid() },
      ];
      return (
        <ul className="menu">
          {MENU.map(({title, key, to}) => (
            <Link  key={key} to={to}>{title}</Link>
          ))}
        </ul>
      );
}