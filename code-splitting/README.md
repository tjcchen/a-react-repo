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