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
  children: React.ReactNode
}

const PhotoThumbnail = ({ style, children }: Props) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="p-10 max-h-[90%]">
        <DialogHeader>
          <DialogDescription>{children}</DialogDescription>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default PhotoThumbnail
