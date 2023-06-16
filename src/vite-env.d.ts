/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** 服务端接口请求地址 */
  readonly VITE_BASE_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
