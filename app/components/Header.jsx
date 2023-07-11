import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <div>
      <nav className="bg-blue-500 py-4 px-6 flex items-center justify-between mb-5">
          <div className="flex items-center">
              <Link href="/">
                  <div className="text-lg text-white">
                      Clerk App
                  </div>
              </Link>
          </div>
          <div className="text-white">
              <Link href='sign-in' className="text-gray-700 hover:text-white mr-4">
                  Sign In
              </Link>
              <Link href='sign-up' className="text-gray-700 hover:text-white mr-4">
                  Sign Up
              </Link>
          </div>
      </nav>
    </div>
  )
}

export default Header
