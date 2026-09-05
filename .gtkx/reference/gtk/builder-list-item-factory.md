---
description: "Creates widgets by instantiating GtkBuilder UI templates."
---

# GtkBuilderListItemFactory

Creates widgets by instantiating `GtkBuilder` UI templates.

The templates must extend the class that the parent widget expects.
For example, a factory provided to `Gtk.ListView.factory` must have
a template that extends `Gtk.ListItem`.

Templates typically use `Gtk.Expression` to obtain data from the items
in the model.

Example:
```xml
  <interface>
    <template class="GtkListItem">
      <property name="child">
        <object class="GtkLabel">
          <property name="xalign">0</property>
          <binding name="label">
            <lookup name="name" type="SettingsKey">
              <lookup name="item">GtkListItem</lookup>
            </lookup>
          </binding>
        </object>
      </property>
    </template>
  </interface>
```

A common approach is to embed such templates as CDATA marked sections into
a surrounding UI file. Note that if you use this approach, extracting
translatable strings with xgettext will not work for strings inside the
marked section.

```tsx
import { GtkBuilderListItemFactory } from "@gtkx/jsx/gtk";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → [GtkListItemFactory](.gtkx/reference/gtk/list-item-factory.md) → **GtkBuilderListItemFactory**

## Static methods

Static methods are called on `Gtk.BuilderListItemFactory`, imported from `@gtkx/gi/gtk`.

### `newFromBytes`

```ts
newFromBytes(scope: Gtk.BuilderScope | null, bytes: GLib.Bytes): Gtk.ListItemFactory
```

Creates a new `GtkBuilderListItemFactory` that instantiates widgets
using `bytes` as the data to pass to `GtkBuilder`.

**Parameters**

- `scope`: A scope to use when instantiating
- `bytes`: the `GBytes` containing the UI definition to instantiate

**Returns** a new `GtkBuilderListItemFactory`

### `newFromResource`

```ts
newFromResource(scope: Gtk.BuilderScope | null, resourcePath: string): Gtk.ListItemFactory
```

Creates a new `GtkBuilderListItemFactory` that instantiates widgets
using data read from the given `resource_path` to pass to `GtkBuilder`.

**Parameters**

- `scope`: A scope to use when instantiating
- `resourcePath`: valid path to a resource that contains the UI definition

**Returns** a new `GtkBuilderListItemFactory`

## Props

`ref` receives the `Gtk.BuilderListItemFactory` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.

### `bytes`

`GLib.Bytes` · construct-only

`GBytes` containing the UI definition.

### `resource`

`string` · default `null` · construct-only

Path of the resource containing the UI definition.

### `scope`

`Gtk.BuilderScope` · construct-only

`GtkBuilderScope` to use when instantiating listitems

## Methods

Methods are called on the `Gtk.BuilderListItemFactory` instance, obtained with the `ref` prop or imported from `@gtkx/gi/gtk`. Methods inherited from ancestors are documented on their own pages.

### `getBytes`

```ts
getBytes(): GLib.Bytes
```

Gets the data used as the `GtkBuilder` UI template for constructing
listitems.

**Returns** The `GtkBuilder` data

### `getResource`

```ts
getResource(): string | null
```

If the data references a resource, gets the path of that resource.

**Returns** The path to the resource

### `getScope`

```ts
getScope(): Gtk.BuilderScope | null
```

Gets the scope used when constructing listitems.

**Returns** The scope used when constructing listitems
