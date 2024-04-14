import React from 'react'
import PhotoThumbnail from './photo-thumbnail'

const PhotosMasonry = () => {
  return (
    <div className="columns-2 md:columns-3 gap-4">
      <PhotoThumbnail style="mb-4" image="/photos/photo2.jpg" />
      <PhotoThumbnail style="mb-4" image="/photos/photo1.jpg" />
      <PhotoThumbnail style="mb-4" image="/photos/photo3.jpg" />
      <PhotoThumbnail style="mb-4" image="/photos/photo2.jpg" />
      <PhotoThumbnail style="mb-4" image="/photos/photo3.jpg" />
      <PhotoThumbnail style="mb-4" image="/photos/photo2.jpg" />
      <PhotoThumbnail style="mb-4" image="/photos/photo1.jpg" />
      <PhotoThumbnail style="mb-4" image="/photos/photo2.jpg" />
      <PhotoThumbnail style="mb-4" image="/photos/photo3.jpg" />
    </div>
  )
}

export default PhotosMasonry
