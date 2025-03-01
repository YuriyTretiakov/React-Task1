import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PropTypes, { string } from 'prop-types';
import './Layout.css'

export default function Layout({children, className}) {
    return (
        <div>
            <Header />
            <main className={className}>
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