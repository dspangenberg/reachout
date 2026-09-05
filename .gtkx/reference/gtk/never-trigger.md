---
description: "A GtkShortcutTrigger that never triggers."
---

# GtkNeverTrigger

A `GtkShortcutTrigger` that never triggers.

```tsx
import { GtkNeverTrigger } from "@gtkx/jsx/gtk";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → [GtkShortcutTrigger](.gtkx/reference/gtk/shortcut-trigger.md) → **GtkNeverTrigger**

## Static methods

Static methods are called on `Gtk.NeverTrigger`, imported from `@gtkx/gi/gtk`.

### `get`

```ts
get(): Gtk.NeverTrigger
```

Gets the never trigger.

This is a singleton for a trigger that never triggers.
Use this trigger instead of `null` because it implements
all virtual functions.

**Returns** The never trigger

## Props

`ref` receives the `Gtk.NeverTrigger` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.
