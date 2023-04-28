const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'deva.world',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#834a9d' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Begin',
        link: '/begin/',
      },
      {
        text: 'Agents',
        link: '/agents/',
      },
      {
        text: 'Engines',
        link: '/engines/',
      },
      {
        text: 'Habitat',
        link: '/habitat/',
      },
      {
        text: 'Features',
        link: '/features/',
      },
      {
        text: 'License',
        link: '/license/',
      },
      {
        text: 'Myth',
        link: '/myth/',
      },
      {
        text: 'Contact',
        link: '/contact/',
      }
    ],
    sidebar: {
      '/agents/': [
        {
          title: 'Agents',
          collapsable: false,
          children: [
            '',
            'agent-deva',
            'agent-indra',
            'agent-security',
            'agent-medic',
            'agent-knowledge',
            'agent-simulator',
            'agent-incubator',
            'agent-evolution',
            'agent-concept',
            'agent-correction',
            'agent-audit',
            'agent-error',
          ]
        }
      ],
      '/engines/': [
        {
          title: 'Engines',
          collapsable: false,
          children: [
            '',
            'engine-evolution',
            'engine-concept',
            'engine-together',
          ]
        }
      ],
      '/license/': [
        {
          title: 'License',
          collapsable: false,
          children: [
            '',
            'license-beginner',
            'license-intermediate',
            'license-advanced',
            'license-elite',
          ]
        }
      ],
      '/features/': [
        {
          title: 'Features',
          collapsable: false,
          children: [
            '',
            'feature-whitepaper',
            'feature-quantum',
          ]
        }
      ],
      '/contact/': [
        {
          title: 'Contact',
          collapsable: false,
          children: [
            '',
            'contact-investor',
            'contact-partner',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
