---
description: "Renders a GSK rendernode tree with cairo."
---

# GskCairoRenderer

Renders a GSK rendernode tree with cairo.

Since it is using cairo, this renderer cannot support
3D transformations.

```tsx
import { GskCairoRenderer } from "@gtkx/jsx/gsk";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → [GskRenderer](.gtkx/reference/gsk/renderer.md) → **GskCairoRenderer**

## Static methods

Static methods are called on `Gsk.CairoRenderer`, imported from `@gtkx/gi/gsk`.

### `new`

```ts
new(): Gsk.Renderer
```

Creates a new Cairo renderer.

The Cairo renderer is the fallback renderer drawing in ways similar
to how GTK 3 drew its content. Its primary use is as comparison tool.

The Cairo renderer is incomplete. It cannot render 3D transformed
content and will instead render an error marker. Its usage should be
avoided.

**Returns** a new Cairo renderer.

## Props

`ref` receives the `Gsk.CairoRenderer` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.
