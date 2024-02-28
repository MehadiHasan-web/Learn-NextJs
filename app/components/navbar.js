
import Link from 'next/link'
import React from 'react'

export default function navbar() {
  return (
    <div>
        <div className="navbar bg-base-100 border-b-2 shadow-sm">
        <div className="flex-1">
            <Link href={'/'} className="btn btn-ghost text-xl">Next JS</Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li><Link href="/">Home</Link></li>
            <li><a>Blog</a></li>
            <li>
                <details>
                <summary>
                    Parent
                </summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                    <li><a>Link 1</a></li>
                    <li><a>Link 2</a></li>
                </ul>
                </details>
            </li>
            </ul>
        </div>
        </div>
    </div>
  )
}
