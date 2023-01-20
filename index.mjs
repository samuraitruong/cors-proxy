import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import url from "url";
import cors from "cors";

(async function () {
  const app = express();
  app.use(cors());

  app.use("/cors", (req, res, next) => {
    const target = req.url.substring(1);
    const parsed = url.parse(target);

    return createProxyMiddleware({
      target: `${parsed.protocol}//${parsed.host}`,
      pathRewrite: function (path, req) {
        return parsed.path;
      },

      changeOrigin: true,
    })(req, res, next);
  });

  app.listen(process.env.PORT || 8080, () => {
    console.log("listening on port " + process.env.PORT || 8080);
  });
})();
