import React from 'react'
import MenuItem from './menu-item'

const NavMenu = ({ items = [] }) => {
    return (
        <div className='flex min-h-[100px] flex-col px-4 py-2 bg-almost-white drop-shadow rounded-lg absolute top--10 md:top-10 md:right-0 w-36 space-y-2'>
            {items.map(({ text, icon }) => <MenuItem key={text} text={text} icon={icon} />)}
        </div>
    )
}

export default NavMenu