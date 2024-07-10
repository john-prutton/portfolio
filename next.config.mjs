import { withPlausibleProxy } from "next-plausible"

/** @type {import('next').NextConfig} */
const nextConfig = {}

const nextConfigWithPlausibleProxy = withPlausibleProxy({
  customDomain: process.env.PLAUSIBLE_CUSTOM_DOMAIN
})(nextConfig)

export default nextConfigWithPlausibleProxy
