## Code Splitting
- Split up your "bundle" in multiple JS chunks
- Lazy loading

## Lazy Loading
- Avoid loading code a user might never see
- React.lazy
1) Route based code spliting
2) Component based code splitting

## Route based code splitting
Main chunk.js = Header + Dashboard + Chart
||
<>
Main chunk.js = Header + Dashboard   and   x.chunk.js = Chart

## Suspense
- Fallback UI ( when loading the chunk )

## Analyze your bundle
- source-map-explorer library
- `npm i source-map-explorer`
- package.json
1) "analyze": "source-map-explorer build/static/js/*.js"
2) npm run build
3) npm run analyze
