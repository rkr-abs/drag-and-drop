import React, { useState, useEffect } from "react";

const OfflineAlert = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    function handleOnlineStatus() {
      setIsOnline(navigator.onLine);
    }

    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOnlineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOnlineStatus);
    };
  }, []);

  return (
    <div>
      {isOnline ? <p>You are online. 🌐</p> : <p>You are offline. ⚠️</p>}
    </div>
  );
};

export default OfflineAlert;
