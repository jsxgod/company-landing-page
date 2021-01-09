let isDarkMode = window.localStorage.getItem('theme') === 'light' ? false : true;

export const infoSectionDataOne = {
    primary: isDarkMode,
    darkMode: isDarkMode,
    imgStart: false, 
    lightTopLine: isDarkMode,
    topLine: 'Marketing Agency',
    lightText: isDarkMode,
    headline: 'Lead Generation Specialist for Online Businesses',
    lightTextDesc: isDarkMode,
    description: 'We help business owners increase their revenue. Our team of unique specialists can help you achieve your business goals.',
    buttonLabel: 'Get Started',
    img: require('../../assets/images/setup-analytics.svg').default,
    alt: 'Image',
    start: '',
}

export const infoSectionDataTwo = {
    primary: !isDarkMode,
    darkMode: !isDarkMode,
    imgStart: true, 
    lightTopLine: !isDarkMode,
    topLine: 'Marketing Agency',
    lightText: !isDarkMode,
    headline: 'Reach heights never possible before',
    lightTextDesc: !isDarkMode,
    description: 'Let\'s make your company grow. With us your company\'s value will rise to the highest levels.',
    buttonLabel: 'Get Started',
    img: require('../../assets/images/buildings.jpg').default,
    alt: 'Image',
    start: '',
}

export const infoSectionDataThree = {
    primary: isDarkMode,
    darkMode: isDarkMode,
    imgStart: false, 
    lightTopLine: isDarkMode,
    topLine: 'Marketing Agency',
    lightText: isDarkMode,
    headline: 'Work with the best clients',
    lightTextDesc: isDarkMode,
    description: 'Let us find only the best clients for your business. With us your clients will always be satisfied because we tailored them with your company\'s product in mind.',
    buttonLabel: 'Get Started',
    img: require('../../assets/images/agreement.svg').default,
    alt: 'Image',
    start: '',
}