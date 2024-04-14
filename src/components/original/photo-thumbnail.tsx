import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

type Props = {
  style?: string
  image: string
  alt?: string
}

const PhotoThumbnail = ({ style, image, alt }: Props) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className={style}>
          <picture>
            <source srcSet={image} />
            <img src={image} alt="icon" className="" />
          </picture>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
            <picture>
              <source srcSet={image} />
              <img src={image} alt="icon" className="" />
            </picture>
          </DialogDescription>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default PhotoThumbnail
