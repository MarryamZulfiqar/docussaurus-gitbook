
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','8eb'),
  exact: true,
},
{
  path: '/blog/first-blog-post',
  component: ComponentCreator('/blog/first-blog-post','c34'),
  exact: true,
},
{
  path: '/blog/long-blog-post',
  component: ComponentCreator('/blog/long-blog-post','25b'),
  exact: true,
},
{
  path: '/blog/mdx-blog-post',
  component: ComponentCreator('/blog/mdx-blog-post','302'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','d04'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','a56'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','234'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','f65'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','93b'),
  
  routes: [
{
  path: '/docs/intro',
  component: ComponentCreator('/docs/intro','e84'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
