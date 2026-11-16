importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyCu-ZLIqFgvZSEm8KSn7Seh1X9lnHhGSh0",
    authDomain: "shop-clothes-224a3.firebaseapp.com",
    databaseURL: "https://shop-clothes-224a3-default-rtdb.firebaseio.com",
    projectId: "shop-clothes-224a3",
    storageBucket: "shop-clothes-224a3.firebasestorage.app",
    messagingSenderId: "348817058494",
    appId: "1:348817058494:web:2c29f288537e50ac350cef",
    measurementId: "G-Q00R0HTBZC"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png', // إذا كان لديك أيقونة أضفها في المستودع
    dir: 'rtl'
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});
