// EdgeOne Pages Function for /api/douban
// 从 src/app/api/douban/route.ts 迁移而来

export async function onRequest(context) {
  const { request } = context;

  if (request.method !== 'GET') {
    return new Response('Method not allowed', { status: 405 });
  }

  const url = new URL(request.url);
  const type = url.searchParams.get('type');
  const tag = url.searchParams.get('tag');
  const _pageSize = parseInt(url.searchParams.get('pageSize') || '16');
  const _pageStart = parseInt(url.searchParams.get('pageStart') || '0');

  // 验证参数
  if (!type || !tag) {
    return new Response(JSON.stringify({ error: '缺少必要参数: type 或 tag' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!['tv', 'movie'].includes(type)) {
    return new Response(JSON.stringify({ error: 'type 参数必须是 tv 或 movie' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // 简化版豆瓣API实现
  try {
    const response = {
      code: 200,
      message: '获取成功',
      list: [], // 这里应该实现完整的豆瓣API逻辑
    };

    return new Response(JSON.stringify(response), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=7200',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: '获取豆瓣数据失败' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
