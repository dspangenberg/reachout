---
description: "Marks a spot in a GtkTextBuffer where child widgets can be “anchored”."
---

# GtkTextChildAnchor

Marks a spot in a `GtkTextBuffer` where child widgets can be “anchored”.

The anchor can have multiple widgets anchored, to allow for multiple views.

```tsx
import { GtkTextChildAnchor } from "@gtkx/jsx/gtk";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → **GtkTextChildAnchor**

## Static methods

Static methods are called on `Gtk.TextChildAnchor`, imported from `@gtkx/gi/gtk`.

### `new`

```ts
new(): Gtk.TextChildAnchor
```

Creates a new `GtkTextChildAnchor`.

Usually you would then insert it into a `GtkTextBuffer` with
`Gtk.TextBuffer.insertChildAnchor()`. To perform the
creation and insertion in one step, use the convenience
function `Gtk.TextBuffer.createChildAnchor()`.

**Returns** a new `GtkTextChildAnchor`

### `newWithReplacement`

```ts
newWithReplacement(character: string): Gtk.TextChildAnchor
```

Creates a new `GtkTextChildAnchor` with the given replacement character.

Usually you would then insert it into a `GtkTextBuffer` with
`Gtk.TextBuffer.insertChildAnchor()`.

**Parameters**

- `character`: a replacement character

**Returns** a new `GtkTextChildAnchor`

_Available since 4.6._

## Props

`ref` receives the `Gtk.TextChildAnchor` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.

### `children`

`ReactNode`

Elements attached to the element's default child slot, or its text for elements that hold text.

### `paintable`

`Gdk.Paintable | null`

Image inserted into the buffer instead of an anchored widget; giving both is an error.

## Methods

Methods are called on the `Gtk.TextChildAnchor` instance, obtained with the `ref` prop or imported from `@gtkx/gi/gtk`. Methods inherited from ancestors are documented on their own pages.

### `getDeleted`

```ts
getDeleted(): boolean
```

Determines whether a child anchor has been deleted from
the buffer.

**Returns** `true` if the child anchor has been deleted from its buffer

### `getWidgets`

```ts
getWidgets(): Gtk.Widget[]
```

Gets a list of all widgets anchored at this child anchor.

The order in which the widgets are returned is not defined.

**Returns** an
  array of widgets anchored at `anchor`
