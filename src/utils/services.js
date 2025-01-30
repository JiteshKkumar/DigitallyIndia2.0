// src/utils/services.js

import SeoImage from '../assets/services/seo.jpg';
import PpcImage from '../assets/services/ppc.jpg';
import SocialMedia from '../assets/services/socialmedia.jpg';
import WebsiteDevelopment from '../assets/services/websitedevlopment.jpg';
// import HubSpot from '../assets/services/hubspot.png';
import Discovery from '../assets/services/discovery.jpg';

export const servicesData = [
    {
        title: 'SEO Optimization',
        description: 'Improve your website’s visibility on search engines with our SEO services.',
        image: SeoImage,
        backgroundColor: 'bg-[#F3F3F3]',
        foregroundColor: 'bg-primary',
        textColor: 'text-black',
    },
    {
        title: 'PPC Advertising',
        description: 'Boost your online presence with targeted PPC advertising campaigns.',
        image: PpcImage,
        backgroundColor: 'bg-primary',
        foregroundColor: 'bg-white',
        textColor: 'text-blue-900'
    },
    {
        title: 'Social Media Marketing',
        description: 'Engage your audience and grow your brand on social media platforms.',
        image: SocialMedia,
        backgroundColor: 'bg-green-100',
        foregroundColor: 'bg-green-500',
        textColor: 'text-green-900'
    },
    {
        title: 'Website Development',
        description: 'Create compelling content that drives engagement and conversions.',
        image: WebsiteDevelopment,
        backgroundColor: 'bg-red-100',
        foregroundColor: 'bg-red-500',
        textColor: 'text-red-900'
    },
    // {
    //     title: 'HubSpot',
    //     description: 'Reach your audience directly with targeted email campaigns and newsletters.',
    //     image: HubSpot,
    //     backgroundColor: 'bg-purple-100',
    //     foregroundColor: 'bg-purple-500',
    //     textColor: 'text-purple-900'
    // },
    {
        title: 'Discovery',
        description: 'Track and analyze your website’s performance to make data-driven decisions.',
        image: Discovery,
        backgroundColor: 'bg-gray-100',
        foregroundColor: 'bg-primary',
        textColor: 'text-gray-900'
    }
];
