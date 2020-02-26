import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="notfound">
      <Link to="/">Go back to Home</Link>
    </div>
  )
}

export default NotFoundPage
