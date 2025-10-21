export type WsSentiment = 'positive' | 'neutral' | 'negative';

export interface WsFilters {
	dateRange: { start: Date | string; end: Date | string };
	networks: string[];
	accounts: string[];
	languages: string[];
	sentiments: WsSentiment[];
	mediaTypes: ('text'|'image'|'video'|'link')[];
}

export interface WsPost {
	id: string;
	datetime: string;      // ISO
	network: 'X' | 'Instagram' | 'Facebook';
	account: string;
	text: string;
	mediaType: 'text'|'image'|'video'|'link';
	likes: number; comments: number; shares: number;
	sentiment: WsSentiment;
	keywords: string[];
	files?: string[];      // URLs
}

export interface WsModelInfo {
	confidence?: number;
	reasons?: string[];
}
