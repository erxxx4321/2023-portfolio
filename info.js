let info = {
	name: 'Evonne Chin',
	logo_name: 'evonne',
	flat_picture: require('./src/assets/potrait.png'),
	config: {
		use_cookies: true,
		navbar: {
			blur: false,
		},
	},
	description:
		'Hi, I am Evonne, a software engineer with front-end and back-end development experience. Familiar with ASP.NET, C#, jQuery, HTML/CSS...etc. Passionate about well-structured program, good development and deployment process. Continuous learning is my goal for career, so I am very willing to accept new challenges, like practicing other programming languages or participating in innovative projects.',
	links: {
		linkedin: 'https://www.linkedin.com/in/evonne-chinn/',
		github: 'https://github.com/erxxx4321',
		resume: 'https://github.com/erxxx4321/2023-portfolio/blob/master/src/assets/pdfs/2023 resume.pdf',
	},
	education: [
		{
			name: 'National Chi Nan University',
			place: 'Nantou, Taiwan',
			date: 'Sep, 2012 - June, 2016',
			degree: 'Foreign Languages and Literatures',
			description: '',
			skills: ['Communication', 'Cultural', 'Language', 'Critical Thinking', 'Interpersonal'],
		},
	],
	experience: [
		{
			name: 'Longchen Paper',
			place: 'Taipei, Taiwan',
			date: 'Sep, 2021 - Present',
			position: 'Software Engineer',
			description: '',
			skills: ['C#', 'ASP.NET', 'SQL', 'Python', 'jQuery', 'javascript', 'HTML/CSS', 'Bootstrap', 'DevExtreme', 'Figma'],
		},
		{
			name: 'Shinwa',
			place: 'Fukuoka, Japan',
			date: 'Mar, 2019 - Oct, 2020',
			position: 'Administrative Assistant',
			description: '',
			skills: ['Excel', 'VBA'],
		},
	],
	skills: [
		{
			title: 'Frontend',
			info: ['HTML', 'CSS', 'Javascript', 'jQuery', 'Vue.js'],
			icon: 'fa fa-code',
		},
		{
			title: 'Backend',
			info: ['C#', 'ASP.NET', 'MVC', 'Razor', 'EF core'],
			icon: 'fa fa-cubes',
		},
		{
			title: 'Databases',
			info: ['MSSQL', 'MySQL'],
			icon: 'fa fa-database',
		},
		{
			title: 'Operating systems & tools',
			info: ['MacOS', 'Windows'],
			icon: 'fas fa-tools',
		},
		{
			title: 'Languages',
			info: ['English', 'Chinese', 'Japanese', 'Thai'],
			icon: 'fa fa-language',
		},
		{
			title: 'Others',
			info: ['Excel', 'Google Sheet', 'Figma'],
			icon: 'fa fa-pencil-square-o',
		},
	],
	portfolio: [
		{
			name: 'Covid-19 PPT Automation',
			pictures: [
				{
					img: require('./src/assets/portfolio/covid-01.png'),
				},
			],
			technologies: ['Python', 'selenium', 'pandas', 'python_pptx', 'requests'],
			category: 'AI',
			date: 'Feb, 2022 - April, 2022',
			github: 'https://github.com/erxxx4321/covid_scrape',
			visit: 'https://github.com/erxxx4321/covid_scrape',
			description:
				'Automating to collect and present real-time data related to the covid-19 which can be executed on a schedule.',
		},
		{
			name: 'Vue.js Music Player',
			pictures: [
				{
					img: require('./src/assets/portfolio/player-01.png'),
				},
			],
			technologies: ['Vue.js', 'jQuery', 'HTML', 'CSS'],
			category: 'Application',
			date: 'Feb, 2023 - Feb, 2023',
			github: 'https://github.com/erxxx4321/vue-player',
			visit: 'https://erxxx4321.github.io/vue-player/',
			description: 'Music player application built with vuejs3.',
		},
		{
			name: 'JS OCR Application',
			pictures: [
				{
					img: require('./src/assets/portfolio/ocr-01.png'),
				},
			],
			technologies: ['HTML', 'CSS', 'Javascript'],
			category: 'AI',
			date: 'Feb, 2023 - Feb, 2023',
			github: 'https://github.com/erxxx4321/ocr-js',
			visit: 'https://erxxx4321.github.io/ocr-js/',
			description: 'OCR application built with tesseract.js and AdminLTE.',
		},
		{
			name: 'Daily',
			pictures: [
				{
					img: require('./src/assets/portfolio/daily-01.png'),
				},
			],
			technologies: ['HTML', 'CSS', 'Javascript', 'TypeScript', 'React'],
			category: 'Website',
			date: 'Aug, 2021 - Aug, 2021',
			github: 'https://github.com/erxxx4321/Daily',
			visit: 'https://daily-lifenews.netlify.app/',
			description:
				'Daily is a news website gathering daily information from New York Times API and mainly based on Food, Travel, Health, Insider Topics.',
		},
	],
	portfolio_video: [
		{
			name: '2023/01/19 TPE to BKK | GoPro HERO 11',
			iframe: 'https://www.youtube.com/embed/DK2s5qED248',
		},
		{
			name: '2023/01/20 Bangkok City Tour | GoPro HERO 11',
			iframe: 'https://www.youtube.com/embed/-pkuwDL4Gts',
		},
		{
			name: '2023/01/21 China Town +  ICONSIAM | GoPro HERO 11',
			iframe: 'https://www.youtube.com/embed/54FYW1xQdC8',
		},
		{
			name: '2023/01/22 Bangkok historical trip | GoPro HERO 11',
			iframe: 'https://www.youtube.com/embed/8DmhB462Drs',
		},
		{
			name: '2023/01/23 Pattaya Elephant Village | GoPro HERO 11',
			iframe: 'https://www.youtube.com/embed/OMGDttI7yY4',
		},
		{
			name: '2023/01/24 Koh Larn | GoPro HERO 11',
			iframe: 'https://www.youtube.com/embed/R1FogBCo1Rg',
		},
	],
};

export default info;
