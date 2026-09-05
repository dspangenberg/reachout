---
description: "Activates a widget."
---

# GtkActivateAction

Activates a widget.

Widgets are activated by calling `Gtk.Widget.activate()`.

```tsx
import { GtkActivateAction } from "@gtkx/jsx/gtk";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → [GtkShortcutAction](.gtkx/reference/gtk/shortcut-action.md) → **GtkActivateAction**

## Static methods

Static methods are called on `Gtk.ActivateAction`, imported from `@gtkx/gi/gtk`.

### `get`

```ts
get(): Gtk.ActivateAction
```

Gets the activate action.

This is an action that calls `gtk_widget_activate()`
on the given widget upon activation.

**Returns** The activate action

## Props

`ref` receives the `Gtk.ActivateAction` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.
