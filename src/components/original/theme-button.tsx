import { MoonIcon, SunIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

const ThemeButton = () => {
  const [theme, setThemeState] = useState<'theme-light' | 'dark' | 'system'>(
    'theme-light'
  )

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark')
    setThemeState(isDarkMode ? 'dark' : 'theme-light')
  }, [])

  useEffect(() => {
    const isDark =
      theme === 'dark' ||
      (theme === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.classList[isDark ? 'add' : 'remove']('dark')
  }, [theme])

  const handleClick = () => {
    if (theme === 'dark') {
      setThemeState('theme-light')
    } else {
      setThemeState('dark')
    }
  }
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleClick}
      className="bg-transparent hover:bg-gray-100/5"
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] text-muted rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] text-muted rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export default ThemeButton
