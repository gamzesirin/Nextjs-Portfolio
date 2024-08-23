import React from 'react'
import SparklesText from '../magicui/sparkles-text'

const Education = () => {
	return (
		<div className="mt-5">
			<SparklesText text="Eğitim" />
			<div className="flex flex-col space-y-3 mt-5">
				<div className="flex flex-col space-y-1">
					<div className="text-lg font-bold">Mehmet Akif Ersoy Üniversitesi</div>
					<div className="text-md">Yazılım Mühendisliği</div>
					<div className="text-md">2022 - </div>
				</div>
			</div>
		</div>
	)
}

export default Education
