---
description: "A GtkRoot implementation for drag icons."
---

# GtkDragIcon

A `GtkRoot` implementation for drag icons.

A drag icon moves with the pointer during a Drag-and-Drop operation
and is destroyed when the drag ends.

To set up a drag icon and associate it with an ongoing drag operation,
use `Gtk.DragIcon.getForDrag()` to get the icon for a drag. You can
then use it like any other widget and use `Gtk.DragIcon.setChild()`
to set whatever widget should be used for the drag icon.

Keep in mind that drag icons do not allow user input.

```tsx
import { GtkDragIcon } from "@gtkx/jsx/gtk";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → [GInitiallyUnowned](.gtkx/reference/gobject/initially-unowned.md) → [GtkWidget](.gtkx/reference/gtk/widget.md) → **GtkDragIcon**

Implements `GtkAccessible`, `GtkBuildable`, `GtkConstraintTarget`, `GtkNative`, `GtkRoot`.

## Static methods

Static methods are called on `Gtk.DragIcon`, imported from `@gtkx/gi/gtk`.

### `createWidgetForValue`

```ts
createWidgetForValue(value: GObject.Value | JsValue): Gtk.Widget | null
```

Creates a widget that can be used as a drag icon for the given
`value`.

Supported types include strings, `GdkRGBA` and `GtkTextBuffer`.
If GTK does not know how to create a widget for a given value,
it will return `null`.

This method is used to set the default drag icon on drag-and-drop
operations started by `GtkDragSource`, so you don't need to set
a drag icon using this function there.

**Parameters**

- `value`: a `GValue`

**Returns** A new `GtkWidget`
  for displaying `value` as a drag icon.

### `getForDrag`

```ts
getForDrag(drag: Gdk.Drag): Gtk.Widget
```

Gets the `GtkDragIcon` in use with `drag`.

If no drag icon exists yet, a new one will be created
and shown.

**Parameters**

- `drag`: a `GdkDrag`

**Returns** the `GtkDragIcon`

### `setFromPaintable`

```ts
setFromPaintable(drag: Gdk.Drag, paintable: Gdk.Paintable, hotX: number, hotY: number): void
```

Creates a `GtkDragIcon` that shows `paintable`, and associates
it with the drag operation.

The hotspot position on the paintable is aligned with the
hotspot of the cursor.

**Parameters**

- `drag`: a `GdkDrag`
- `paintable`: a `GdkPaintable` to display
- `hotX`: X coordinate of the hotspot
- `hotY`: Y coordinate of the hotspot

## Props

`ref` receives the `Gtk.DragIcon` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.

### `children`

`ReactNode`

Elements attached to the element's default child slot, or its text for elements that hold text.

## Methods

Methods are called on the `Gtk.DragIcon` instance, obtained with the `ref` prop or imported from `@gtkx/gi/gtk`. Methods inherited from ancestors are documented on their own pages.

### `getChild`

```ts
getChild(): Gtk.Widget | null
```

Gets the widget currently used as drag icon.

**Returns** The drag icon

### `setChild`

```ts
setChild(child: Gtk.Widget | null): void
```

Sets the widget to display as the drag icon.

**Parameters**

- `child`: a `GtkWidget`
