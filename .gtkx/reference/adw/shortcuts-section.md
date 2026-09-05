---
description: "An object representing a section in ShortcutsDialog."
---

# AdwShortcutsSection

An object representing a section in `ShortcutsDialog`.

It contains `ShortcutsItem` objects, use `ShortcutsSection.add()` to
add them.

`AdwShortcutsSection` implements the `Gio.ListModel` interface and
allows to access the added shortcut items through it.

### `AdwShortcutsSection` as `GtkBuildable`

`AdwShortcutsSection` allows adding `AdwShortcutsItem` objects as children.

_Available since 1.8._

```tsx
import { AdwShortcutsSection } from "@gtkx/jsx/adw";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → **AdwShortcutsSection**

Implements `GListModel`, `GtkBuildable`.

## Static methods

Static methods are called on `Adw.ShortcutsSection`, imported from `@gtkx/gi/adw`.

### `new`

```ts
new(title: string | null): Adw.ShortcutsSection
```

Creates a new `AdwShortcutsSection` with `title` as its title if provided.

**Parameters**

- `title`: the section title

**Returns** the newly created `AdwShortcutsSection`

_Available since 1.8._

## Props

`ref` receives the `Adw.ShortcutsSection` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.

### `children`

`ReactNode`

Elements attached to the element's default child slot, or its text for elements that hold text.

This remains a React `ReactNode` slot, so fragments, arrays, conditionals, and nullish values work normally. Each GTKX element rendered into it must create [AdwShortcutsItem](.gtkx/reference/adw/shortcuts-item.md) or a subtype.

### `itemType`

`GObject.Type` · read-only, observe with `onNotifyItemType`

The type of the items. See `Gio.ListModel.getItemType()`.

_Available since 1.9._

### `nItems`

`number` · default `0` · read-only, observe with `onNotifyNItems`

The number of items. See `Gio.ListModel.getNItems()`.

_Available since 1.9._

### `title`

`string` · default `null`

The title of the section, can be `NULL`.

_Available since 1.8._

## Signals

### `onItemsChanged`

```ts
(position: number, removed: number, added: number, self: Adw.ShortcutsSection) => void
```

From `GListModel`.

This signal is emitted whenever items were added to or removed
from `list`. At `position`, `removed` items were removed and `added`
items were added in their place.

Note: If `removed != added`, the positions of all later items
in the model change.

**Parameters**

- `position`: the position at which `list` changed
- `removed`: the number of items removed
- `added`: the number of items added
- `self`: The instance the signal was emitted on.

_Available since 2.44._

## Methods

Methods are called on the `Adw.ShortcutsSection` instance, obtained with the `ref` prop or imported from `@gtkx/gi/adw`. Methods inherited from ancestors are documented on their own pages.

### `add`

```ts
add(item: Adw.ShortcutsItem): void
```

Adds `item` to `self`.

**Parameters**

- `item`: the item to add

_Available since 1.8._

### `getTitle`

```ts
getTitle(): string | null
```

Gets the title of `self`.

**Returns** the title

_Available since 1.8._

### `setTitle`

```ts
setTitle(title: string | null): void
```

Sets the title of `self`.

**Parameters**

- `title`: the title to use

_Available since 1.8._
