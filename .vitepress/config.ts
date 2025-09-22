import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Atomic PHP',
  description: 'High‑performance, PSR‑friendly PHP building blocks',
  lang: 'en-US',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#111827' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'og:title', content: 'Atomic PHP' }],
    ['meta', { property: 'og:description', content: 'High‑performance, PSR‑friendly PHP building blocks.' }]
  ],
  themeConfig: {
    logo: { light: '/logo-light.svg', dark: '/logo-dark.svg' },
    siteTitle: 'Atomic PHP',
    nav: [
      { text: 'Guide', link: '/guide/' },
      {
        text: 'Packages',
        items: [
          { text: 'HTTP Kernel', link: '/packages/http-kernel' },
          { text: 'Router', link: '/packages/router' },
          { text: 'Container', link: '/packages/container' }
        ]
      },
      { text: 'Benchmarks', link: '/benchmarks' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Introduction', link: '/guide/' },
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Contributing', link: '/guide/contributing' }
          ]
        }
      ],
      '/packages/': [
        {
          text: 'Packages',
          items: [
            { text: 'HTTP Kernel', link: '/packages/http-kernel' },
            { text: 'Router', link: '/packages/router' },
            { text: 'Container', link: '/packages/container' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/atomic-php' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: '© ' + new Date().getFullYear() + ' Atomic PHP'
    }
  }
})

