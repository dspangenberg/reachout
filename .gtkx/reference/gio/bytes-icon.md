---
description: "GBytesIcon specifies an image held in memory in a common format (usually PNG) to be used as icon."
---

# GBytesIcon

`GBytesIcon` specifies an image held in memory in a common format (usually
PNG) to be used as icon.

_Available since 2.38._

```tsx
import { GBytesIcon } from "@gtkx/jsx/gio";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → **GBytesIcon**

Implements `GIcon`, `GLoadableIcon`.

## Static methods

Static methods are called on `Gio.BytesIcon`, imported from `@gtkx/gi/gio`.

### `new`

```ts
new(bytes: GLib.Bytes): Gio.BytesIcon
```

Creates a new icon for a bytes.

This cannot fail, but loading and interpreting the bytes may fail later on
(for example, if `g_loadable_icon_load()` is called) if the image is invalid.

**Parameters**

- `bytes`: a `GBytes`.

**Returns** a `GIcon` for the given
  `bytes`.

_Available since 2.38._

## Props

`ref` receives the `Gio.BytesIcon` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.

### `bytes`

`GLib.Bytes` · construct-only

The bytes containing the icon.

## Methods

Methods are called on the `Gio.BytesIcon` instance, obtained with the `ref` prop or imported from `@gtkx/gi/gio`. Methods inherited from ancestors are documented on their own pages.

### `getBytes`

```ts
getBytes(): GLib.Bytes
```

Gets the `GBytes` associated with the given `icon`.

**Returns** a `GBytes`.

_Available since 2.38._
