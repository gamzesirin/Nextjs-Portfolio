import React from 'react'

const timelineData = [
	{
		date: 'Nisan 2024 - ...',
		title: 'SINGULARITY SOFTWARE TECHNOLOGIES',
		subtitle: 'Web Developer Intern | Remote',
		description:
			'Web uygulamasındaki tasarımsal eksiklikleri tespit edip düzelttim. Header, footer, cards, button, tabbar, slider gibi unsurları tasarlayıp mobil uyumlu olacak şekilde kodladım.Gereksiz npm paketlerini kaldırdım ve güncellemeleri kontrol ederek yeni sürümlere geçiş yaptım.Kodları inceleyip gereken componentleri oluşturarak daha modüler bir yapı oluşturdum.'
	},
	{
		date: 'Ocak 2024 - Haziran 2024',
		title: 'BİONLUK.COM',
		subtitle: 'Freelancer',
		description:
			'ReactJS, GraphQL ve MongoDB teknolojilerini kullanarak fullstack proje geliştirdim. Backend tarafını TypeScript ile yazdım. Kullanıcı girişi, kaydı, çıkış yapma, CRUD, arama ve filtreleme özelliklerini kullandım. AdobeXD ve Figma tasarımlarını Tailwindcss, Bootstrap kullanarak responsive uyumlu olacak şekilde kodladım.'
	}
]

const Timeline = () => {
	return (
		<div className="relative flex flex-col items-start p-4 md:px-12">
			<div className="absolute md:left-12 left-4 w-1 bg-gray-300 h-[52rem] md:h-96"></div>
			{timelineData.map((item, index) => (
				<div key={index} className="relative mb-8 pl-8">
					<div className="absolute left-0 top-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-2 border-purple-500 rounded-full flex items-center justify-center">
						<div className={`w-3 h-3 rounded-full ${index % 2 === 0 ? 'bg-purple-500' : 'bg-purple-500'}`}></div>
					</div>
					<div className="md:ml-12">
						<div className="text-lg font-bold">{item.date}</div>
						<div className="mt-2">
							<h3 className="text-xl font-semibold">{item.title}</h3>
							<h4 className="text-lg font-semibold text-gray-500">{item.subtitle}</h4>
							<p className="mt-2 text-gray-600 text-justify">{item.description}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default Timeline
