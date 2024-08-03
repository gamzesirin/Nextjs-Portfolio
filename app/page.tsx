import { AboutBanner } from '@/components/content/About'
import { Banner } from '@/components/content/Banner'
import Contact from '@/components/content/Contact'
import Experience from '@/components/content/Experience'
import { Header } from '@/components/content/Header'
import Projects from '@/components/content/Projects'

export default function Home() {
	return (
		<div className="container md:mx-auto md:px-40">
			<Header />
			<AboutBanner />
			<Contact />
			<Banner />
			<Experience />
			<Projects />
		</div>
	)
}
