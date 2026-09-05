---
description: "Uses closures for size negotiation."
---

# GtkCustomLayout

Uses closures for size negotiation.

A `GtkCustomLayout` uses closures matching to the old `GtkWidget`
virtual functions for size negotiation, as a convenience API to
ease the porting towards the corresponding `GtkLayoutManager`
virtual functions.

```tsx
import { GtkCustomLayout } from "@gtkx/jsx/gtk";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → [GtkLayoutManager](.gtkx/reference/gtk/layout-manager.md) → **GtkCustomLayout**

## Static methods

Static methods are called on `Gtk.CustomLayout`, imported from `@gtkx/gi/gtk`.

### `new`

```ts
new(requestMode: Gtk.CustomRequestModeFunc | null, measure: Gtk.CustomMeasureFunc, allocate: Gtk.CustomAllocateFunc): Gtk.LayoutManager
```

Creates a new legacy layout manager.

Legacy layout managers map to the old `GtkWidget` size negotiation
virtual functions, and are meant to be used during the transition
from layout containers to layout manager delegates.

**Parameters**

- `requestMode`: a function to retrieve the `GtkSizeRequestMode` of the widget using the layout; the default request mode is `GTK_SIZE_REQUEST_CONSTANT_SIZE`
- `measure`: a function to measure the widget using the layout manager
- `allocate`: a function to allocate the children of the widget using the layout manager

**Returns** the newly created `GtkCustomLayout`

## Props

`ref` receives the `Gtk.CustomLayout` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.
