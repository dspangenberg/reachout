---
description: "Triggers when a specific mnemonic is pressed."
---

# GtkMnemonicTrigger

Triggers when a specific mnemonic is pressed.

Mnemonics require a *mnemonic modifier* (typically <kbd>Alt</kbd>) to be
pressed together with the mnemonic key.

```tsx
import { GtkMnemonicTrigger } from "@gtkx/jsx/gtk";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → [GtkShortcutTrigger](.gtkx/reference/gtk/shortcut-trigger.md) → **GtkMnemonicTrigger**

## Static methods

Static methods are called on `Gtk.MnemonicTrigger`, imported from `@gtkx/gi/gtk`.

### `new`

```ts
new(keyval: number): Gtk.MnemonicTrigger
```

Creates a `GtkShortcutTrigger` that will trigger whenever the key with
the given `keyval` is pressed and mnemonics have been activated.

Mnemonics are activated by calling code when a key event with the right
modifiers is detected.

**Parameters**

- `keyval`: The keyval to trigger for

**Returns** A new `GtkShortcutTrigger`

## Props

`ref` receives the `Gtk.MnemonicTrigger` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.

### `keyval`

`number` · default `0` · construct-only

The key value for the trigger.

## Methods

Methods are called on the `Gtk.MnemonicTrigger` instance, obtained with the `ref` prop or imported from `@gtkx/gi/gtk`. Methods inherited from ancestors are documented on their own pages.

### `getKeyval`

```ts
getKeyval(): number
```

Gets the keyval that must be pressed to succeed triggering `self`.

**Returns** the keyval
