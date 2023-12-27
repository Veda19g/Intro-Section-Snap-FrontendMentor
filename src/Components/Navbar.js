import React, { useState } from 'react';
import logo from './../images/logo.svg';
import up from './../images/icon-arrow-up.svg';
import down from './../images/icon-arrow-down.svg';
import calender from './../images/icon-calendar.svg';
import menu from './../images/icon-menu.svg';
import closeMenu from './../images/icon-close-menu.svg';
import planning from './../images/icon-planning.svg';
import remainders from './../images/icon-reminders.svg';
import todo from './../images/icon-todo.svg';

const MenuItem = ({ title, isOpen, onClick, children }) => (
  <div className='flex items-center gap-1 cursor-pointer hover:text-black' onClick={onClick}>
    {title}
    <img src={isOpen ? up : down} className='cursor-pointer' />
    {isOpen && <div className='absolute top-6 right-2 px-6 rounded-lg bg-opacity-70 bg-white z-50'>{children}</div>}
  </div>
);

const MobileMenu = ({ isMenuOpen, handleMenu, children }) => (
  <div className={isMenuOpen ? 'md:hidden' : 'hidden'}>
    <div onClick={handleMenu} className={isMenuOpen ? 'hidden' : ''}>
      <img src={menu} />
    </div>
    {isMenuOpen && (
      <nav className='fixed overflow-y-auto p-5 top-0 bottom-0 right-0 w-2/3  bg-white text-gray-400 text-xl  bg-opacity-100 z-50 '>
        <div className='flex justify-end lg:hidden'>
          <img onClick={handleMenu} src={closeMenu} />
        </div>
        <div className='mt-5 flex flex-col gap-5'>{children}</div>
      </nav>
    )}
  </div>
);

const Navbar = () => {
  const [isMenuOpen, setMenu] = useState(false);
  const [isFeatureOpen, setFeature] = useState(false);
  const [isCompanyOpen, setCompany] = useState(false);

  const handleMenu = () => setMenu((prev) => !prev);
  const handleFeature = () => setFeature((prev) => !prev);
  const handleCompany = () => setCompany((prev) => !prev);

  return (
    <nav className='p-4 text-gray-400'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='md:flex md:justify-between'>
          <img src={logo} />
          <div className='hidden md:flex md:mx-5 md:items-center md:gap-5'>
            <MenuItem title='Features' isOpen={isFeatureOpen} onClick={handleFeature}>
              <div className='flex flex-col gap-3 mx-5'>
                <div className='flex gap-5 items-center'>
                  <img src={todo} />
                  Todo List
                </div>
                <div className='flex gap-5 items-center'>
                  <img src={calender} />
                  Calendar
                </div>
                <div className='flex gap-5 items-center'>
                  <img src={remainders} />
                  Remainders
                </div>
                <div className='flex gap-5 items-center'>
                  <img src={planning} />
                  Planning
                </div>
              </div>
            </MenuItem>

            <MenuItem title='Company' isOpen={isCompanyOpen} onClick={handleCompany}>
              <div className='flex flex-col gap-3 mx-5'>
                <div>History</div>
                <div className='flex cursor-pointer hover:text-black'>
                  <div>Our</div> <div>Team</div>{' '}
                </div>
                <div>Blog</div>
              </div>
            </MenuItem>

            <div className='cursor-pointer hover:text-black'>Careers</div>
            <div className='mx-3 cursor-pointer hover:text-black'>About</div>
          </div>
        </div>

        <div className='hidden md:flex md:justify-around md:gap-5'>
          <button className='cursor-pointer hover:text-black'>Login</button>
          <button className='cursor-pointer hover:text-black border-2 border-black opacity-75 px-6 py-2 rounded-2xl'>
            Register
          </button>
        </div>

        {/* Mobile Menu for smaller screens */}
        <MobileMenu isMenuOpen={isMenuOpen} handleMenu={handleMenu}>
          <MenuItem title='Features' isOpen={isFeatureOpen} onClick={handleFeature}>
            <div className='flex flex-col gap-3 mx-5'>
              <div className='flex gap-5 items-center'>
                <img src={todo} />
                Todo List
              </div>
              <div className='flex gap-5 items-center'>
                <img src={calender} />
                Calendar
              </div>
              <div className='flex gap-5 items-center'>
                <img src={remainders} />
                Remainders
              </div>
              <div className='flex gap-5 items-center'>
                <img src={planning} />
                Planning
              </div>
            </div>
          </MenuItem>

          <MenuItem title='Company' isOpen={isCompanyOpen} onClick={handleCompany}>
            <div className='flex flex-col gap-3 mx-5'>
              <div>History</div>
              <div>Our Team</div>
              <div>Blog</div>
            </div>
          </MenuItem>

          <div>Careers</div>
          <div>About</div>

          <div className='mt-10 flex flex-col gap-5 '>
            <button className='text-gray-400 text-xl'>Login</button>
            <button className='border-2 border-slate-950 bg-white rounded-xl shadow text-gray-400 hover:opacity-75 transition-all p-3 px-6 cursor-pointer'>
              Register
            </button>
          </div>
        </MobileMenu>
      </div>
    </nav>
  );
};

export default Navbar;
