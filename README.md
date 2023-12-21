# Start app

```cmd
pnpm i --frozen-lockfile
pnpm dev
```

# Buggy part

1. Open it in your browser and switch between tabs.
2. It should work just fine (At least that is how it was functioning on my local env)
3. Close that tab
4. Open a new tab, and go to another website; e.g. youtube.com
5. Type http://localhost:3000/terms-and-conditions
6. You will see this error on your browser and you can see same error in your terminal where you entered your started you executed `pnpm dev`:
   ```cmd
   TypeError: Cannot read properties of null (reading 'useContext')
        at t.useContext (/Users/kasir.barati/projects/my-nextjs-journey/node_modules/.pnpm/next@14.0.4_@babel+core@7.23.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:163120)
        at Module.usePathname (/Users/kasir.barati/projects/my-nextjs-journey/.next/server/chunks/node_modules__pnpm_5f00a5._.js:7473:368)
        at ErrorBoundary (/Users/kasir.barati/projects/my-nextjs-journey/.next/server/chunks/node_modules__pnpm_5f00a5._.js:9266:357)
        at ai (/Users/kasir.barati/projects/my-nextjs-journey/node_modules/.pnpm/next@14.0.4_@babel+core@7.23.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:6505)
        at /Users/kasir.barati/projects/my-nextjs-journey/node_modules/.pnpm/next@14.0.4_@babel+core@7.23.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11284
        at ab (/Users/kasir.barati/projects/my-nextjs-journey/node_modules/.pnpm/next@14.0.4_@babel+core@7.23.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:13038)
        at e (/Users/kasir.barati/projects/my-nextjs-journey/node_modules/.pnpm/next@14.0.4_@babel+core@7.23.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:46298)
        at aS (/Users/kasir.barati/projects/my-nextjs-journey/node_modules/.pnpm/next@14.0.4_@babel+core@7.23.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:48276)
        at ag (/Users/kasir.barati/projects/my-nextjs-journey/node_modules/.pnpm/next@14.0.4_@babel+core@7.23.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:7923)
        at /Users/kasir.barati/projects/my-nextjs-journey/node_modules/.pnpm/next@14.0.4_@babel+core@7.23.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:13014
        at ab (/Users/kasir.barati/projects/my-nextjs-journey/node_modules/.pnpm/next@14.0.4_@babel+core@7.23.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:13038)
        at ab (/Users/kasir.barati/projects/my-nextjs-journey/node_modules/.pnpm/next@14.0.4_@babel+core@7.23.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:43088)
        at e (/Users/kasir.barati/projects/my-nextjs-journey/node_modules/.pnpm/next@14.0.4_@babel+core@7.23.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:46298)
        at aS (/Users/kasir.barati/projects/my-nextjs-journey/node_modules/.pnpm/next@14.0.4_@babel+core@7.23.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:48276)
        at e (/Users/kasir.barati/projects/my-nextjs-journey/node_modules/.pnpm/next@14.0.4_@babel+core@7.23.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:46613)
        at aS (/Users/kasir.barati/projects/my-nextjs-journey/node_modules/.pnpm/next@14.0.4_@babel+core@7.23.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:48276)
        at ag (/Users/kasir.barati/projects/my-nextjs-journey/node_modules/.pnpm/next@14.0.4_@babel+core@7.23.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:7923)
        at /Users/kasir.barati/projects/my-nextjs-journey/node_modules/.pnpm/next@14.0.4_@babel+core@7.23.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:13014
        at ab (/Users/kasir.barati/projects/my-nextjs-journey/node_modules/.pnpm/next@14.0.4_@babel+core@7.23.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:13038)
        at e (/Users/kasir.barati/projects/my-nextjs-journey/node_modules/.pnpm/next@14.0.4_@babel+core@7.23.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:46298)
        at aS (/Users/kasir.barati/projects/my-nextjs-journey/node_modules/.pnpm/next@14.0.4_@babel+core@7.23.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:48276)
        at /Users/kasir.barati/projects/my-nextjs-journey/node_modules/.pnpm/next@14.0.4_@babel+core@7.23.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:55195
        at /Users/kasir.barati/projects/my-nextjs-journey/node_modules/.pnpm/next@14.0.4_@babel+core@7.23.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:55862
        at a$ (/Users/kasir.barati/projects/my-nextjs-journey/node_modules/.pnpm/next@14.0.4_@babel+core@7.23.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:55870)
        at Timeout._onTimeout (/Users/kasir.barati/projects/my-nextjs-journey/node_modules/.pnpm/next@14.0.4_@babel+core@7.23.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:4037)
        at listOnTimeout (node:internal/timers:573:17)
        at process.processTimers (node:internal/timers:514:7) { page: '/terms-and-conditions' }
   ```
