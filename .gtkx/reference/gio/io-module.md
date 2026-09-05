---
description: "Provides an interface and default functions for loading and unloading modules."
---

# GIOModule

Provides an interface and default functions for loading and unloading
modules. This is used internally to make GIO extensible, but can also
be used by others to implement module loading.

```tsx
import { GIOModule } from "@gtkx/jsx/gio";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → [GTypeModule](.gtkx/reference/gobject/type-module.md) → **GIOModule**

Implements `GTypePlugin`.

## Static methods

Static methods are called on `Gio.IOModule`, imported from `@gtkx/gi/gio`.

### `new`

```ts
new(filename: string): Gio.IOModule
```

Creates a new GIOModule that will load the specific
shared library when in use.

**Parameters**

- `filename`: filename of the shared library module.

**Returns** a `GIOModule` from given `filename`,
or `null` on error.

### `query`

```ts
query(): string[]
```

Optional API for GIO modules to implement.

Should return a list of all the extension points that may be
implemented in this module.

This method will not be called in normal use, however it may be
called when probing existing modules and recording which extension
points that this model is used for. This means we won't have to
load and initialize this module unless its needed.

If this function is not implemented by the module the module will
always be loaded, initialized and then unloaded on application
startup so that it can register its extension points during init.

Note that a module need not actually implement all the extension
points that `g_io_module_query()` returns, since the exact list of
extension may depend on runtime issues. However all extension
points actually implemented must be returned by `g_io_module_query()`
(if defined).

When installing a module that implements `g_io_module_query()` you must
run gio-querymodules in order to build the cache files required for
lazy loading.

Since 2.56, this function should be named `g_io_<modulename>_query`, where
`modulename` is the plugin’s filename with the `lib` or `libgio` prefix and
everything after the first dot removed, and with `-` replaced with `_`
throughout. For example, `libgiognutls-helper.so` becomes `gnutls_helper`.
Using the new symbol names avoids name clashes when building modules
statically. The old symbol names continue to be supported, but cannot be used
for static builds.

**Returns** A `null`-terminated array of strings,
    listing the supported extension points of the module.

_Available since 2.24._

## Props

`ref` receives the `Gio.IOModule` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.
