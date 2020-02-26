import React from 'react'

const HeadingTitle = ({ text }) => (
  <h1 className="heading-primary">
    {text === 'We Love Running' ? (
      <>
        We Love <span className="heading-primary--highlight">Running</span>
      </>
    ) : (
      text
    )}
  </h1>
)

export default HeadingTitle
