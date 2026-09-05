---
description: "Used to create and destroy cursors."
---

# GdkCursor

Used to create and destroy cursors.

Cursors are immutable objects, so once you created them, there is no way
to modify them later. You should create a new cursor when you want to change
something about it.

Cursors by themselves are not very interesting: they must be bound to a
window for users to see them. This is done with `Gdk.Surface.setCursor()`
or `Gdk.Surface.setDeviceCursor()`. Applications will typically
use higher-level GTK functions such as [`gtk_widget_set_cursor()`](../gtk4/method.Widget.set_cursor.html)
instead.

Cursors are not bound to a given `Gdk.Display`, so they can be shared.
However, the appearance of cursors may vary when used on different
platforms.

### Named and texture cursors

There are multiple ways to create cursors. The platform's own cursors
can be created with `Gdk.Cursor.newFromName()`. That function lists
the commonly available names that are shared with the CSS specification.
Other names may be available, depending on the platform in use. On some
platforms, what images are used for named cursors may be influenced by
the cursor theme.

Another option to create a cursor is to use `Gdk.Cursor.newFromTexture()`
and provide an image to use for the cursor.

To ease work with unsupported cursors, a fallback cursor can be provided.
If a `Gdk.Surface` cannot use a cursor because of the reasons mentioned
above, it will try the fallback cursor. Fallback cursors can themselves have
fallback cursors again, so it is possible to provide a chain of progressively
easier to support cursors. If none of the provided cursors can be supported,
the default cursor will be the ultimate fallback.

```tsx
import { GdkCursor } from "@gtkx/jsx/gdk";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → **GdkCursor**

## Static methods

Static methods are called on `Gdk.Cursor`, imported from `@gtkx/gi/gdk`.

### `newFromCallback`

```ts
newFromCallback(callback: Gdk.CursorGetTextureCallback, fallback: Gdk.Cursor | null): Gdk.Cursor | null
```

Creates a new callback-based cursor object.

Cursors of this kind produce textures for the cursor
image on demand, when the `callback` is called.

**Parameters**

- `callback`: the `GdkCursorGetTextureCallback`
- `fallback`: the `GdkCursor` to fall back to when this one cannot be supported

**Returns** a new `GdkCursor`

_Available since 4.16._

### `newFromName`

```ts
newFromName(name: string, fallback: Gdk.Cursor | null): Gdk.Cursor | null
```

Creates a new cursor by looking up `name` in the current cursor
theme.

A recommended set of cursor names that will work across different
platforms can be found in the CSS specification:

| | | |
| --- | --- | --- |
|                               | "none"          | No cursor |
| ![](default_cursor.png)       | "default"       | The default cursor |
| ![](help_cursor.png)          | "help"          | Help is available |
| ![](pointer_cursor.png)       | "pointer"       | Indicates a link or interactive element |
| ![](context_menu_cursor.png)  |"context-menu"   | A context menu is available |
| ![](progress_cursor.png)      | "progress"      | Progress indicator |
| ![](wait_cursor.png)          | "wait"          | Busy cursor |
| ![](cell_cursor.png)          | "cell"          | Cell(s) may be selected |
| ![](crosshair_cursor.png)     | "crosshair"     | Simple crosshair |
| ![](text_cursor.png)          | "text"          | Text may be selected |
| ![](vertical_text_cursor.png) | "vertical-text" | Vertical text may be selected |
| ![](alias_cursor.png)         | "alias"         | DND: Something will be linked |
| ![](copy_cursor.png)          | "copy"          | DND: Something will be copied |
| ![](move_cursor.png)          | "move"          | DND: Something will be moved |
| ![](dnd_ask_cursor.png)       | "dnd-ask"       | DND: User can choose action to be carried out |
| ![](no_drop_cursor.png)       | "no-drop"       | DND: Can't drop here |
| ![](not_allowed_cursor.png)   | "not-allowed"   | DND: Action will not be carried out |
| ![](grab_cursor.png)          | "grab"          | DND: Something can be grabbed |
| ![](grabbing_cursor.png)      | "grabbing"      | DND: Something is being grabbed |
| ![](n_resize_cursor.png)      | "n-resize"      | Resizing: Move north border |
| ![](e_resize_cursor.png)      | "e-resize"      | Resizing: Move east border |
| ![](s_resize_cursor.png)      | "s-resize"      | Resizing: Move south border |
| ![](w_resize_cursor.png)      | "w-resize"      | Resizing: Move west border |
| ![](ne_resize_cursor.png)     | "ne-resize"     | Resizing: Move north-east corner |
| ![](nw_resize_cursor.png)     | "nw-resize"     | Resizing: Move north-west corner |
| ![](sw_resize_cursor.png)     | "sw-resize"     | Resizing: Move south-west corner |
| ![](se_resize_cursor.png)     | "se-resize"     | Resizing: Move south-east corner |
| ![](col_resize_cursor.png)    | "col-resize"    | Resizing: Move an item or border horizontally |
| ![](row_resize_cursor.png)    | "row-resize"    | Resizing: Move an item or border vertically |
| ![](ew_resize_cursor.png)     | "ew-resize"     | Moving: Something can be moved horizontally |
| ![](ns_resize_cursor.png)     | "ns-resize"     | Moving: Something can be moved vertically |
| ![](nesw_resize_cursor.png)   | "nesw-resize"   | Moving: Something can be moved diagonally, north-east to south-west |
| ![](nwse_resize_cursor.png)   | "nwse-resize"   | Moving: something can be moved diagonally, north-west to south-east |
| ![](all_resize_cursor.png)    | "all-resize"    | Moving: Something can be moved in any direction |
| ![](all_scroll_cursor.png)    | "all-scroll"    | Can scroll in any direction |
| ![](zoom_in_cursor.png)       | "zoom-in"       | Zoom in |
| ![](zoom_out_cursor.png)      | "zoom-out"      | Zoom out |

**Parameters**

- `name`: the name of the cursor
- `fallback`: `null` or the `GdkCursor` to fall back to when this one cannot be supported

**Returns** a new `GdkCursor`, or `null` if there is no
  cursor with the given name

### `newFromTexture`

```ts
newFromTexture(texture: Gdk.Texture, hotspotX: number, hotspotY: number, fallback: Gdk.Cursor | null): Gdk.Cursor
```

Creates a new cursor from a `GdkTexture`.

**Parameters**

- `texture`: the texture providing the pixel data
- `hotspotX`: the horizontal offset of the “hotspot” of the cursor
- `hotspotY`: the vertical offset of the “hotspot” of the cursor
- `fallback`: the `GdkCursor` to fall back to when this one cannot be supported

**Returns** a new `GdkCursor`

## Props

`ref` receives the `Gdk.Cursor` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.

### `fallback`

`Gdk.Cursor` · construct-only

Cursor to fall back to if this cursor cannot be displayed.

### `hotspotX`

`number` · default `0` · construct-only

X position of the cursor hotspot in the cursor image.

### `hotspotY`

`number` · default `0` · construct-only

Y position of the cursor hotspot in the cursor image.

### `name`

`string` · default `null` · construct-only

Name of this this cursor.

The name will be `null` if the cursor was created from a texture.

### `texture`

`Gdk.Texture` · construct-only

The texture displayed by this cursor.

The texture will be `null` if the cursor was created from a name.

## Methods

Methods are called on the `Gdk.Cursor` instance, obtained with the `ref` prop or imported from `@gtkx/gi/gdk`. Methods inherited from ancestors are documented on their own pages.

### `getFallback`

```ts
getFallback(): Gdk.Cursor | null
```

Returns the fallback for this `cursor`.

The fallback will be used if this cursor is not available on a given
`GdkDisplay`. For named cursors, this can happen when using nonstandard
names or when using an incomplete cursor theme. For textured cursors,
this can happen when the texture is too large or when the `GdkDisplay`
it is used on does not support textured cursors.

**Returns** the fallback of the cursor or `null`
  to use the default cursor as fallback

### `getHotspotX`

```ts
getHotspotX(): number
```

Returns the horizontal offset of the hotspot.

The hotspot indicates the pixel that will be directly above the cursor.

Note that named cursors may have a nonzero hotspot, but this function
will only return the hotspot position for cursors created with
`Gdk.Cursor.newFromTexture()`.

**Returns** the horizontal offset of the hotspot or 0 for named cursors

### `getHotspotY`

```ts
getHotspotY(): number
```

Returns the vertical offset of the hotspot.

The hotspot indicates the pixel that will be directly above the cursor.

Note that named cursors may have a nonzero hotspot, but this function
will only return the hotspot position for cursors created with
`Gdk.Cursor.newFromTexture()`.

**Returns** the vertical offset of the hotspot or 0 for named cursors

### `getName`

```ts
getName(): string | null
```

Returns the name of the cursor.

If the cursor is not a named cursor, `null` will be returned.

**Returns** the name of the cursor or `null`
  if it is not a named cursor

### `getTexture`

```ts
getTexture(): Gdk.Texture | null
```

Returns the texture for the cursor.

If the cursor is a named cursor, `null` will be returned.

**Returns** the texture for cursor or `null`
  if it is a named cursor
