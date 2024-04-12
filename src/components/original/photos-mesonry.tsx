import React from 'react'

const PhotosMasonry = () => {
  return (
    <div>
      <div>
        <picture>
          <source srcSet="/photos/photo1.jpg" />
          <img src="/photos/photo1.jpg" alt="icon" className="" />
        </picture>
      </div>
      <div>
        <picture>
          <source srcSet="/photos/photo2.jpg" />
          <img src="/photos/photo2.jpg" alt="icon" className="" />
        </picture>
      </div>
      <div>
        <picture>
          <source srcSet="/photos/photo3.jpg" />
          <img src="/photos/photo3.jpg" alt="icon" className="" />
        </picture>
      </div>
      <div>
        <picture>
          <source srcSet="/photos/photo2.jpg" />
          <img src="/photos/photo2.jpg" alt="icon" className="" />
        </picture>
      </div>
      <div>
        <picture>
          <source srcSet="/photos/photo2.jpg" />
          <img src="/photos/photo2.jpg" alt="icon" className="" />
        </picture>
      </div>
      <div>
        <picture>
          <source srcSet="/photos/photo1.jpg" />
          <img src="/photos/photo1.jpg" alt="icon" className="" />
        </picture>
      </div>
    </div>
  )
}

export default PhotosMasonry
