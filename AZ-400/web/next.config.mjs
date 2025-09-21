import createMDX from "@next/mdx";
import path from "path";

const withMDX = createMDX({ extension: /\.mdx?$/ });

const isPages = process.env.DEPLOY_TARGET === "gh-pages";
const basePath = isPages ? "/Microsoft/AZ-400" : "";

export default withMDX({
  pageExtensions: ["ts","tsx","mdx"],
  output: "export",
  basePath,
  images: { unoptimized: true },
  outputFileTracingRoot: path.join(process.cwd()),
  async rewrites() {
    // DEV convenience: if someone hits /Microsoft/AZ-400/* locally, send them to /*
    if (!isPages) {
      return [{ source: "/Microsoft/AZ-400/:path*", destination: "/:path*" }];
    }
    return [];
  },
  allowedDevOrigins: ["http://localhost:3000","http://127.0.0.1:3000","http://192.168.0.191:3000"]
});
