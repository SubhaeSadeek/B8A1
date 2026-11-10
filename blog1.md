# Blog 1

### Question:

- What are the core differences between type aliases and interface in TypeScript? When should you choose one over the other?

### Difference 01

The core differences between `type aliases` and `interface` are significant. If you think of `tyoe aliases`, it is used mainly for literal types and widely used for `union` . So it is clear that, for object typing, it is hard with type aliases. This is the major difference and stricking contrast between the two.

### Difference 02

Syntaxt of type aliases and interface is quite different.
for type aliases:

```ts
type User = {
  name: string;
  age: number;
  email: string;
};
```

for interface:

```ts
interface User {
  name: string;
  age: number;
  email: string;
}
```

### Difference 03

for interface, we use extend to get object type elaborated while type aliase does not support extends.
