import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between'>
      <div>Logo</div>
      <div>
        <Link href="/login" className='p-2'>Đăng nhập</Link>
      </div>
    </div>
  )
}

export default Header