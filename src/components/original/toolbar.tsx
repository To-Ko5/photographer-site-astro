import { Separator } from '@/components/ui/separator'
import ThemeButton from './theme-button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { Button } from '../ui/button'
import { MenuIcon } from 'lucide-react'

const toolbar = () => {
  return (
    <div className="fixed flex items-center w-max shadow-lg p-2 bottom-8 left-1/2 -translate-x-1/2 rounded-sm bg-muted border">
      <div>
        <Avatar className="rounded-md">
          <AvatarImage src="/icon.jpg" alt="仮" />
          <AvatarFallback>仮</AvatarFallback>
        </Avatar>
      </div>
      <Separator
        orientation="vertical"
        className="h-8 mx-3 bg-muted-foreground"
      />
      <div className="flex gap-2">
        <ThemeButton />
        <Popover>
          <PopoverTrigger>
            <Button
              variant="outline"
              size="icon"
              className="bg-transparent hover:bg-gray-100/5 border-muted-foreground"
            >
              <MenuIcon className="h-[1.2rem] w-[1.2rem] transition-all" />
            </Button>
          </PopoverTrigger>
          <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>
      </div>
    </div>
  )
}

export default toolbar
