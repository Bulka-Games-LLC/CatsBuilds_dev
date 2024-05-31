export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith('/Build/')) {
      const response = await env.ASSETS.fetch(request)
      return new Response(response.body, {
        headers: response.headers,
        encodeBody: "manual"
      })
    }
    //return new Response('Ok');
    // Otherwise, serve the static assets.
    // Without this, the Worker will error and no assets will be served.
    return env.ASSETS.fetch(request);
  },
}