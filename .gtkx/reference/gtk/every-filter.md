---
description: "Matches an item when each of its filters matches."
---

# GtkEveryFilter

Matches an item when each of its filters matches.

To add filters to a `GtkEveryFilter`, use `Gtk.MultiFilter.append()`.

```tsx
import { GtkEveryFilter } from "@gtkx/jsx/gtk";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → [GtkFilter](.gtkx/reference/gtk/filter.md) → [GtkMultiFilter](.gtkx/reference/gtk/multi-filter.md) → **GtkEveryFilter**

Implements `GListModel`, `GtkBuildable`.

## Static methods

Static methods are called on `Gtk.EveryFilter`, imported from `@gtkx/gi/gtk`.

### `new`

```ts
new(): Gtk.EveryFilter
```

Creates a new empty "every" filter.

Use `Gtk.MultiFilter.append()` to add filters to it.

This filter matches an item if each of the filters added to it
matches the item. In particular, this means that if no filter
has been added to it, the filter matches every item.

**Returns** a new `GtkEveryFilter`

## Props

`ref` receives the `Gtk.EveryFilter` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.
