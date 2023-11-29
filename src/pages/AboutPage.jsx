import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function AboutPage() {
  return (
    <Card>
    <div className='about'>
<h1>About the project</h1>
<p>This is a React app to leave feedback.</p>
<Link to='/'>Back to home</Link>
    </div>
    </Card>
  )
}

export default AboutPage