export default (config, { strapi }) => {
  return async (ctx, next) => {
    if ((ctx.path === '/admin/login' || ctx.path === 'admin/register-admin') && ctx.method === 'POST') {
      console.log('🔍 Request Headers:', {
        'x-forwarded-proto': ctx.headers['x-forwarded-proto'],
        'x-forwarded-ssl': ctx.headers['x-forwarded-ssl'],
        'x-forwarded-for': ctx.headers['x-forwarded-for'],
        'x-forwarded-host': ctx.headers['x-forwarded-host'],
        protocol: ctx.protocol,
        secure: ctx.secure,
      });
    }
    await next();
  };
};