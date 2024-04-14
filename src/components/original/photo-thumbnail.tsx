import React from 'react'

type Props = {
  style?: string
  image: string
  alt?: string
}

const PhotoThumbnail = ({ style, image, alt }: Props) => {
  return (
    <div className={style}>
      <picture>
        <source srcSet={image} />
        <img src={image} alt="icon" className="" />
      </picture>
    </div>
  )
}

export default PhotoThumbnail
