import { Separator } from '@/components/ui/separator'
import ThemeButton from './theme-button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const toolbar = () => {
  return (
    <div className="fixed flex items-center w-max shadow-lg backdrop-blur p-2 bottom-8 left-1/2 -translate-x-1/2 rounded-md bg-muted/10 border">
      <div>
        <Avatar className="rounded-md">
          <AvatarImage src="/icon.jpg" alt="仮" />
          <AvatarFallback>仮</AvatarFallback>
        </Avatar>
      </div>
      <Separator orientation="vertical" className="h-8 mx-2" />
      <ThemeButton />
    </div>
  )
}

export default toolbar
