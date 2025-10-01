// import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {
    // Koa 앱에 proxy trust 활성화
    const app = strapi.server.app;
    app.proxy = true;

    console.log('🚀 Koa app.proxy set to:', app.proxy);

    // 추가 확인
    console.log('🚀 Koa app keys:', Object.keys(app));
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/* { strapi }: { strapi: Core.Strapi } */) {},
};
