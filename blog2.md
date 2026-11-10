# Blog 2

### Question:

- Provide a practical example of combining Union (|) and Intersection (&) types in TypeScript.

### Intersection (&) Type

- intersection combines all the properties from multiple types
- It can be called a merger tool which basically merge two or more types and includes all of properties of types intersecting.
- The new type is created that must satisfy both sides.

### Union (|) Type

- union actually combine explicitely, meaning to choose from either one not mmerged actually
- It can be called a choice picker broadeing the choice of type which are combined but mutally exclusive. Like either this one or that one.
- The new type is created that must satisfy only one side by picking any one among the union.

### Practical Example

Suppose we have a book shop where both physiscal and e book are sold. Physical book has weight, dimension, delivery etc. On the other hand e-book has downoad link etc. both has distnct feature. Bu as they both are books, they have also some common features as well.

- all products have in common:

```ts
type Book = {
  id: string;
  title: string;
  price: number;
};
```

-Physical book:

```ts
type PhysicalBook = {
  format: "physical";
  weight: number;
  inStock: boolean;
};
```

- e-book

```ts
type EBook = {
  format: "ebook";
  downloadUrl: string;
  fileSizeMb: number;
};
```

lets do the both to create new types. lets say when we want to bring general Book type into any of physical or e book type, we will use intersection to have both merged into one new type.

```ts
type PhysicalBookProducting = BaseProduct & PhysicalBook;
```

result:

```ts
const physicalBook: PhysicalBookProduct = {
  id: "p1",
  title: "The Hobbit",
  price: 15.99,
  format: "physical",
  weightKg: 0.4,
  inStock: true,
};
```

but in union:

```ts
type Product = EBook | PhysicalBook;
```

```ts
const ProductForEBook: Product = {
  format: "ebook";
  downloadUrl: www.mybookshop/ebook/harry-potter;
  fileSizeMb: 1.02;
}
```
