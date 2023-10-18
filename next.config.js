/** @type {import('next').NextConfig} */
const nextConfig = {
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },
  webpack: function (config) {
    //import markdown
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        port: "",
        pathname: "/random",
      },
      {
        protocol: "https",
        hostname: "th.bing.com",
        port: "",
        pathname: "/th",
      },
      {
        protocol: "https",
        hostname: "ts4.cn.mm.bing.net",
        port: "",
        pathname: "/th",
      },
      {
        protocol: "https",
        hostname: "ts3.cn.mm.bing.net",
        port: "",
        pathname: "/th",
      },
      {
        protocol: "https",
        hostname: "ts1.cn.mm.bing.net",
        port: "",
        pathname: "/th",
      },
      {
        protocol: "https",
        hostname: "ts2.cn.mm.bing.net",
        port: "",
        pathname: "/th",
      },
      {
        protocol: "https",
        hostname: "img-s.msn.cn",
        port: "",
        pathname: "/tenant/amp/entityid/**",
      },
      {
        protocol: "https",
        hostname: "img-s-msn-com.akamaized.net",
        port: "",
        pathname: "/tenant/amp/entityid/**",
      },
      {
        protocol: "https",
        hostname: "statics.wolove.life",
        port: "",
        pathname: "/*",
      },
    ],
  },
};

module.exports = nextConfig;
