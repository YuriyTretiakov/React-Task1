import { useContext } from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PropTypes, { string } from 'prop-types';
import './Layout.css'
import { ThemeContext } from '../../Context/Context'
import cn from 'classnames'

export default function Layout({children, className}) {
    const {theme} = useContext(ThemeContext)
    console.log(theme)
    return (
        <div>
            <Header className={cn(className, theme)}>
            {children}</Header>
            <main className={cn(className, theme)}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
    className: string
};