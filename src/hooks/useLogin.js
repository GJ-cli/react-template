/*
 * @Descripttion :
 * @version      : v1.0
 * @Author       : 段雄飞
 * @Date         : 2021-11-15 18:10:54
 * @LastEditors  : 段雄飞
 * @LastEditTime : 2021-11-22 21:25:56
 */

import { useState, useEffect } from 'react';

export default function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}
