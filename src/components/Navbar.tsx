import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Home, MessageSquare, Settings, User } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import NotificationsPanel from '../components/NotificationsPanel';

function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const user = useAuthStore((state) => state.user);

  return (
    <nav className="bg-surface shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            Chatterly
          </Link>

          <div className="flex items-center space-x-6">
            <Link to="/" className="text-text hover:text-primary">
              <Home size={24} />
            </Link>
            <Link to="/messages" className="text-text hover:text-primary">
              <MessageSquare size={24} />
            </Link>
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="text-text hover:text-primary relative"
            >
              <Bell size={24} />
              <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 text-xs flex items-center justify-center">
                3
              </span>
            </button>
            <Link to="/settings" className="text-text hover:text-primary">
              <Settings size={24} />
            </Link>
            <Link to={`/profile/${user?.username}`} className="text-text hover:text-primary">
              <User size={24} />
            </Link>
          </div>
        </div>
      </div>
      {showNotifications && <NotificationsPanel />}
    </nav>
  );
}

export default Navbar;