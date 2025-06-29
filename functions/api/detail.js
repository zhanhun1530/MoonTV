// EdgeOne Pages Function for /api/detail
// 这是将你的 src/app/api/detail/route.ts 转换为 EdgeOne Pages Functions 格式的示例

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  const sourceCode = url.searchParams.get('source');

  if (!id || !sourceCode) {
    return new Response(JSON.stringify({ error: '缺少必要参数' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    // 这里需要将你的 getVideoDetail 逻辑移植过来
    // 由于代码较长，这只是一个框架示例

    // 模拟返回数据
    const result = {
      code: 200,
      episodes: [],
      detailUrl: '',
      videoInfo: {
        title: '',
        cover: '',
        desc: '',
        source_name: '',
        source: sourceCode,
        id: id,
      },
    };

    return new Response(JSON.stringify(result), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=7200',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
