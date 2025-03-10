import React from 'react';
import { format } from 'date-fns';
import type { Notification } from '../types';

function NotificationsPanel() {
  const notifications: Notification[] = [
    {
      id: '1',
      type: 'like',
      content: 'liked your post',
      is_read: false,
      created_at: new Date().toISOString(),
      actor: {
        id: '1',
        username: 'john_doe',
        full_name: 'John Doe',
        avatar_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces',
        email: 'john@example.com',
        created_at: new Date().toISOString()
      },
      user_id: '2'
    },
    // Add more sample notifications
  ];

  return (
    <div className="absolute right-0 mt-2 w-80 bg-surface rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-lg font-semibold">Notifications</h2>
      </div>
      <div className="max-h-96 overflow-y-auto">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 hover:bg-gray-700 cursor-pointer flex items-start space-x-3 ${
              !notification.is_read ? 'bg-gray-700/50' : ''
            }`}
          >
            <img
              src={notification.actor.avatar_url}
              alt={notification.actor.full_name}
              className="w-8 h-8 rounded-full"
            />
            <div className="flex-1">
              <p>
                <span className="font-semibold">{notification.actor.full_name}</span>{' '}
                {notification.content}
              </p>
              <p className="text-text-secondary text-sm">
                {format(new Date(notification.created_at), 'MMM d, h:mm a')}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 border-t border-gray-700 text-center">
        <button className="text-primary hover:text-primary-dark text-sm font-semibold">
          Mark all as read
        </button>
      </div>
    </div>
  );
}

export default NotificationsPanel;