---
description: "A GL based renderer."
---

# GskNglRenderer

A GL based renderer.

See `Gsk.Renderer`.

```tsx
import { GskNglRenderer } from "@gtkx/jsx/gsk";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → [GskRenderer](.gtkx/reference/gsk/renderer.md) → **GskNglRenderer**

## Static methods

Static methods are called on `Gsk.NglRenderer`, imported from `@gtkx/gi/gsk`.

### `new`

```ts
new(): Gsk.Renderer
```

Same as `gsk_gl_renderer_new()`.

**Returns** a GL renderer

> **Deprecated since 4.18.** Use `gsk_gl_renderer_new()`

## Props

`ref` receives the `Gsk.NglRenderer` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.
