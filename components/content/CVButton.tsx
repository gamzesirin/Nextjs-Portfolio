import { CheckIcon, ChevronRightIcon, DownloadIcon } from 'lucide-react'

import { AnimatedSubscribeButton } from '@/components/magicui/animated-subscribe-button'

export function CVButton() {
	return (
		<AnimatedSubscribeButton
			buttonColor="#000000"
			buttonTextColor="#ffffff"
			subscribeStatus={false}
			initialText={
				<a className="group inline-flex items-center" download="cv.pdf" href="/cv.pdf">
					CV İndir <DownloadIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
				</a>
			}
			changeText={
				<span className="group inline-flex items-center">
					<CheckIcon className="mr-2 h-4 w-4" />
					CV İndirildi{' '}
				</span>
			}
		/>
	)
}
