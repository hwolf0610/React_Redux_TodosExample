import React from 'react'
import propTypes from 'prop-types'

const Link = ({ active, children, onClick }) => (
    <button
       onClick={onClick}
       disabled={active}
       style={{
           marginLeft: '4px',
       }}
    >
      {children}
    </button>
)

Link.propTypes = {
  active: propTypes.bool.isRequired,
  children: propTypes.node.isRequired,
  onClick: propTypes.func.isRequired
}

export default Link
