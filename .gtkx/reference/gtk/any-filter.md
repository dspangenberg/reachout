---
description: "Matches an item when at least one of its filters matches."
---

# GtkAnyFilter

Matches an item when at least one of its filters matches.

To add filters to a `GtkAnyFilter`, use `Gtk.MultiFilter.append()`.

```tsx
import { GtkAnyFilter } from "@gtkx/jsx/gtk";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → [GtkFilter](.gtkx/reference/gtk/filter.md) → [GtkMultiFilter](.gtkx/reference/gtk/multi-filter.md) → **GtkAnyFilter**

Implements `GListModel`, `GtkBuildable`.

## Static methods

Static methods are called on `Gtk.AnyFilter`, imported from `@gtkx/gi/gtk`.

### `new`

```ts
new(): Gtk.AnyFilter
```

Creates a new empty "any" filter.

Use `Gtk.MultiFilter.append()` to add filters to it.

This filter matches an item if any of the filters added to it
matches the item. In particular, this means that if no filter
has been added to it, the filter matches no item.

**Returns** a new `GtkAnyFilter`

## Props

`ref` receives the `Gtk.AnyFilter` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.
