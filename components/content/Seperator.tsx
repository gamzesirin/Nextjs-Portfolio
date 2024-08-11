import { Separator } from '@/components/ui/separator'

export function SeparatorDemo() {
	return (
		<div className="flex flex-wrap gap-2 items-start px-2 md:px-0 justify-between mt-5 md:gap-1 text-md">
			<div className="flex flex-wrap md:flex-row items-start justify-start  gap-2 md:gap-3">
				<div>React.js</div>
				<Separator orientation="vertical" />
				<div>Next.js</div>
				<Separator orientation="vertical" />
				<div>Node.js</div>
				<Separator orientation="vertical" />
				<div>Express.js</div>
				<Separator orientation="vertical" />
				<div>JavaScript</div>
				<Separator orientation="vertical" />
				<div>TypeScript</div>
				<Separator orientation="vertical" />
				<div>MongoDB</div>
			</div>
			<div className="flex flex-wrap  md:flex-row items-start justify-start gap-2 md:gap-3">
				<div>SQL</div>
				<Separator orientation="vertical" />
				<div>Firebase</div>
				<Separator orientation="vertical" />
				<div>Python</div>
				<Separator orientation="vertical" />
				<div>Java</div>
				<Separator orientation="vertical" />
				<div>C#</div>
				<Separator orientation="vertical" />
				<div>HTML</div>
				<Separator orientation="vertical" />
				<div>CSS</div>
			</div>
		</div>
	)
}
