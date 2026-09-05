---
description: "A layout manager for widgets with a single child."
---

# GtkBinLayout

A layout manager for widgets with a single child.

`GtkBinLayout` will stack each child of a widget on top of each other,
using the `Gtk.Widget.hexpand`, `Gtk.Widget.vexpand`,
`Gtk.Widget.halign`, and `Gtk.Widget.valign` properties
of each child to determine where they should be positioned.

```tsx
import { GtkBinLayout } from "@gtkx/jsx/gtk";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → [GtkLayoutManager](.gtkx/reference/gtk/layout-manager.md) → **GtkBinLayout**

## Static methods

Static methods are called on `Gtk.BinLayout`, imported from `@gtkx/gi/gtk`.

### `new`

```ts
new(): Gtk.LayoutManager
```

Creates a new `GtkBinLayout` instance.

**Returns** the newly created `GtkBinLayout`

## Props

`ref` receives the `Gtk.BinLayout` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.
