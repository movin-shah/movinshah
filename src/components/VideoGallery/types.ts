export interface Creator {
  videos: string[];
  socialLink: string;
  platform: 'youtube' | 'instagram';
}

export interface Creators {
  [key: string]: Creator;
}