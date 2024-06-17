/** @type {import('next').NextConfig} */
const nextConfig = {
    "rules": {
          "react/no-unescaped-entities": ["error", {
            "forbid": ["'", "&apos;", "&#39;"]
          }]
        }
      
};

export default nextConfig;
