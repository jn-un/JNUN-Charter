interface SidebarItem {
  text: string // 显示名称
  link?: string // 跳转地址
  children?: SidebarItem[] // 子菜单
}

export const sidebar: SidebarItem[] = [
  {
    text: '宣言',
    link: '/'
  },
  {
    text: '会员',
    children: [
      {
        text: '属性'
      },
      {
        text: '行为规范'
      }
    ]
  },
  {
    text: '机构',
    children: [
      {
        text: '理事会'
      },
      {
        text: '监事会'
      },
      {
        text: '工作组'
      },
      {
        text: '工作流'
      }
    ]
  },
  {
    text: '提案',
    children: [
      {
        text: '开放提案'
      },
      {
        text: '工程计划'
      },
      {
        text: '开放想法'
      },
      {
        text: '开放决策'
      },
      {
        text: '开放参与'
      }
    ]
  }
]
