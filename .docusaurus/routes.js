import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/documentacion-DSI/blog',
    component: ComponentCreator('/documentacion-DSI/blog', 'ae4'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/archive',
    component: ComponentCreator('/documentacion-DSI/blog/archive', 'd95'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/first-blog-post',
    component: ComponentCreator('/documentacion-DSI/blog/first-blog-post', '0ea'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/long-blog-post',
    component: ComponentCreator('/documentacion-DSI/blog/long-blog-post', 'd10'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/mdx-blog-post',
    component: ComponentCreator('/documentacion-DSI/blog/mdx-blog-post', 'ea7'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/tags',
    component: ComponentCreator('/documentacion-DSI/blog/tags', 'f01'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/tags/docusaurus',
    component: ComponentCreator('/documentacion-DSI/blog/tags/docusaurus', 'c51'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/tags/facebook',
    component: ComponentCreator('/documentacion-DSI/blog/tags/facebook', '161'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/tags/hello',
    component: ComponentCreator('/documentacion-DSI/blog/tags/hello', 'f58'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/tags/hola',
    component: ComponentCreator('/documentacion-DSI/blog/tags/hola', '78e'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/welcome',
    component: ComponentCreator('/documentacion-DSI/blog/welcome', '3a6'),
    exact: true
  },
  {
    path: '/documentacion-DSI/markdown-page',
    component: ComponentCreator('/documentacion-DSI/markdown-page', '4d9'),
    exact: true
  },
  {
    path: '/documentacion-DSI/docs',
    component: ComponentCreator('/documentacion-DSI/docs', '0d4'),
    routes: [
      {
        path: '/documentacion-DSI/docs',
        component: ComponentCreator('/documentacion-DSI/docs', 'a9a'),
        routes: [
          {
            path: '/documentacion-DSI/docs',
            component: ComponentCreator('/documentacion-DSI/docs', '443'),
            routes: [
              {
                path: '/documentacion-DSI/docs/category/facturación-electronica',
                component: ComponentCreator('/documentacion-DSI/docs/category/facturación-electronica', '0f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/facturación-electronica-1',
                component: ComponentCreator('/documentacion-DSI/docs/category/facturación-electronica-1', '963'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/maxpoint',
                component: ComponentCreator('/documentacion-DSI/docs/category/maxpoint', 'ecb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/tutorial---basics',
                component: ComponentCreator('/documentacion-DSI/docs/category/tutorial---basics', 'cbf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/tutorial---extras',
                component: ComponentCreator('/documentacion-DSI/docs/category/tutorial---extras', '64c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Facturacion Electronica/Facturacion Electronica copy/congratulations',
                component: ComponentCreator('/documentacion-DSI/docs/Facturacion Electronica/Facturacion Electronica copy/congratulations', '81a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Facturacion Electronica/Facturacion Electronica copy/create-a-blog-post',
                component: ComponentCreator('/documentacion-DSI/docs/Facturacion Electronica/Facturacion Electronica copy/create-a-blog-post', '205'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Facturacion Electronica/Facturacion Electronica copy/create-a-document',
                component: ComponentCreator('/documentacion-DSI/docs/Facturacion Electronica/Facturacion Electronica copy/create-a-document', '942'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Facturacion Electronica/Facturacion Electronica copy/create-a-page',
                component: ComponentCreator('/documentacion-DSI/docs/Facturacion Electronica/Facturacion Electronica copy/create-a-page', '48c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Facturacion Electronica/Facturacion Electronica copy/deploy-your-site',
                component: ComponentCreator('/documentacion-DSI/docs/Facturacion Electronica/Facturacion Electronica copy/deploy-your-site', 'b6a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Facturacion Electronica/Facturacion Electronica copy/MANUAL DEL SISTEMA  MAXPOINT',
                component: ComponentCreator('/documentacion-DSI/docs/Facturacion Electronica/Facturacion Electronica copy/MANUAL DEL SISTEMA  MAXPOINT', '945'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Facturacion Electronica/Facturacion Electronica copy/markdown-features',
                component: ComponentCreator('/documentacion-DSI/docs/Facturacion Electronica/Facturacion Electronica copy/markdown-features', '9cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Facturacion Electronica/Facturacion Electronica copy/Maxpoint',
                component: ComponentCreator('/documentacion-DSI/docs/Facturacion Electronica/Facturacion Electronica copy/Maxpoint', '67d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Facturacion Electronica/Maxpoint',
                component: ComponentCreator('/documentacion-DSI/docs/Facturacion Electronica/Maxpoint', 'f0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/intro',
                component: ComponentCreator('/documentacion-DSI/docs/intro', 'bc1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint', '188'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/congratulations',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/congratulations', '5b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/create-a-blog-post',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/create-a-blog-post', '214'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/create-a-document',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/create-a-document', 'c76'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/create-a-page',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/create-a-page', '865'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/deploy-your-site',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/deploy-your-site', 'b02'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/MANUAL DEL SISTEMA  MAXPOINT',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/MANUAL DEL SISTEMA  MAXPOINT', 'e1b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/markdown-features',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/markdown-features', '7ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/documentacion-DSI/docs/tutorial-basics/congratulations', 'cda'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/documentacion-DSI/docs/tutorial-basics/create-a-blog-post', '89c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/documentacion-DSI/docs/tutorial-basics/create-a-document', '370'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/documentacion-DSI/docs/tutorial-basics/create-a-page', 'ce7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/documentacion-DSI/docs/tutorial-basics/deploy-your-site', 'f8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/documentacion-DSI/docs/tutorial-basics/markdown-features', '56e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/documentacion-DSI/docs/tutorial-extras/manage-docs-versions', 'c15'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/documentacion-DSI/docs/tutorial-extras/translate-your-site', '9f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/documentacion-DSI/',
    component: ComponentCreator('/documentacion-DSI/', '11f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
