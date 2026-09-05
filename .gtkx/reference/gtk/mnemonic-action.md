---
description: "Activates a widget with a mnemonic."
---

# GtkMnemonicAction

Activates a widget with a mnemonic.

This means that `Gtk.Widget.mnemonicActivate()` is called.

```tsx
import { GtkMnemonicAction } from "@gtkx/jsx/gtk";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → [GtkShortcutAction](.gtkx/reference/gtk/shortcut-action.md) → **GtkMnemonicAction**

## Static methods

Static methods are called on `Gtk.MnemonicAction`, imported from `@gtkx/gi/gtk`.

### `get`

```ts
get(): Gtk.MnemonicAction
```

Gets the mnemonic action.

This is an action that calls `gtk_widget_mnemonic_activate()`
on the given widget upon activation.

**Returns** The mnemonic action

## Props

`ref` receives the `Gtk.MnemonicAction` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.
