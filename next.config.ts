import type { NextConfig } from 'next';
import articles from './data/resource-articles.json';

const nextConfig: NextConfig = {
  async redirects() {
    return articles.map(({ slug }) => ({ source: `/${slug}`, destination: `/resources/articles/${slug}`, permanent: true }));
  },
};

export default nextConfig;
