import IconCloud from '@/components/magicui/icon-cloud'

const slugs = [
	'typescript',
	'javascript',
	'dart',
	'java',
	'react',
	'flutter',
	'android',
	'html5',
	'css3',
	'nodedotjs',
	'express',
	'nextdotjs',
	'prisma',
	'amazonaws',
	'postgresql',
	'firebase',
	'nginx',
	'vercel',
	'testinglibrary',
	'jest',
	'cypress',
	'docker',
	'git',
	'jira',
	'github',
	'gitlab',
	'visualstudiocode',
	'androidstudio',
	'sonarqube',
	'figma'
]

export function Skils() {
	return (
		<div className="relative flex h-full w-full max-w-[24rem] items-center justify-center overflow-hidden rounded-lg  bg-background px-20 pb-20 pt-2 ">
			<IconCloud iconSlugs={slugs} />
		</div>
	)
}
