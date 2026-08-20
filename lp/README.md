# PITAL LP

PITAL（Vecto Inc.）のランディングページ。[vinext](https://github.com/cloudflare/vinext) + Cloudflare Workers向けの構成で、`app/page.tsx` にLP本体、`app/globals.css` にスタイルをまとめている。

## Prerequisites

- Node.js `>=22.13.0`

## Quick Start

```bash
npm install
npm run dev
npm run build
```

## 静的HTMLの書き出し

Cloudflare非依存の静的HTML（GitHub Pages / Vercel等にそのまま置ける版）が必要な場合:

```bash
npm run build
npx vinext start --port 3210
PITAL_PREVIEW_ORIGIN=http://localhost:3210 node scripts/export-static.mjs
```

`pital-lp.html` が生成される。`static-deploy/` は、これと `public/` 内の参照アセット（ロゴ・OG画像）をまとめた配布用フォルダ。

## Learn More

- [vinext Documentation](https://github.com/cloudflare/vinext)
