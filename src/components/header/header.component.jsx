import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.util';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/4.4 crown.svg.svg'

const Header = ({currentUser}) => (

    <div className='header'>
        <Link  className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                Shop
            </Link>
            <Link className='option' to='/shop'>
                Contact
            </Link>
            {
                currentUser ? 
                <div className='option' onClick={()=>auth.signOut()}>Sign Out</div>
                :
                <Link className='option' to='/signin'>SignUp</Link>

            }
        </div>
    </div>
);

export default Header;