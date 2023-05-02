import express from 'express';
import { createServer as createViteServer } from 'vite';

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.get('*', async (req, res, next) => {
    const url = req.url;
    try {
      const render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
      if (url !== '/' && url !== '/form' && url !== '/about' && url !== '/404') {
        return res.redirect('/404');
      }
      const { pipe } = render(url, res);
      pipe(res);
    } catch (error) {
      vite.ssrFixStacktrace(error);
      next(error);
    }
  });
  app.listen(5173, () => console.log('server is running'));
}
createServer();
