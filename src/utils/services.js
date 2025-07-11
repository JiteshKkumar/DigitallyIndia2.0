// src/utils/services.js

import SeoImage from '../assets/services/seo.jpg';
import PpcImage from '../assets/services/ppc.jpg';
import SocialMedia from '../assets/services/socialmedia.jpg';
import WebsiteDevelopment from '../assets/services/websitedevlopment.jpg';
import HubSpot from '../assets/services/Hubspot.png';
import GoogleListing from '../assets/services/GoogleListing.jpg';
import EmailMarketing from '../assets/services/emailmarketing.png'

export const servicesData = [
    {
        title1: '1',
        title: 'HubSpot',
        description: 'Transform your CRM into a revenue-generating engine. Our expertise spans across marketing automation, sales pipelines, and customer service tools, helping businesses achieve 2X growth in leads and sales. We dont just implement – we optimize for maximum ROI.',
        image: HubSpot,
        backgroundColor: 'bg-purple-100',
        foregroundColor: 'bg-purple-500',
        textColor: 'text-purple-900'
    },
    {
        title1: '2',
        title: 'Website Development',
        description: 'Develop engaging and user-friendly websites that align with your goals and communicate brand message effectively to maximize your online presence and drive conversions.',
        image: WebsiteDevelopment,
        backgroundColor: 'bg-red-100',
        foregroundColor: 'bg-red-500',
        textColor: 'text-red-900'
    },
    { 
        title1: '3',
        title: 'SEO Optimization',
        description: 'Get found. Get leads. Get results. Develop a custom strategy that aligns with your business goals, increasing your online visibility and driving targeted traffic to your website.',
        image: SeoImage,
        backgroundColor: 'bg-[#F3F3F3]',
        foregroundColor: 'bg-primary',
        textColor: 'text-black',
    },
    {
        title1: '4',
        title: 'PPC Advertising',
        description: 'Instant visibility. Targeted traffic. Measurable results. PPC advertising fuels your business growth by connecting you with ready-to-buy customers.',
        image: PpcImage,
        backgroundColor: 'bg-primary',
        foregroundColor: 'bg-white',
        textColor: 'text-blue-900'
    },
    {
        title1: '5',
        title: 'Google Listing',
        description: 'Get your business seen by local customers. Optimize your Google Business Profile to increase visibility in search results, attract more foot traffic to your door and boosting your local sales.',
        image: GoogleListing,
        backgroundColor: 'bg-gray-100',
        foregroundColor: 'bg-primary',
        textColor: 'text-gray-900'
    },
    {
        title1: '6',
        title: 'Email Marketing',
        description: 'Connect. Convert. Grow. Effective email marketing builds relationships with personalized messaging, increases conversions through targeted offers, and fuels business growth with automated follow-ups.',
        image: EmailMarketing,
        backgroundColor: 'bg-green-100',
        foregroundColor: 'bg-green-500',
        textColor: 'text-green-900'
    },
];
