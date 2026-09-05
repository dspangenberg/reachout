---
description: "Triggers when a specific keyval and modifiers are pressed."
---

# GtkKeyvalTrigger

Triggers when a specific keyval and modifiers are pressed.

```tsx
import { GtkKeyvalTrigger } from "@gtkx/jsx/gtk";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → [GtkShortcutTrigger](.gtkx/reference/gtk/shortcut-trigger.md) → **GtkKeyvalTrigger**

## Static methods

Static methods are called on `Gtk.KeyvalTrigger`, imported from `@gtkx/gi/gtk`.

### `new`

```ts
new(keyval: number, modifiers: Gdk.ModifierType): Gtk.ShortcutTrigger
```

Creates a `GtkShortcutTrigger` that will trigger whenever
the key with the given `keyval` and `modifiers` is pressed.

**Parameters**

- `keyval`: The keyval to trigger for
- `modifiers`: the modifiers that need to be present

**Returns** A new `GtkShortcutTrigger`

## Props

`ref` receives the `Gtk.KeyvalTrigger` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.

### `keyval`

`number` · default `0` · construct-only

The key value for the trigger.

### `modifiers`

`Gdk.ModifierType` · default `GDK_NO_MODIFIER_MASK` · construct-only

The key modifiers for the trigger.

## Methods

Methods are called on the `Gtk.KeyvalTrigger` instance, obtained with the `ref` prop or imported from `@gtkx/gi/gtk`. Methods inherited from ancestors are documented on their own pages.

### `getKeyval`

```ts
getKeyval(): number
```

Gets the keyval that must be pressed to succeed
triggering `self`.

**Returns** the keyval

### `getModifiers`

```ts
getModifiers(): Gdk.ModifierType
```

Gets the modifiers that must be present to succeed
triggering `self`.

**Returns** the modifiers
