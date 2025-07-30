importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');

// Initialize Aplu
const apluPushConfig = {
    apiKey: "AIzaSyCLfJqwvZzsmVFn29ECs_iFqxC_IBNJtHM",
	authDomain: "aplu-a11.firebaseapp.com",
	projectId: "aplu-a11",
	storageBucket: "aplu-a11.firebasestorage.app",
	messagingSenderId: "630887032227",
	appId: "1:630887032227:web:407f34be06293be0cca616"
};

try {
    importScripts('https://push.aplu.io/import-aplu-messaging.js');
} catch (err) {
    console.warn("Couldn't load aplu-script, falling back: ", err);
}
