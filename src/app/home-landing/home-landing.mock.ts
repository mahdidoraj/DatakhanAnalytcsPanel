// src/app/home/home.mocks.ts

import { Dataset, Feature, Logo, Testimonial } from './home-landing.component';

export const FEATURES: Feature[] = [
	{ icon: 'fa-solid fa-bolt', title: 'سرعت بی‌رقیب', desc: 'پایپ‌لاین‌های واکشی و کش برای تحلیل لحظه‌ای.', kpi: '200ms' },
	{ icon: 'fa-solid fa-shield-heart', title: 'حریم خصوصی', desc: 'پروتکل‌های ناشناس‌سازی و کنترل دسترسی ریزدانه.' },
	{ icon: 'fa-solid fa-diagram-project', title: 'مدیریت پروژه', desc: 'گردش‌کار، برچسب و گزارش‌های زمان‌بندی‌شده.' },
	{ icon: 'fa-solid fa-wand-magic-sparkles', title: 'تحلیل هوش مصنوعی', desc: 'خلاصه‌سازی، احساس‌سنجی و کشف ترند.' },
	{ icon: 'fa-solid fa-layer-group', title: 'دیتاست‌های آماده', desc: 'صدها دیتاست تمیز و استاندارد شده.' },
	{ icon: 'fa-solid fa-lock', title: 'امنیت سازمانی', desc: 'SSO/2FA و ممیزی جامع رخدادها.' },
];

export const DATASETS: Dataset[] = [
	{
		id: 'ds-001',
		title: 'توئیتر فارسی - سیاست',
		category: 'سیاست',
		description: 'استریم گفتگوهای سیاسی فارسی با برچسب‌گذاری موضع.',
		tags: ['X', 'NLP', 'EntityLinking'],
		rating: 4.7,
		records: 12034567,
		updatedAt: '2025-10-14',
		price: 'premium',
		thumbnail: 'assets/images/datasets/x-politics.jpg',
		geo: [35.6892, 51.3890],
	},
	{
		id: 'ds-002',
		title: 'اینستاگرام - اقتصادی',
		category: 'اقتصاد',
		description: 'پست‌ها و کامنت‌های اقتصادی با تحلیل احساس.',
		tags: ['Instagram', 'Sentiment', 'ETL'],
		rating: 4.5,
		records: 5320034,
		updatedAt: '2025-09-21',
		price: 'trial',
		thumbnail: 'assets/images/datasets/ig-economy.jpg',
		geo: [29.5918, 52.5837],
	},
	{
		id: 'ds-003',
		title: 'فیسبوک - جامعه',
		category: 'جامعه',
		description: 'شبکه‌های محلی و گروه‌های شهری.',
		tags: ['Facebook', 'Communities'],
		rating: 4.2,
		records: 2030405,
		updatedAt: '2025-08-02',
		price: 'free',
		thumbnail: 'assets/images/datasets/fb-community.jpg',
		geo: [36.2605, 59.6168],
	},
	{
		id: 'ds-004',
		title: 'اخبار آنلاین - رسانه',
		category: 'رسانه',
		description: 'خزش وب‌سایت‌های خبری فارسی به همراه متادیتا.',
		tags: ['Crawler', 'NER', 'Summarization'],
		rating: 4.8,
		records: 120300,
		updatedAt: '2025-10-28',
		price: 'premium',
		thumbnail: 'assets/images/datasets/news.jpg',
		geo: [38.0742, 46.2960],
	},
	{
		id: 'ds-005',
		title: 'آپارات - سرگرمی',
		category: 'سرگرمی',
		description: 'ویدیوهای ترند با متریک‌های تعامل.',
		tags: ['Video', 'Engagement'],
		rating: 4.1,
		records: 998833,
		updatedAt: '2025-09-30',
		price: 'trial',
		thumbnail: 'assets/images/datasets/aparat.jpg',
		geo: [35.7006, 51.4011],
	},
];

export const TESTIMONIALS: Testimonial[] = [
	{
		id: 't1',
		name: 'سهیلا امیری',
		role: 'مدیر تحلیل داده، آوات',
		avatar: '/assets/girl.webp',
		rating: 5,
		quote: 'دیتاخانه سرعت گزارش‌گیری ما را ۱۰ برابر کرد. کیفیت بصری و خروجی‌ها عالی است.',
		companyLogo: '/assets/logo.svg',
	},
	{
		id: 't2',
		name: 'مانی رستگار',
		role: 'Lead Data Scientist، فناپ',
		avatar: '/assets/boy.webp',
		rating: 5,
		quote: 'یکپارچگی با APIها و دیتاست‌های آماده بی‌نقص بود. تیم ما عاشق UX شد.',
		companyLogo: '/assets/logo.svg',
	},
	{
		id: 't3',
		name: 'هدی فلاح',
		role: 'تحلیل‌گر شبکه‌های اجتماعی، شاپرک',
		avatar: '/assets/girl.webp',
		rating: 4,
		quote: 'پوشش شبکه‌ها و داشبوردهای آماده زمان استقرار را بسیار کاهش داد.',
		companyLogo: '/assets/logo.svg',
	},
];

export const LOGOS: Logo[] = [
	{ id: 'l1', name: 'Avat', src: 'assets/images/logos/avat.svg' },
	{ id: 'l2', name: 'Fanap', src: 'assets/images/logos/fanap.svg' },
	{ id: 'l3', name: 'Shaparak', src: 'assets/images/logos/shaparak.svg' },
	{ id: 'l4', name: 'ICT', src: 'assets/images/logos/ict.svg' },
	{ id: 'l5', name: 'Snapp', src: 'assets/images/logos/snapp.svg' },
	{ id: 'l6', name: 'Digikala', src: 'assets/images/logos/digikala.svg' },
];
