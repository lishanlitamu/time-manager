import React from 'react'
import PropTypes from 'prop-types'

function Button({children, version, type, isDisabled}) {
    // version can be btn-primary or btn-secondary
  return (
    <button type = {type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}


Button.defaultProps = {
    version: 'primary',
    type:'button',
    isDisabled:false,
}


Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string, // with default values 
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}

export default Button