---
description: "Invokes a callback."
---

# GtkCallbackAction

Invokes a callback.

```tsx
import { GtkCallbackAction } from "@gtkx/jsx/gtk";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → [GtkShortcutAction](.gtkx/reference/gtk/shortcut-action.md) → **GtkCallbackAction**

## Static methods

Static methods are called on `Gtk.CallbackAction`, imported from `@gtkx/gi/gtk`.

### `new`

```ts
new(callback: Gtk.ShortcutFunc): Gtk.CallbackAction
```

Create a custom action that calls the given `callback` when
activated.

**Parameters**

- `callback`: the callback to call when the action is activated

**Returns** A new shortcut action

## Props

`ref` receives the `Gtk.CallbackAction` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.
