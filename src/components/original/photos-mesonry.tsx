import React from 'react'
import PhotoThumbnail from './photo-thumbnail'
import photo1 from '../../../public/photos/photo1.jpg'
import photo2 from '../../../public/photos/photo2.jpg'
import photo3 from '../../../public/photos/photo3.jpg'

const PhotosMasonry = () => {
  return (
    <div className="columns-2 md:columns-3 gap-4">
      <PhotoThumbnail style="mb-4" image={photo2.src} />
      <PhotoThumbnail style="mb-4" image={photo2.src} />
      <PhotoThumbnail style="mb-4" image={photo1.src} />
      <PhotoThumbnail style="mb-4" image={photo3.src} />
      <PhotoThumbnail style="mb-4" image={photo2.src} />
      <PhotoThumbnail style="mb-4" image={photo1.src} />
      <PhotoThumbnail style="mb-4" image={photo3.src} />
      <PhotoThumbnail style="mb-4" image={photo2.src} />
      <PhotoThumbnail style="mb-4" image={photo1.src} />
    </div>
  )
}

export default PhotosMasonry
