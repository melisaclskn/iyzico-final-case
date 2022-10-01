import React from 'react'
import './LoadMore.css'
// eslint-disable-next-line react/prop-types
function LoadMore({loadMore}) {
  return (
    <button className="glow-on-hover  more-text" onClick={loadMore}>
          Load More
        </button>
  )
}

export default LoadMore