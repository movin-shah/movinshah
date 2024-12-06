export interface Video {
  id: string;
  title: string;
  description: string;
  type: 'short' | 'video';
}

export interface Creator {
  name: string;
  socialUrl: string;
  platform: 'youtube' | 'instagram';
  videos: Video[];
}

export const featuredVideos: Video[] = [
  {
    id: 'QfPCRdk9ynw',
    title: 'Breaking News Short',
    description: 'Fast-paced news coverage in short format',
    type: 'short'
  },
  {
    id: 'z-LA1Qsz9Co',
    title: 'News Coverage',
    description: 'In-depth news analysis and editing',
    type: 'video'
  }
];

export const creators: Creator[] = [
  {
    name: 'Neon Man',
    socialUrl: 'https://youtube.com/@neonman_360?si=ad2hcFOlF2Bo6t0o',
    platform: 'youtube',
    videos: [
      { id: 'jPuwEiOeuIg', title: 'News Update', description: 'Breaking news coverage', type: 'video' },
      { id: 'z-LA1Qsz9Co', title: 'News Analysis', description: 'Detailed news breakdown', type: 'video' },
      { id: 'QfPCRdk9ynw', title: 'Quick Update', description: 'Fast news brief', type: 'short' },
      { id: '4BVDBqEdeoE', title: 'News Flash', description: 'Rapid news coverage', type: 'short' }
    ]
  },
  {
    name: 'Shilladitya',
    socialUrl: 'https://www.instagram.com/mr_shiladitya/profilecard/?igsh=MWpyYTZ1ZjQ4ZTFvYg==',
    platform: 'instagram',
    videos: [
      { id: 'DAVxCMLyDNQ', title: 'Instagram Reel', description: 'Engaging content', type: 'short' },
      { id: 'DCYixg0SI-3', title: 'Instagram Post', description: 'Featured content', type: 'video' },
      { id: 'DA6YwyTIpty', title: 'Instagram Story', description: 'Story highlight', type: 'short' }
    ]
  }
];