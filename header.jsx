import React from 'react';

import logo from './img/logo.png';

 function Header() {
    return (
        <div className=''>
            <div className='flex justify-between h-20 place-items-center'>
                <img className='w-15 h-15 ml-10 ' src={logo} alt='restaurant logo' />
                <div className='content-center place-items-center'>
                    <ul className='inline '>
                        <li className='float-left text-amber-500 font-bold'>Home</li>
                        <li className='float-left text-amber-500 ml-10 font-bold'>Menu</li>
                        <li className='float-left text-amber-500 ml-10 font-bold mr-10'>Contact us</li>
                    </ul>
                </div>
            
            </div>
        </div>
        
    )
}

export default Header;
