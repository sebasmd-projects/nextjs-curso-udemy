import { ActiveLink } from '../activelink/activeLink'
import styles from './navBar.module.css'


const menuLinks = [
    {
        label: 'Inicio',
        route: '/'
    },
    {
        label: 'About',
        route: '/about'
    },
    {
        label: 'Contact',
        route: '/contact'
    },
    {
        label: 'Pricing',
        route: '/pricing'
    }
]

export const NavBar = () => {
    return (
        <nav className={styles.menu}>
            {menuLinks.map(({route, label}, index) => (
                <ActiveLink key={index} href={route} text={label}/>
            ))}
        </nav>
    )
}
