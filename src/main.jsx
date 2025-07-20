import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://aa15b7a58ef4ad85ed7035c18c5847af@o4509698603810816.ingest.de.sentry.io/4509698658533456",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false
    })
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost" ],
  sendDefaultPii: true
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
