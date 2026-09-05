---
description: "GSimplePermission is a trivial implementation of Gio.Permission that represents a permission that is either always or never allowed."
---

# GSimplePermission

`GSimplePermission` is a trivial implementation of `Gio.Permission`
that represents a permission that is either always or never allowed.  The
value is given at construction and doesn’t change.

Calling `Gio.Permission.acquire()` or `Gio.Permission.release()`
on a `GSimplePermission` will result in errors.

```tsx
import { GSimplePermission } from "@gtkx/jsx/gio";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → [GPermission](.gtkx/reference/gio/permission.md) → **GSimplePermission**

## Static methods

Static methods are called on `Gio.SimplePermission`, imported from `@gtkx/gi/gio`.

### `new`

```ts
new(allowed: boolean): Gio.Permission
```

Creates a new `GPermission` instance that represents an action that is
either always or never allowed.

**Parameters**

- `allowed`: `true` if the action is allowed

**Returns** the `GSimplePermission`, as a `GPermission`

_Available since 2.26._

## Props

`ref` receives the `Gio.SimplePermission` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.
