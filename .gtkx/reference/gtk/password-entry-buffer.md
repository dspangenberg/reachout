---
description: "A GtkEntryBuffer that locks the underlying memory to prevent it from being swapped to disk."
---

# GtkPasswordEntryBuffer

A `GtkEntryBuffer` that locks the underlying memory to prevent it
from being swapped to disk.

`GtkPasswordEntry` uses a `GtkPasswordEntryBuffer`.

_Available since 4.4._

```tsx
import { GtkPasswordEntryBuffer } from "@gtkx/jsx/gtk";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → [GtkEntryBuffer](.gtkx/reference/gtk/entry-buffer.md) → **GtkPasswordEntryBuffer**

## Static methods

Static methods are called on `Gtk.PasswordEntryBuffer`, imported from `@gtkx/gi/gtk`.

### `new`

```ts
new(): Gtk.EntryBuffer
```

Creates a new `GtkEntryBuffer` using secure memory allocations.

**Returns** the newly created instance

## Props

`ref` receives the `Gtk.PasswordEntryBuffer` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.
