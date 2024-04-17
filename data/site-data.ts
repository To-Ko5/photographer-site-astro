import { BookText } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'
import type { url_link } from 'types/site'

export const site = {
  title: import.meta.env.SITE_TITLE,
  description: import.meta.env.SITE_DESCRIPTION
}

export const date = {
  lastUpdatedAt: new Date()
}

export const urlLinks: url_link[] = [
  {
    icon: SiGithub,
    href: import.meta.env.LINK_URL_1 || '#',
    tooltip: 'Github'
  },
  { icon: BookText, href: import.meta.env.LINK_URL_2 || '#', tooltip: 'Qiita' }
]
