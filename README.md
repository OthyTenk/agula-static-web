<img width="1500" alt="Screenshot 2023-11-05 at 17 16 31" src="https://github.com/OthyTenk/agula-static-web/assets/34827155/c1000197-c48f-4499-8ab8-40f1f409aa70">

Deploy Next.js to Github Pages with Github Actions. [`View the deployed app 🚀`](https://othytenk.github.io/agula-static-web/).

## Configure Next.js

```bash
/**
 * @type {import('next').NextConfig}
 **/

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
   */
  output: "export",

  /**
   * Set base path. This is usually the slug of your repository.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  basePath: isProd ? "/agula-static-web" : "",

  distDir: "dist",

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/pages/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

## Deploy on Github Pages

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
