---
description: "A GdkTexture representing image data in memory."
---

# GdkMemoryTexture

A `GdkTexture` representing image data in memory.

```tsx
import { GdkMemoryTexture } from "@gtkx/jsx/gdk";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → [GdkTexture](.gtkx/reference/gdk/texture.md) → **GdkMemoryTexture**

Implements `GdkPaintable`, `GIcon`, `GLoadableIcon`.

## Static methods

Static methods are called on `Gdk.MemoryTexture`, imported from `@gtkx/gi/gdk`.

### `new`

```ts
new(width: number, height: number, format: Gdk.MemoryFormat, bytes: GLib.Bytes, stride: number): Gdk.MemoryTexture
```

Creates a new texture for a blob of image data.

The `GBytes` must contain `stride` × `height` pixels
in the given format.

**Parameters**

- `width`: the width of the texture
- `height`: the height of the texture
- `format`: the format of the data
- `bytes`: the `GBytes` containing the pixel data
- `stride`: rowstride for the data

**Returns** A newly-created `GdkTexture`

## Props

`ref` receives the `Gdk.MemoryTexture` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.
