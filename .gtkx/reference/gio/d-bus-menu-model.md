---
description: "GDBusMenuModel is an implementation of Gio.MenuModel that can be used as a proxy for a menu model that is exported over D-Bus with Gio.DBusConnection.exportMenuModel()."
---

# GDBusMenuModel

`GDBusMenuModel` is an implementation of `Gio.MenuModel` that can be
used as a proxy for a menu model that is exported over D-Bus with
`Gio.DBusConnection.exportMenuModel()`.

```tsx
import { GDBusMenuModel } from "@gtkx/jsx/gio";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → [GMenuModel](.gtkx/reference/gio/menu-model.md) → **GDBusMenuModel**

## Static methods

Static methods are called on `Gio.DBusMenuModel`, imported from `@gtkx/gi/gio`.

### `get`

```ts
get(connection: Gio.DBusConnection, busName: string | null, objectPath: string): Gio.DBusMenuModel
```

Obtains a `GDBusMenuModel` for the menu model which is exported
at the given `bus_name` and `object_path`.

The thread default main context is taken at the time of this call.
All signals on the menu model (and any linked models) are reported
with respect to this context.  All calls on the returned menu model
(and linked models) must also originate from this same context, with
the thread default main context unchanged.

**Parameters**

- `connection`: a `GDBusConnection`
- `busName`: the bus name which exports the menu model or `null` if `connection` is not a message bus connection
- `objectPath`: the object path at which the menu model is exported

**Returns** a `GDBusMenuModel` object.

_Available since 2.32._

## Props

`ref` receives the `Gio.DBusMenuModel` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.
