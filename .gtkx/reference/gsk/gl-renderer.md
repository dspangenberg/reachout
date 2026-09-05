---
description: "Renders a GSK rendernode tree with OpenGL."
---

# GskGLRenderer

Renders a GSK rendernode tree with OpenGL.

See `Gsk.Renderer`.

_Available since 4.2._

```tsx
import { GskGLRenderer } from "@gtkx/jsx/gsk";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → [GskRenderer](.gtkx/reference/gsk/renderer.md) → **GskGLRenderer**

## Static methods

Static methods are called on `Gsk.GLRenderer`, imported from `@gtkx/gi/gsk`.

### `new`

```ts
new(): Gsk.Renderer
```

Creates an instance of the GL renderer.

**Returns** a GL renderer

## Props

`ref` receives the `Gsk.GLRenderer` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.
