import React from 'react'

function Gallery({data}) {
  return (
    <div>
          <img key={data.id} src={data.download_url} className='gallery' alt='finding nothing' />
      
    </div>
  )
}

export default Gallery
