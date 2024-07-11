import withMDX from "@next/mdx"
import { withPlausibleProxy } from "next-plausible"

/** @typedef {import("next").NextConfig} NextConfig */

/** @type {NextConfig} */
const nextConfig = {
  pageExtensions: ["tsx"]
}

/** @type {Array<(nc: NextConfig) => NextConfig>} */
const plugins = [
  (config) =>
    withPlausibleProxy({
      customDomain: process.env.PLAUSIBLE_CUSTOM_DOMAIN
    })(config),

  (config) =>
    withMDX()({
      ...config,
      pageExtensions: [...(config.pageExtensions ?? []), "mdx"]
    })
]

const nextWithPlugins = plugins.reduce(
  (config, plugin) => plugin(config),
  nextConfig
)

export default nextWithPlugins
