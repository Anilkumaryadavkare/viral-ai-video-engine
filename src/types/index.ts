export interface ViralReel {
  id: string;
  username: string;
  caption: string;
  hashtags: string[];
  views: number;
  likes: number;
  shares: number;
  saves: number;
  uploadDate: string;
  audioId: string;
  category: string;
  viralScore: number;
  thumbnailUrl: string;
  videoUrl: string;
}

export interface GeneratedVideo {
  id: string;
  sourceReelId: string;
  videoUrl: string;
  caption: string;
  hashtags: string[];
  qualityScore: number;
  status: 'generated' | 'approved' | 'rejected' | 'published';
  createdAt: string;
  scheduledAt?: string;
  publishedAt?: string;
}

export interface EngagementData {
  videoId: string;
  views: number;
  likes: number;
  comments: number;
  shares: number;
  saves: number;
  recordedAt: string;
}

export interface ContentPattern {
  id: string;
  type: string;
  description: string;
  successRate: number;
  avgViews: number;
  avgEngagement: number;
  examples: string[];
}

export interface ScheduledPost {
  id: string;
  videoId: string;
  scheduledTime: string;
  status: 'pending' | 'published' | 'failed';
  caption: string;
  hashtags: string[];
}