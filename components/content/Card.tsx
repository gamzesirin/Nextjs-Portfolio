import BlurFade from '@/components/magicui/blur-fade'

const images = [
	'/images/p1.png',
	'/images/p3.png',
	'/images/p7.png',
	'/images/p5.png',
	'/images/p8.png',
	'/images/p2.png'
]

export function Card() {
	return (
		<section id="photos" className="mt-5">
			<div className="columns-2 gap-4 sm:columns-3">
				{images.map((imageUrl, idx) => (
					<BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
						<img
							className="mb-4 size-full rounded-xl  border border-spacing-1 border-1 object-contain"
							src={imageUrl}
							alt={`image ${idx + 1}`}
						/>
					</BlurFade>
				))}
			</div>
		</section>
	)
}
