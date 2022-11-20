export default {
  title: 'Joint Now Charter',
  description: 'Joint Now Charter',
  // lastUpdated: true,
  themeConfig: {
    sidebar: {
      '/cn': getConfigSidebarCN(),
      '/jp': getConfigSidebarJP()
    },   
    // lastUpdatedText: 'Bottom information'
  }
}

function getConfigSidebarJP() {
  return [
    {
      text: 'App Config',
      children: [{ text: 'Basics', link: '/config/basics' }]
    },
    {
      text: 'Theme Config',
      children: [
        { text: 'Homepage', link: '/config/homepage' },
        { text: 'Algolia Search', link: '/config/algolia-search' },
        { text: 'Carbon Ads', link: '/config/carbon-ads' }
      ]
    }
  ]
}

function getConfigSidebarCN() {
  return [
    {
      text: '宣言',
      link: 'cn/declaration'
    },
    {
      text: '工作流',
      link: 'cn/institution/',
      children: [
        { text: '理事会', link: 'cn/institution/council' },
        { text: '监事会', link: 'cn/institution/supervisory-board' }

      ]
    },
    {
      text: '会员',
      link: 'cn/member/index',
      children: [
        { text: '属性', link: 'cn/member/attribute' },
        { text: '规范', link: 'cn/member/code-of-conduct' }
      ]
    },
    {
      text: '提案',
      children: [
        { text: '开放提案', link: '/config/homepage' },
        { text: '工程计划', link: '/config/algolia-search' },
        { text: '开放想法', link: '/config/algolia-search' },
        { text: '开放决策', link: '/config/algolia-search' },
        { text: '开放参与', link: '/config/algolia-search' }
      ]
    }
  ]
}