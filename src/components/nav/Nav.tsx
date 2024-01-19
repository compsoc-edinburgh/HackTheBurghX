import React from 'react';
import './Nav.scss';
import Logo from './Logo';

type Link = {
    title: string,
    href: string
}

type NavProps = {
    page : any,
    setPage: any,
}

const Nav = ({page, setPage} : NavProps) => {
    const links: Link[] = [
        {title: 'Home', href: '/home'},
        {title: 'Past Projects', href: '/past-projects'},
        {title: 'Information', href: '/information'},
    ];

    return (
       <nav className={`w-full h-20 bg-[#FFF9DE] flex gap-4 items-center border-b shadow px-12`}>
        <div className='w-8'>
        <Logo />
        </div>
        {links.map((link, idx) => <a key={idx} onClick={() => setPage(link.title)} className={`text-xl font-medium cursor-pointer ${
            page == link.title ? 'border-b' : ''
        }`}>{link.title}</a>)}
       </nav>
    );
};

export default Nav;