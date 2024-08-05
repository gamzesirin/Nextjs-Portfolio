'use client'

import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'

interface AnimatedSubscribeButtonProps {
	buttonColor: string
	buttonTextColor?: string
	subscribeStatus: boolean
	initialText: React.ReactElement | string
	changeText: React.ReactElement | string
}

export const AnimatedSubscribeButton: React.FC<AnimatedSubscribeButtonProps> = ({
	buttonColor,
	subscribeStatus,
	buttonTextColor,
	changeText,
	initialText
}) => {
	const [isSubscribed, setIsSubscribed] = useState<boolean>(subscribeStatus)

	return (
		<AnimatePresence mode="wait">
			{isSubscribed ? (
				<motion.button
					className="relative flex w-[150px] items-center justify-center overflow-hidden rounded-xl bg-white p-[5px] outline outline-1 outline-black"
					onClick={() => setIsSubscribed(false)}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<motion.span
						key="action"
						className="relative block h-full w-full font-semibold"
						initial={{ y: -50 }}
						animate={{ y: 0 }}
						style={{ color: buttonColor }}
					>
						{changeText}
					</motion.span>
				</motion.button>
			) : (
				<motion.button
					className="relative flex w-[150px] cursor-pointer items-center justify-center rounded-xl border-none p-[5px]"
					style={{ backgroundColor: buttonColor, color: buttonTextColor }}
					onClick={() => setIsSubscribed(true)}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<motion.span
						key="reaction"
						className="relative block font-semibold"
						initial={{ x: 0 }}
						exit={{ x: 50, transition: { duration: 0.1 } }}
					>
						{initialText}
					</motion.span>
				</motion.button>
			)}
		</AnimatePresence>
	)
}
