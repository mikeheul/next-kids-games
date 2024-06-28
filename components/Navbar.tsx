import { MousePointer2Icon, MousePointerClickIcon, GrabIcon, KeyboardIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:h-[100px] px-6 py-10 bg-slate-900 text-center text-xl">
            <Link href="/click-game" className='flex gap-2'>
                <MousePointer2Icon className='text-green-500'/><span>Clic</span>
            </Link>
            <Link href="/double-click-game" className='flex gap-2'>
                <MousePointerClickIcon className='text-red-500'/><span>Double Clic</span>
            </Link>
            <Link href="/drag-drop-game" className='flex gap-2'>
                <GrabIcon className='text-yellow-500'/><span>Glisser-Déposer</span>
            </Link>
            <Link href="/keyboard-game" className='flex gap-2'>
                <KeyboardIcon className='text-purple-500'/><span>Clavier</span>
            </Link>
        </div>
    )
}

export default Navbar