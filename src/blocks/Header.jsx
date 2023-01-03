import React from 'react'
import NavItem from '../components/NavItem'
import { navMenu } from '../const';
import NavMenu from '../components/NavMenu'
import Button from '../components/Button'
import MenuItem from '../components/menu-item';
import BurgerMenu from '../components/BurgerMenu';

import { ReactComponent as LogoIcon } from '../images/logo.svg'
import { ReactComponent as MenuIcon } from '../images/icon-menu.svg';
import { ReactComponent as MenuCloseMenu } from '../images/icon-close-menu.svg';

const Header = () => {
    const [isBurgerMenu, setIsBurgerMenu] = React.useState(false);

    const renderValue = (value, type) => typeof Object.values(value)[0] === type

    return (
        <header className='flex items-center'>
            <LogoIcon />
            <nav className='hidden md:flex space-x-6 ml-8'>
                {navMenu.map((block, index) =>
                    <NavItem
                        key={index}
                        text={renderValue(block, "string") ? Object.values(block) : Object.keys(block)}>
                        {renderValue(block, "object") && <NavMenu items={Object.values(block)[0]} />}
                    </NavItem>
                )}
            </nav>
            <div className="hidden md:flex ml-auto space-x-5">
                <Button >Log in</Button>
                <Button hasBorder={true}>Register</Button>
            </div>
            <div onClick={()=>setIsBurgerMenu(!isBurgerMenu)} className="flex md:hidden ml-auto cursor-pointer z-30">
               {isBurgerMenu ?  <MenuCloseMenu />: <MenuIcon />}
            </div>
            <BurgerMenu isOpened={isBurgerMenu} />
        </header>
    )
}

export default Header