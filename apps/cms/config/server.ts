export default ({ env }) => {
  // 🔍 디버깅: 환경 변수 확인
  console.log('🔍 Environment Check:', {
    PROXY_RAW: process.env.PROXY,
    PROXY_PARSED: env.bool('PROXY', false),
    PUBLIC_URL: env('PUBLIC_URL', 'not set'),
    NODE_ENV: process.env.NODE_ENV,
  });

  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    app: {
      keys: env.array('APP_KEYS'),
    },
    proxy: env.bool('PROXY', false),
    url: env('PUBLIC_URL', 'https://yourdomain.com'),
  }
};