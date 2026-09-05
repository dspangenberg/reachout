---
description: "GtkVolumeButton is a GtkScaleButton subclass tailored for volume control."
---

# GtkVolumeButton

`GtkVolumeButton` is a `GtkScaleButton` subclass tailored for
volume control.

> **Deprecated since 4.10.** This widget will be removed in GTK 5

```tsx
import { GtkVolumeButton } from "@gtkx/jsx/gtk";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → [GInitiallyUnowned](.gtkx/reference/gobject/initially-unowned.md) → [GtkWidget](.gtkx/reference/gtk/widget.md) → [GtkScaleButton](.gtkx/reference/gtk/scale-button.md) → **GtkVolumeButton**

Implements `GtkAccessible`, `GtkAccessibleRange`, `GtkBuildable`, `GtkConstraintTarget`, `GtkOrientable`.

## Static methods

Static methods are called on `Gtk.VolumeButton`, imported from `@gtkx/gi/gtk`.

### `new`

```ts
new(): Gtk.Widget
```

Creates a `GtkVolumeButton`.

The button has a range between 0.0 and 1.0, with a stepping of 0.02.
Volume values can be obtained and modified using the functions from
`Gtk.ScaleButton`.

**Returns** a new `GtkVolumeButton`

> **Deprecated since 4.10.** This widget will be removed in GTK 5

## Props

`ref` receives the `Gtk.VolumeButton` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.

### `useSymbolic`

`boolean` · default `true` · deprecated since 4.10

Whether to use symbolic icons as the icons.

Note that if the symbolic icons are not available in your installed
theme, then the normal (potentially colorful) icons will be used.

> **Deprecated since 4.10.** This widget will be removed in GTK 5
