---
description: "GDBusActionGroup is an implementation of the Gio.ActionGroup interface."
---

# GDBusActionGroup

`GDBusActionGroup` is an implementation of the `Gio.ActionGroup`
interface.

`GDBusActionGroup` can be used as a proxy for an action group
that is exported over D-Bus with `Gio.DBusConnection.exportActionGroup()`.

```tsx
import { GDBusActionGroup } from "@gtkx/jsx/gio";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → **GDBusActionGroup**

Implements `GActionGroup`, `GRemoteActionGroup`.

## Static methods

Static methods are called on `Gio.DBusActionGroup`, imported from `@gtkx/gi/gio`.

### `get`

```ts
get(connection: Gio.DBusConnection, busName: string | null, objectPath: string): Gio.DBusActionGroup
```

Obtains a `GDBusActionGroup` for the action group which is exported at
the given `bus_name` and `object_path`.

The thread default main context is taken at the time of this call.
All signals on the menu model (and any linked models) are reported
with respect to this context.  All calls on the returned menu model
(and linked models) must also originate from this same context, with
the thread default main context unchanged.

This call is non-blocking.  The returned action group may or may not
already be filled in.  The correct thing to do is connect the signals
for the action group to monitor for changes and then to call
`g_action_group_list_actions()` to get the initial list.

**Parameters**

- `connection`: A `GDBusConnection`
- `busName`: the bus name which exports the action group or `null` if `connection` is not a message bus connection
- `objectPath`: the object path at which the action group is exported

**Returns** a `GDBusActionGroup`

_Available since 2.32._

## Props

`ref` receives the `Gio.DBusActionGroup` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.

### `prefix`

`string | null` · from `GActionGroup`

Prefix the group's actions are addressed by, such as `win`; defaults to the empty string.

## Signals

### `onActionAdded`

```ts
(actionName: string, self: Gio.DBusActionGroup) => void
```

From `GActionGroup`.

Signals that a new action was just added to the group.

This signal is emitted after the action has been added
and is now visible.

**Parameters**

- `actionName`: the name of the action in `action_group`
- `self`: The instance the signal was emitted on.

_Available since 2.28._

### `onActionEnabledChanged`

```ts
(actionName: string, enabled: boolean, self: Gio.DBusActionGroup) => void
```

From `GActionGroup`.

Signals that the enabled status of the named action has changed.

**Parameters**

- `actionName`: the name of the action in `action_group`
- `enabled`: whether the action is enabled
- `self`: The instance the signal was emitted on.

_Available since 2.28._

### `onActionRemoved`

```ts
(actionName: string, self: Gio.DBusActionGroup) => void
```

From `GActionGroup`.

Signals that an action is just about to be removed from the group.

This signal is emitted before the action is removed, so the action
is still visible and can be queried from the signal handler.

**Parameters**

- `actionName`: the name of the action in `action_group`
- `self`: The instance the signal was emitted on.

_Available since 2.28._

### `onActionStateChanged`

```ts
(actionName: string, value: GLib.Variant, self: Gio.DBusActionGroup) => void
```

From `GActionGroup`.

Signals that the state of the named action has changed.

**Parameters**

- `actionName`: the name of the action in `action_group`
- `value`: the new value of the state
- `self`: The instance the signal was emitted on.

_Available since 2.28._
