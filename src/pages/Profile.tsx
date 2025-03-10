import React from 'react';
import { useParams } from 'react-router-dom';
import { Settings, MapPin, Link as LinkIcon } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

function Profile() {
  const { username } = useParams();
  const currentUser = useAuthStore((state) => state.user);
  const isOwnProfile = currentUser?.username === username;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="card">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1707343843437-caacff5cfa74?w=1200&h=400&fit=crop"
            alt="Cover"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <img
            src={currentUser?.avatar_url || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&fit=crop&crop=faces'}
            alt={currentUser?.full_name}
            className="absolute -bottom-16 left-8 w-32 h-32 rounded-full border-4 border-surface"
          />
        </div>
        
        <div className="mt-20 px-8 pb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold">{currentUser?.full_name}</h1>
              <p className="text-text-secondary">@{username}</p>
            </div>
            {isOwnProfile && (
              <button className="btn-primary flex items-center space-x-2">
                <Settings size={18} />
                <span>Edit Profile</span>
              </button>
            )}
          </div>
          
          <p className="mt-4 text-lg">
            Full-stack developer passionate about creating beautiful user experiences.
          </p>
          
          <div className="mt-4 flex items-center space-x-4 text-text-secondary">
            <div className="flex items-center space-x-2">
              <MapPin size={18} />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center space-x-2">
              <LinkIcon size={18} />
              <a href="#" className="text-primary hover:underline">github.com/tarangbhargava</a>
            </div>
          </div>
          
          <div className="mt-6 flex space-x-8">
            <div>
              <div className="text-2xl font-bold">1.2k</div>
              <div className="text-text-secondary">Following</div>
            </div>
            <div>
              <div className="text-2xl font-bold">8.5k</div>
              <div className="text-text-secondary">Followers</div>
            </div>
            <div>
              <div className="text-2xl font-bold">482</div>
              <div className="text-text-secondary">Posts</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Posts Grid */}
      <div className="mt-8 grid grid-cols-3 gap-4">
        {/* Add posts grid here */}
      </div>
    </div>
  );
}

export default Profile;