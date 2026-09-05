---
description: "GEmblem is an implementation of Gio.Icon that supports having an emblem, which is an icon with additional properties."
---

# GEmblem

`GEmblem` is an implementation of `Gio.Icon` that supports
having an emblem, which is an icon with additional properties.
It can than be added to a `Gio.EmblemedIcon`.

Currently, only metainformation about the emblem's origin is
supported. More may be added in the future.

```tsx
import { GEmblem } from "@gtkx/jsx/gio";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → **GEmblem**

Implements `GIcon`.

## Static methods

Static methods are called on `Gio.Emblem`, imported from `@gtkx/gi/gio`.

### `new`

```ts
new(icon: Gio.Icon): Gio.Emblem
```

Creates a new emblem for `icon`.

**Parameters**

- `icon`: a GIcon containing the icon.

**Returns** a new `GEmblem`.

_Available since 2.18._

### `newWithOrigin`

```ts
newWithOrigin(icon: Gio.Icon, origin: Gio.EmblemOrigin): Gio.Emblem
```

Creates a new emblem for `icon`.

**Parameters**

- `icon`: a GIcon containing the icon.
- `origin`: a GEmblemOrigin enum defining the emblem's origin

**Returns** a new `GEmblem`.

_Available since 2.18._

## Props

`ref` receives the `Gio.Emblem` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.

### `icon`

`GObject.Object` · construct-only

The actual icon of the emblem.

_Available since 2.18._

### `origin`

`Gio.EmblemOrigin` · default `G_EMBLEM_ORIGIN_UNKNOWN` · construct-only

The origin the emblem is derived from.

_Available since 2.18._

## Methods

Methods are called on the `Gio.Emblem` instance, obtained with the `ref` prop or imported from `@gtkx/gi/gio`. Methods inherited from ancestors are documented on their own pages.

### `getIcon`

```ts
getIcon(): Gio.Icon
```

Gives back the icon from `emblem`.

**Returns** a `GIcon`.

_Available since 2.18._

### `getOrigin`

```ts
getOrigin(): Gio.EmblemOrigin
```

Gets the origin of the emblem.

**Returns** the origin of the emblem

_Available since 2.18._
