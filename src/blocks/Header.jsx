import React from 'react'
import { ReactComponent as LogoIcon } from '../images/logo.svg'
import NavItem from '../components/NavItem'
import { navMenu } from '../const';
import NavMenu from '../components/NavMenu'
import Button from '../components/Button'

const Header = () => {

    const renderValue = (value, type) => typeof Object.values(value)[0] === type 

    return (
        <header className='flex items-center'>
            <LogoIcon />
            <nav className='flex space-x-6 ml-8'>
                {navMenu.map((block, index) =>
                    <NavItem
                        key={index}
                        text={renderValue(block, "string") ? Object.values(block) : Object.keys(block)}>
                        {renderValue(block, "object") && <NavMenu items={Object.values(block)[0]}/> }
                    </NavItem>
                )}
            </nav>
            <div className="ml-auto flex apsce-x-5">
                <Button >Log in</Button>
                <Button hasBorder={true}>Register</Button>
            </div>
        </header>
    )
}

export default Header