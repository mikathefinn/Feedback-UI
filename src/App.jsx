import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import FeedbackItem from './components/FeedbackItem'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutLink from './components/AboutLink'
import { FeedbackProvider } from './Context/FeedbackContext'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
          <AboutLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
