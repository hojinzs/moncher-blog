export default (config, { strapi }) => {
  return async (ctx, next) => {
    if (ctx.headers['x-forwarded-proto'] === 'https') {
      // 강제로 덮어쓰기
      ctx.request.secure = true;
      ctx.secure = true;
      ctx.protocol = 'https';
      ctx.request.protocol = 'https';
    }
    await next();
  };
};