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
  title?: string
  description?: string
  date?: string
  link?: string
  children: React.ReactNode
}

const PhotoThumbnail = ({ style, title, children }: Props) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="p-10 max-h-[90%]">
        <DialogHeader>
          <DialogDescription className="max-w-2xl">
            {children}
          </DialogDescription>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default PhotoThumbnail
