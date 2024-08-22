import { Button } from '@/components/ui/button'
import { CoolMode } from '@/components/magicui/cool-mode'
import Link from 'next/link'

export function MeButton() {
	return (
		<div className="relative justify-center">
			<CoolMode>
				<Button className="text-xl font-bold cursor-pointer">
					<Link href="/" legacyBehavior passHref>
						Gamze Şirin
					</Link>
				</Button>
			</CoolMode>
		</div>
	)
}
