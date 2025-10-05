// Worker-specific placeholder types (copied to src/worker so CI picks it up)
declare global {
  interface Env {
    [key: string]: unknown;
  }
}
export {};
// Worker bindings/types used by Cloudflare Worker / Hono
declare global {
  interface Env {
    // Add specific bindings here, e.g. KV namespaces, secrets, etc.
    [key: string]: unknown;
  }
}
export {};
