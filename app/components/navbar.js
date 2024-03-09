'use client'

import Link from 'next/link'
import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import getAllPosts from '@/lib/getAllPosts'
  
export default async function navbar() {

    const posts = await getAllPosts();

  return (
    <div>
        <div className="navbar bg-base-100 border-b-2 shadow-sm flex items-center justify-center py-4">
        {/* <div className="flex-1">
            <Link href={'/'} className="btn btn-ghost text-xl">Next JS</Link>
        </div> */}
        <div className='flex justify-center'>
            <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                <NavigationMenuTrigger>Total Post</NavigationMenuTrigger>
                <NavigationMenuContent>
                    {/* <NavigationMenuLink>Link</NavigationMenuLink> */}
                    <div className='w-96 h-52 bg-slate-100 p-2 py-8 scroll-m-1'>
                       {posts.map((post, index) =>(
                            <Link href={`/post/${post.id}`} key={post.id}>
                                <h4 className="font-bold text-sm text-yellow-950 mb-2 hover:text-slate-400 hover:text-md hover:translate-x-2 hover:translate-y-1" ><span>{index+1+"=>"} </span> {post.title.charAt(0).toUpperCase() + post.title.slice(1)}</h4>  
                            </Link>
                        ))}
                    </div>
                </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                <NavigationMenuContent>
                    {/* <NavigationMenuLink>Link</NavigationMenuLink> */}
                    <div className='w-72 h-52 bg-slate-100'>
                       <h2>to the head master</h2> 
                    </div>
                </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
            </NavigationMenu>

        </div>
        </div>
    </div>
  )
}
