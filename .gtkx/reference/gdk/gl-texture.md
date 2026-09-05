---
description: "A GdkTexture representing a GL texture object."
---

# GdkGLTexture

A `GdkTexture` representing a GL texture object.

```tsx
import { GdkGLTexture } from "@gtkx/jsx/gdk";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → [GdkTexture](.gtkx/reference/gdk/texture.md) → **GdkGLTexture**

Implements `GdkPaintable`, `GIcon`, `GLoadableIcon`.

## Static methods

Static methods are called on `Gdk.GLTexture`, imported from `@gtkx/gi/gdk`.

### `new`

```ts
new(context: Gdk.GLContext, id: number, width: number, height: number, destroy: GLib.DestroyNotify, data: bigint | null): Gdk.GLTexture
```

Creates a new texture for an existing GL texture.

Note that the GL texture must not be modified until `destroy` is called,
which will happen when the GdkTexture object is finalized, or due to
an explicit call of `Gdk.GLTexture.release()`.

**Parameters**

- `context`: a `GdkGLContext`
- `id`: the ID of a texture that was created with `context`
- `width`: the nominal width of the texture
- `height`: the nominal height of the texture
- `destroy`: a destroy notify that will be called when the GL resources are released
- `data`: data that gets passed to `destroy`

**Returns** A newly-created
  `GdkTexture`

> **Deprecated since 4.12.** `Gdk.GLTextureBuilder` supersedes this function and provides extended functionality for creating GL textures.

## Props

`ref` receives the `Gdk.GLTexture` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.

## Methods

Methods are called on the `Gdk.GLTexture` instance, obtained with the `ref` prop or imported from `@gtkx/gi/gdk`. Methods inherited from ancestors are documented on their own pages.

### `release`

```ts
release(): void
```

Releases the GL resources held by a `GdkGLTexture`.

The texture contents are still available via the
`Gdk.Texture.download()` function, after this
function has been called.
