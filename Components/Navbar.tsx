import Link from 'next/link'

import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
    <div className='logo'>
       <Image src='/logo.png' width={128} height={77}/>
    </div>
    <Link href="/">Home</Link>
    <Link href="/about">Home</Link>
    <Link href="/ninjas">Home</Link>
   

    </nav>

  )
}

export default Navbar