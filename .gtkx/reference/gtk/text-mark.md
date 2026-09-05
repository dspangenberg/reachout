---
description: "Marks a position in a GtkTextbuffer that is preserved across modifications."
---

# GtkTextMark

Marks a position in a `GtkTextbuffer` that is preserved
across modifications.

You may wish to begin by reading the
[text widget conceptual overview](section-text-widget.html),
which gives an overview of all the objects and data types
related to the text widget and how they work together.

A `GtkTextMark` is like a bookmark in a text buffer; it preserves
a position in the text. You can convert the mark to an iterator using
`Gtk.TextBuffer.getIterAtMark()`. Unlike iterators, marks remain
valid across buffer mutations, because their behavior is defined when
text is inserted or deleted. When text containing a mark is deleted,
the mark remains in the position originally occupied by the deleted
text. When text is inserted at a mark, a mark with “left gravity” will
be moved to the beginning of the newly-inserted text, and a mark with
“right gravity” will be moved to the end.

Note that “left” and “right” here refer to logical direction (left
is the toward the start of the buffer); in some languages such as
Hebrew the logically-leftmost text is not actually on the left when
displayed.

Marks are reference counted, but the reference count only controls
the validity of the memory; marks can be deleted from the buffer at
any time with `Gtk.TextBuffer.deleteMark()`. Once deleted from
the buffer, a mark is essentially useless.

Marks optionally have names; these can be convenient to avoid passing
the `GtkTextMark` object around.

Marks are typically created using the `Gtk.TextBuffer.createMark()`
function.

```tsx
import { GtkTextMark } from "@gtkx/jsx/gtk";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → **GtkTextMark**

## Static methods

Static methods are called on `Gtk.TextMark`, imported from `@gtkx/gi/gtk`.

### `new`

```ts
new(name: string | null, leftGravity: boolean): Gtk.TextMark
```

Creates a text mark.

Add it to a buffer using `Gtk.TextBuffer.addMark()`.
If `name` is `null`, the mark is anonymous; otherwise, the mark can be
retrieved by name using `Gtk.TextBuffer.getMark()`. If a mark
has left gravity, and text is inserted at the mark’s current location,
the mark will be moved to the left of the newly-inserted text. If the
mark has right gravity (`left_gravity` = `false`), the mark will end up
on the right of newly-inserted text. The standard left-to-right cursor
is a mark with right gravity (when you type, the cursor stays on the
right side of the text you’re typing).

**Parameters**

- `name`: mark name
- `leftGravity`: whether the mark should have left gravity

**Returns** new `GtkTextMark`

## Props

`ref` receives the `Gtk.TextMark` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.

### `leftGravity`

`boolean` · default `false` · construct-only

Whether the mark has left gravity.

When text is inserted at the mark’s current location, if the mark
has left gravity it will be moved to the left of the newly-inserted
text, otherwise to the right.

### `name`

`string` · default `null` · construct-only

The name of the mark or `null` if the mark is anonymous.

## Methods

Methods are called on the `Gtk.TextMark` instance, obtained with the `ref` prop or imported from `@gtkx/gi/gtk`. Methods inherited from ancestors are documented on their own pages.

### `getBuffer`

```ts
getBuffer(): Gtk.TextBuffer | null
```

Gets the buffer this mark is located inside.

Returns `null` if the mark is deleted.

**Returns** the mark’s `GtkTextBuffer`

### `getDeleted`

```ts
getDeleted(): boolean
```

Returns `true` if the mark has been removed from its buffer.

See `Gtk.TextBuffer.addMark()` for a way to add it
to a buffer again.

**Returns** whether the mark is deleted

### `getLeftGravity`

```ts
getLeftGravity(): boolean
```

Determines whether the mark has left gravity.

**Returns** `true` if the mark has left gravity, `false` otherwise

### `getName`

```ts
getName(): string | null
```

Returns the mark name.

Returns `null` for anonymous marks.

**Returns** mark name

### `getVisible`

```ts
getVisible(): boolean
```

Returns `true` if the mark is visible.

A cursor is displayed for visible marks.

**Returns** `true` if visible

### `setVisible`

```ts
setVisible(setting: boolean): void
```

Sets the visibility of `mark`.

The insertion point is normally visible, i.e. you can see it as
a vertical bar. Also, the text widget uses a visible mark to
indicate where a drop will occur when dragging-and-dropping text.
Most other marks are not visible.

Marks are not visible by default.

**Parameters**

- `setting`: visibility of mark
