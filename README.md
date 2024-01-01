# Start app

```cmd
pnpm i --frozen-lockfile
pnpm dev
```

# Bug

open `libs/hooks/use-update-effect.hook.spec.tsx` and run that test case
Or a bit harder but still same (with other failing test scenarios :sweat:): `pnpm test`

```cmd
node 'node_modules/jest/bin/jest.js' '/Users/kasir.barati/projects/my-nextjs-journey/libs/hooks/use-update-effect.hook.spec.tsx' -t
 'useUpdateEffect should call cleanup callback on unmount not rerender'
 FAIL  libs/hooks/use-update-effect.hook.spec.tsx
  useUpdateEffect
    ✕ should call cleanup callback on unmount not rerender (12 ms)

  ● useUpdateEffect › should call cleanup callback on unmount not rerender

    expect(received).toBe(expected) // Object.is equality

    Expected: 1
    Received: 0

      28 |         expect(expectedState!).toBe(0);
      29 |         act(() => rerender(<TestComponent dummyProps={2} />));
    > 30 |         expect(expectedState!).toBe(1);
         |                                ^
      31 |         act(() => unmount());
      32 |         act(() => render(<TestComponent dummyProps={3} />));
      33 |         expect(expectedState!).toBe(0);

      at Object.<anonymous> (libs/hooks/use-update-effect.hook.spec.tsx:30:32)
```
