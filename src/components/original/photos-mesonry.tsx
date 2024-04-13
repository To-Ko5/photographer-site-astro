import React from 'react'

const PhotosMasonry = () => {
  return (
    <div className="columns-2 md:columns-3 gap-4">
      <div className="mb-4">
        <picture>
          <source srcSet="/photos/photo1.jpg" />
          <img src="/photos/photo1.jpg" alt="icon" className="" />
        </picture>
      </div>
      <div className="mb-4">
        <picture>
          <source srcSet="/photos/photo2.jpg" />
          <img src="/photos/photo2.jpg" alt="icon" className="" />
        </picture>
      </div>
      <div className="mb-4">
        <picture>
          <source srcSet="/photos/photo3.jpg" />
          <img src="/photos/photo3.jpg" alt="icon" className="" />
        </picture>
      </div>
      <div className="mb-4">
        <picture>
          <source srcSet="/photos/photo2.jpg" />
          <img src="/photos/photo2.jpg" alt="icon" className="" />
        </picture>
      </div>
      <div className="mb-4">
        <picture>
          <source srcSet="/photos/photo2.jpg" />
          <img src="/photos/photo2.jpg" alt="icon" className="" />
        </picture>
      </div>
      <div className="mb-4">
        <picture>
          <source srcSet="/photos/photo1.jpg" />
          <img src="/photos/photo1.jpg" alt="icon" className="" />
        </picture>
      </div>
      <div className="mb-4">
        <picture>
          <source srcSet="/photos/photo1.jpg" />
          <img src="/photos/photo1.jpg" alt="icon" className="" />
        </picture>
      </div>
      <div className="mb-4">
        <picture>
          <source srcSet="/photos/photo1.jpg" />
          <img src="/photos/photo1.jpg" alt="icon" className="" />
        </picture>
      </div>
    </div>
  )
}

export default PhotosMasonry
