import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { JobProvider } from './context/JobContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JobProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </JobProvider>
  </StrictMode>,
)
