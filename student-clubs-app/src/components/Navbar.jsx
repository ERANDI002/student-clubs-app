import {NavLink} from 'react-router-dom';
import styles from'./Navbar.module.css';

const Navbar = () => {
    return (
        // Navigation bar container
        //dynamically apply CSS classes to a navigation link
        // use JS ternary operator for if else
            //  use an arrow function
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    
                   <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Home
          </NavLink>  
          
               
                </li>

                <li className={styles.navItem}>
          <NavLink
            to="/clubs"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Clubs
          </NavLink>
        </li>
           
         <li className={styles.navItem}>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            About
          </NavLink>
        </li>
         
         <li className={styles.navItem}>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Contact
          </NavLink>
        </li>

         
            </ul>
        </nav>
         
    )
}

export default Navbar;