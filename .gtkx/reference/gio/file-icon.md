---
description: "GFileIcon specifies an icon by pointing to an image file to be used as icon."
---

# GFileIcon

`GFileIcon` specifies an icon by pointing to an image file
to be used as icon.

It implements `Gio.LoadableIcon`.

```tsx
import { GFileIcon } from "@gtkx/jsx/gio";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → **GFileIcon**

Implements `GIcon`, `GLoadableIcon`.

## Static methods

Static methods are called on `Gio.FileIcon`, imported from `@gtkx/gi/gio`.

### `new`

```ts
new(file: Gio.File): Gio.FileIcon
```

Creates a new icon for a file.

**Parameters**

- `file`: a `GFile`.

**Returns** a `GIcon` for the given
  `file`, or `null` on error.

## Props

`ref` receives the `Gio.FileIcon` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.

### `file`

`Gio.File` · construct-only

The file containing the icon.

## Methods

Methods are called on the `Gio.FileIcon` instance, obtained with the `ref` prop or imported from `@gtkx/gi/gio`. Methods inherited from ancestors are documented on their own pages.

### `getFile`

```ts
getFile(): Gio.File
```

Gets the `GFile` associated with the given `icon`.

**Returns** a `GFile`.
