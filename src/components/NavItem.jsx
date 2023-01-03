import React from 'react'
import { ReactComponent as ArrowDownIcon } from '../images/icon-arrow-down.svg';
import { ReactComponent as ArrowUpIcon } from '../images/icon-arrow-up.svg';

const NavItem = ({ text = '', children }) => {
    const [selected, setSelected] = React.useState('')

    return (
        <div className='relative'>
            <div className="flex space-x-2 cursor-pointer items-center">
                <span
                    className='2text-medium-gray hover:text-almost-black'
                    onClick={() => children && setSelected(text !== selected ? text : '')}
                >{text}</span>
                {children && selected === text  && <ArrowUpIcon />}
                {children && selected !== text && <ArrowDownIcon />}
            </div>
            {selected && children}
        </div>
    )
}

export default NavItem