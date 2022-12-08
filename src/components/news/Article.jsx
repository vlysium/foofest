import React from 'react'

function Article({headline, story}) {
  return (
    <div>
        <div></div>
        <div>
            <h2>{headline}</h2>
            <p>{story}</p>
        </div>
    </div>
  )
}

export default Article