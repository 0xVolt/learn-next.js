'use client';

// To enable links to other pages
import Link from 'next/link';
// To optimise images on this page
import Image from 'next/image';
import { useState, useEffect } from 'react';
// For easy login functionality
import { signIn, signOut, getProviders, useSession } from 'next-auth/react';

const Navbar = () => {
  const userLoggedIn = true;

  return (
    <nav className='w-full flex-between mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image 
          src='/assets/images/logo.svg'
          alt='Logo'
          width={30}
          height={30}
          className='object-contain'
        />

        {/* <p className='logo_text'>Test Website</p> */}
      </Link>

      {/* Desktop navigation now. */}
      <div className='sm:flex hidden'>
        {userLoggedIn ? (
          <div className='flex gap-3 md:gap-5'>
            <Link 
              href='/create-post' 
              className='black_btn'
            >
              Create Post
            </Link>

            <button type='button' onClick={ signOut } className='outline_btn'>
              Sign Out
            </button>
          </div>
        ) : (
          <>
          
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar