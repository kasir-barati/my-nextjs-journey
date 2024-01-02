# Start app

```cmd
pnpm i --frozen-lockfile
pnpm dev
```

# Bug

open `libs/hooks/use-update-effect.hook.spec.tsx` and run that test case
Or: `node 'node_modules/jest/bin/jest.js' '/Users/kasir.barati/projects/my-nextjs-journey/libs/hooks/use-update-effect.hook.spec.tsx' -t 'useUpdateEffect should not call the callback on the first render, but should on subsequent renders'`
Or: `pnpm test`

```cmd
 FAIL  libs/hooks/use-update-effect.hook.spec.tsx
  useUpdateEffect
    ✕ should not call the callback on the first render, but should on subsequent renders (8 ms)

  ● useUpdateEffect › should not call the callback on the first render, but should on subsequent renders

    expect(jest.fn()).toHaveBeenCalledTimes(expected)

    Expected number of calls: 1
    Received number of calls: 0

      16 |         // The second render invokes the callback.
      17 |         act(() => rerender({ fakeDependency: 1 }));
    > 18 |         expect(effectCallback).toHaveBeenCalledTimes(1);
         |                                ^
      19 |     });
      20 | });
      21 |

      at Object.<anonymous> (libs/hooks/use-update-effect.hook.spec.tsx:18:32)
```
