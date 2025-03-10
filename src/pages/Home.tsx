import React, { useState } from 'react';
import { Image, Video, Mic } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import type { Post } from '../types';

function Home() {
  const [content, setContent] = useState('');
  const user = useAuthStore((state) => state.user);
  const [posts, setPosts] = useState<Post[]>([]);

  const handlePost = async () => {
    if (!content.trim()) return;
    
    // TODO: Implement post creation with Supabase
    setContent('');
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Create Post */}
      <div className="card mb-6">
        <div className="flex items-start space-x-4">
          <img
            src={user?.avatar_url || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces'}
            alt={user?.full_name}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What's on your mind?"
              className="w-full input min-h-[100px] mb-3"
            />
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                <button className="p-2 hover:bg-gray-700 rounded-full">
                  <Image size={20} className="text-text-secondary" />
                </button>
                <button className="p-2 hover:bg-gray-700 rounded-full">
                  <Video size={20} className="text-text-secondary" />
                </button>
                <button className="p-2 hover:bg-gray-700 rounded-full">
                  <Mic size={20} className="text-text-secondary" />
                </button>
              </div>
              <button
                onClick={handlePost}
                className="btn-primary"
                disabled={!content.trim()}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Posts Feed */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="card">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={post.user.avatar_url || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces'}
                alt={post.user.full_name}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="font-semibold">{post.user.full_name}</p>
                <p className="text-text-secondary text-sm">
                  {new Date(post.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>
            <p className="mb-4">{post.content}</p>
            {post.media_url && (
              <div className="mb-4">
                {post.media_type === 'image' && (
                  <img src={post.media_url} alt="" className="rounded-lg w-full" />
                )}
                {post.media_type === 'video' && (
                  <video src={post.media_url} controls className="rounded-lg w-full" />
                )}
                {post.media_type === 'audio' && (
                  <audio src={post.media_url} controls className="w-full" />
                )}
              </div>
            )}
            <div className="flex items-center space-x-4 text-text-secondary">
              <button className="flex items-center space-x-1 hover:text-primary">
                <span>❤️</span>
                <span>{post.likes_count}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;