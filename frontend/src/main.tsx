// frontend/src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// Import global styles
import './styles/globals.css';

// Performance monitoring (optional)
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

// Environment setup
if (import.meta.env.DEV) {
  console.log('🚀 Miranda Portfolio - Development Mode');
  console.log('📊 Environment:', import.meta.env.MODE);
  console.log('🔗 API URL:', import.meta.env.VITE_API_URL || 'http://localhost:5000/api');
}

// Web Vitals reporting (optional)
function sendToAnalytics(metric: any) {
  if (import.meta.env.PROD && import.meta.env.VITE_ANALYTICS_ID) {
    // Send to analytics service (Google Analytics, etc.)
    console.log('📈 Web Vital:', metric);
  }
}

// Measure Core Web Vitals
if (import.meta.env.PROD) {
  getCLS(sendToAnalytics);
  getFID(sendToAnalytics);
  getFCP(sendToAnalytics);
  getLCP(sendToAnalytics);
  getTTFB(sendToAnalytics);
}

// Error handling for uncaught errors
window.addEventListener('error', (event) => {
  console.error('🚨 Global Error:', event.error);
  
  // Send error to monitoring service in production
  if (import.meta.env.PROD) {
    // Example: Sentry, LogRocket, etc.
  }
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.error('🚨 Unhandled Promise Rejection:', event.reason);
  
  // Send error to monitoring service in production
  if (import.meta.env.PROD) {
    // Example: Sentry, LogRocket, etc.
  }
});

// React 18 Strict Mode setup
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Hot Module Replacement (HMR) - Vite specific
if (import.meta.hot) {
  import.meta.hot.accept();
}

// Service Worker registration (optional)
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('✅ SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('❌ SW registration failed: ', registrationError);
      });
  });
}
