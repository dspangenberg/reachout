---
description: "Does nothing."
---

# GtkNothingAction

Does nothing.

```tsx
import { GtkNothingAction } from "@gtkx/jsx/gtk";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → [GtkShortcutAction](.gtkx/reference/gtk/shortcut-action.md) → **GtkNothingAction**

## Static methods

Static methods are called on `Gtk.NothingAction`, imported from `@gtkx/gi/gtk`.

### `get`

```ts
get(): Gtk.NothingAction
```

Gets the nothing action.

This is an action that does nothing and where
activating it always fails.

**Returns** The nothing action

## Props

`ref` receives the `Gtk.NothingAction` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.
