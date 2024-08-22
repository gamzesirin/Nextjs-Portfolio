'use client'

import { Menu, X } from 'lucide-react'
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import React, { useState } from 'react'

import { CVButton } from './CVButton'
import Link from 'next/link'
import { MeButton } from './MeButton'

export function Header() {
	const [menuOpen, setMenuOpen] = useState(false)

	const toggleMenu = () => {
		setMenuOpen(!menuOpen)
	}

	return (
		<div className="flex flex-wrap items-center justify-between mt-3">
			<div className="flex items-center justify-between w-full md:w-auto">
				<MeButton />
				<div className="block md:hidden">
					<button onClick={toggleMenu} className="text-2xl">
						{menuOpen ? <X /> : <Menu />}
					</button>
				</div>
			</div>
			<NavigationMenu
				className={`${
					menuOpen ? 'flex' : 'hidden'
				} flex-col w-full max-w-96 items-center fixed inset-0 bg-white z-50 p-4 md:static md:flex md:flex-row md:p-0 `}
			>
				<div className="flex items-center justify-between w-full px-3 md:hidden">
					<MeButton />
					<button onClick={toggleMenu} className="text-2xl">
						<X />
					</button>
				</div>
				<div className="flex flex-col items-center justify-center flex-grow">
					<NavigationMenuList className="flex flex-col items-center md:me-48 space-y-4 md:flex-row md:space-y-0 md:mt-0">
						<NavigationMenuItem>
							<Link href="#about-me" legacyBehavior passHref>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>Hakkımda</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href="#contact" legacyBehavior passHref>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>İletişim</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href="#experiences" legacyBehavior passHref>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>Deneyimler</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href="#projects" legacyBehavior passHref>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>Projeler</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>

						<CVButton />
					</NavigationMenuList>
				</div>
			</NavigationMenu>
		</div>
	)
}
