import { Separator } from '@/components/ui/separator'
import ThemeButton from './theme-button'

const toolbar = () => {
  return (
    <div className="fixed flex items-center w-max shadow-lg backdrop-blur p-2 bottom-8 left-1/2 -translate-x-1/2 rounded-md bg-muted/10 border">
      <div>
        <picture>
          <source srcSet="/icon.jpg" />
          <img src="/icon.jpg" alt="icon" className="max-w-8" />
        </picture>
      </div>
      <Separator orientation="vertical" className="h-8 mx-2" />
      <ThemeButton />
    </div>
  )
}

export default toolbar
