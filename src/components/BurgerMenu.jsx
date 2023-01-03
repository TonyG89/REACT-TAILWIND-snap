import React from 'react'
import NavItem from './NavItem';
import MenuItem from './NavMenu';
import { navMenu } from '../const';
// import NavItem from './NavItem';


const BurgerMenu = ({ isOpened = false }) => {
    return (
        <div className={`${isOpened ? "flex" : "hidden"} justify-center items-end`}>
            <div className="w-screen absolute bg-almost-black opacity-50 left-0 top-0 h-full " />
            <div className='absolute right-0 top-0 pt-[50px] pl-10 bg-white opacity-100 w-1/2 h-full min-h-[150vh]'>
                <nav className='my-20 mx-5 space-y-5 text-lg w-full'>
                    {navMenu.map((block, index) =>
                        <NavItem
                            key={index}
                            text={typeof Object.values(block)[0] === "string" ? Object.values(block) : Object.keys(block)}>
                            <div className="flex flex-col space-y-5 p-2 ">
                                {/* СДЕЛАТЬ ХУЙНЮ!!!!!!  */}
                            {typeof Object.values(block)[0] === "object" && <MenuItem items={Object.values(block)[0]} />}
                            </div>
                        </NavItem>
                    )}
                </nav>
            </div>
        </div>
    )
}

export default BurgerMenu