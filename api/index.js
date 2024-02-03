import { createProxyMiddleware } from "http-proxy-middleware";
 
const apiProxy = createProxyMiddleware({
  target: "https://nyaa.si",
  changeOrigin: true,
  pathRewrite: {
    "^/api": "", // strip "/api" from the URL
  },
});
 
// Expose the proxy on the "/api/*" endpoint.
export default function (req, res) {
  inject();
  return apiProxy(req, res);
}