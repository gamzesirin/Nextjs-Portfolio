import Education from './Education'
import Image from 'next/image'
import { Skils } from './Skils'
import me from '@/public/images/me2.jpeg'

export async function AboutBanner() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-between h-full w-full" id="about-me">
			<Image src={me} alt="Gamze Şirin" width={300} height={300} className="rounded-xl md:hidden" />
			<div className="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden pt-8 text-justify">
				<p className="text-3xl md:text-4xl font-semibold text-start">Merhaba! Ben Gamze Şirin</p>
				<h2 className="mt-2 text-base md:text-lg">
					Web teknolojilerinde kariyerini ilerletmeye adayan tutkulu bir{' '}
					<span className="text-lg font-semibold text-[#5046e6]">
						Yazılım Mühendisi / FullStack Web Geliştiricisiyim.
					</span>
				</h2>

				<div className="mt-4">
					<p>
						-&gt; Web geliştirme yolculuğuma ilk öğrenim yılımda temel web teknolojileri olan
						<span className=" text-[#5046e6]"> HTML</span>,<span className=" text-[#5046e6]"> CSS</span> ve
						<span className="text-[#5046e6]"> JavaScript</span>, öğrenerek başladım ve bu alanlara olan ilgimi
						keşfettim. <br />
						-&gt; İkinci öğretim yılımda
						<span className=" text-[#5046e6]"> NodeJs</span>,<span className=" text-[#5046e6]"> ExpressJs</span>,
						<span className=" text-[#5046e6]"> MongoDB</span> ve
						<span className=" text-[#5046e6]"> ReactJs</span>,<span className=" text-[#5046e6]"> NextJs</span> gibi
						güncel web teknolojilerinde uzmanlaşarak, kapsamlı ve etkin web çözümleri geliştirmeyi hedefledim.
						<br />
					</p>
				</div>
				<Education />
			</div>
			<Image src={me} alt="Gamze Şirin" width={300} height={300} className="rounded-xl hidden md:block " />
		</div>
	)
}
