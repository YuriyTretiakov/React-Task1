import styles from './burger.module.css';
// export default function Burger() {
//     return (
//         <>
//         {[1, 2, 3].map((el) => (
//             <span key={el} className={styles.burger}/>
//         ))}</>
//     )
// }
import MenuIcon from '@mui/icons-material/Menu'
import { useEffect, useState } from 'react'
import BurgerMenu from './BurgerMenu'


export default function Burger() {
  const [stateBurger, setStateBurger] = useState(false)
  useEffect(() => {
    const handleClick = () => setStateBurger(false)
    window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [])
  return (
		<>
			<div
				className={styles.burger}
				onClick={(e) => {
          e.stopPropagation()
					e.nativeEvent.stopImmediatePropagation()
					setStateBurger(!stateBurger)
				}}
			>
				<MenuIcon />
				{stateBurger && <BurgerMenu />}
			</div>
		</>
	)
}