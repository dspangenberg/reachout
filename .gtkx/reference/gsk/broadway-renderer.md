---
description: "A Broadway based renderer."
---

# GskBroadwayRenderer

A Broadway based renderer.

See `Gsk.Renderer`.

```tsx
import { GskBroadwayRenderer } from "@gtkx/jsx/gsk";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → [GskRenderer](.gtkx/reference/gsk/renderer.md) → **GskBroadwayRenderer**

## Static methods

Static methods are called on `Gsk.BroadwayRenderer`, imported from `@gtkx/gi/gsk`.

### `new`

```ts
new(): Gsk.Renderer
```

Creates a new Broadway renderer.

The Broadway renderer is the default renderer for the broadway backend.
It will only work with broadway surfaces, otherwise it will fail the
call to `gsk_renderer_realize()`.

This function is only available when GTK was compiled with Broadway
support.

**Returns** a new Broadway renderer.

> **Deprecated since 4.20.** Broadway will be retired in GTK 5

## Props

`ref` receives the `Gsk.BroadwayRenderer` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.
