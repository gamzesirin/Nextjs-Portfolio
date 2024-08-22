import { SeparatorDemo } from './Seperator'
import SparklesText from '@/components/magicui/sparkles-text'

export async function Banner() {
	return (
		<div className="mt-5">
			<SparklesText text="Kullandığım Teknolojiler" />
			<SeparatorDemo />
		</div>
	)
}
