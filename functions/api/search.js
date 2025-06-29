// EdgeOne Pages Function for /api/search
// 从 src/app/api/search/route.ts 迁移而来

export async function onRequest(context) {
  const { request } = context;
  
  if (request.method !== 'GET') {
    return new Response('Method not allowed', { status: 405 });
  }

  const url = new URL(request.url);
  const query = url.searchParams.get('q');

  if (!query) {
    return new Response(JSON.stringify({ results: [] }), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=7200',
      },
    });
  }

  // 简化版搜索实现
  // 实际项目中需要完整迁移搜索逻辑
  try {
    const results = []; // 这里应该实现完整的搜索逻辑
    
    return new Response(JSON.stringify({ results }), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=7200',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: '搜索失败' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
