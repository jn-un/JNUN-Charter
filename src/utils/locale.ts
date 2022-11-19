interface localeItem {
  name: string // 语言名称
  path: string // 语言路径
}

export const localeList: localeItem[] = [
  {
    name: 'Chinese',
    path: '/cn'
  },
  {
    name: 'English',
    path: '/en'
  },
  {
    name: 'Japanese',
    path: '/jp'
  }
]
