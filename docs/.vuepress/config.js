module.exports = {
  title: 'fe-dev-setup',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://avatars1.githubusercontent.com/u/50347314?s=200&v=4',
      },
    ],
    [
      'meta',
      {
        name: 'keywords',
        itemprop: 'keywords',
        content: '打造舒适的前端开发环境',
      },
    ],
    ['meta', {
      property: 'og:title',
      content: 'fe-dev-setup'
    }],
    [
      'meta',
      {
        property: 'og:description',
        content: '前端开发环境',
      },
    ],
    [
      'script',
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?ad212e8d41079dc41abaeda9b36e2501";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })()`,
    ],
  ],
  description: '如何打造舒适的前端开发环境',
  themeConfig: {
    nav: [{
        text: '指南',
        link: '/guide/'
      },
      {
        text: 'Github',
        link: 'https://github.com/ykfe/fe-dev-setup'
      },
    ],
    sidebar: {
      '/guide/': [{
        collapsable: false,
        children: [
          'shell',
          'Node.js',
          'vscode'
        ],
      }]
    }

  }
};