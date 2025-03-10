export interface User {
  id: string;
  email: string;
  username: string;
  full_name: string;
  avatar_url: string;
  created_at: string;
}

export interface Post {
  id: string;
  user_id: string;
  content: string;
  media_url?: string;
  media_type?: 'image' | 'video' | 'audio';
  likes_count: number;
  created_at: string;
  user: User;
}

export interface Story {
  id: string;
  user_id: string;
  media_url: string;
  media_type: 'image' | 'video';
  created_at: string;
  expires_at: string;
  user: User;
}

export interface Message {
  id: string;
  sender_id: string;
  receiver_id: string;
  content: string;
  media_url?: string;
  media_type?: 'image' | 'video' | 'audio';
  created_at: string;
  sender: User;
}

export interface Notification {
  id: string;
  user_id: string;
  type: 'like' | 'comment' | 'message' | 'follow';
  content: string;
  is_read: boolean;
  created_at: string;
  actor: User;
}