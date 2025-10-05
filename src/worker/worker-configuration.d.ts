// Worker bindings/types used by Cloudflare Worker / Hono
declare global {
  interface Env {
    // Add specific bindings here, e.g. KV namespaces, secrets, etc.
    [key: string]: unknown;
  }
}
export {};
