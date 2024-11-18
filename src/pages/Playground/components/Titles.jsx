import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ text }) => {
  return (
    <div className="relative py-8 px-4 text-4xl font-bold">
      {text}
    </div>
  )
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Title;