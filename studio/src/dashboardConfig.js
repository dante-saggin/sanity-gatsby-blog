export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '603378535c468a1875677371',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-8ezu9d2f',
                  apiId: 'fc5f9b67-da35-4472-a3ca-0dda959cb04e'
                },
                {
                  buildHookId: '60337854e88b4ef35b3bfe5c',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-oaqok1gk',
                  apiId: '8df646a5-c889-486e-b0ff-9fca46165607'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dante-saggin/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-oaqok1gk.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
