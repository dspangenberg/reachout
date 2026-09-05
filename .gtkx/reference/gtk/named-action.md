---
description: "Activates a named action."
---

# GtkNamedAction

Activates a named action.

See `Gtk.WidgetClass.installAction()` and
`Gtk.Widget.insertActionGroup()` for ways
to associate named actions with widgets.

```tsx
import { GtkNamedAction } from "@gtkx/jsx/gtk";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → [GtkShortcutAction](.gtkx/reference/gtk/shortcut-action.md) → **GtkNamedAction**

## Static methods

Static methods are called on `Gtk.NamedAction`, imported from `@gtkx/gi/gtk`.

### `new`

```ts
new(name: string): Gtk.NamedAction
```

Creates an action that when activated, activates
the named action on the widget.

It also passes the given arguments to it.

See `Gtk.Widget.insertActionGroup()` for
how to add actions to widgets.

**Parameters**

- `name`: the detailed name of the action

**Returns** a new `GtkShortcutAction`

## Props

`ref` receives the `Gtk.NamedAction` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.

### `actionName`

`string` · default `null` · construct-only

The name of the action to activate.

## Methods

Methods are called on the `Gtk.NamedAction` instance, obtained with the `ref` prop or imported from `@gtkx/gi/gtk`. Methods inherited from ancestors are documented on their own pages.

### `getActionName`

```ts
getActionName(): string
```

Returns the name of the action that will be activated.

**Returns** the name of the action to activate
