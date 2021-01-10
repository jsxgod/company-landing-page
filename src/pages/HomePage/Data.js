let isDarkMode = window.localStorage.getItem('theme') === 'light' ? false : true;

let oppositeTheme = isDarkMode ? true : true;
let sameTheme = isDarkMode ? true : false;

export const infoSectionDataOne = {
    primary: sameTheme,
    darkMode: sameTheme,
    imgStart: false, 
    lightTopLine: sameTheme,
    topLine: 'Marketing Agency',
    lightText: sameTheme,
    headline: 'Lead Generation Specialist for Online Businesses',
    lightTextDesc: sameTheme,
    description: 'We help business owners increase their revenue. Our team of unique specialists can help you achieve your business goals.',
    buttonLabel: 'Get Started',
    img: require('../../assets/images/setup-analytics.svg').default,
    alt: 'Image',
    start: '',
}

export const infoSectionDataTwo = {
    primary: oppositeTheme,
    darkMode: oppositeTheme,
    imgStart: true, 
    lightTopLine: oppositeTheme,
    topLine: 'Marketing Agency',
    lightText: oppositeTheme,
    headline: 'Reach heights never possible before',
    lightTextDesc: oppositeTheme,
    description: 'Let\'s make your company grow. With us your company\'s value will rise to the highest levels.',
    buttonLabel: 'Get Started',
    img: require('../../assets/images/buildings.jpg').default,
    alt: 'Image',
    start: '',
}

export const infoSectionDataThree = {
    primary: sameTheme,
    darkMode: sameTheme,
    imgStart: false, 
    lightTopLine: sameTheme,
    topLine: 'Marketing Agency',
    lightText: sameTheme,
    headline: 'Work with the best clients',
    lightTextDesc: sameTheme,
    description: 'Let us find only the best clients for your business. With us your clients will always be satisfied - we carefully chose them with your company\'s product in mind.',
    buttonLabel: 'Get Started',
    img: require('../../assets/images/agreement.svg').default,
    alt: 'Image',
    start: '',
}