---
description: "Converter input stream implements Gio.InputStream and allows conversion of data of various types during reading."
---

# GConverterInputStream

Converter input stream implements `Gio.InputStream` and allows
conversion of data of various types during reading.

As of GLib 2.34, `GConverterInputStream` implements
`Gio.PollableInputStream`.

```tsx
import { GConverterInputStream } from "@gtkx/jsx/gio";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → [GInputStream](.gtkx/reference/gio/input-stream.md) → [GFilterInputStream](.gtkx/reference/gio/filter-input-stream.md) → **GConverterInputStream**

Implements `GPollableInputStream`.

## Static methods

Static methods are called on `Gio.ConverterInputStream`, imported from `@gtkx/gi/gio`.

### `new`

```ts
new(baseStream: Gio.InputStream, converter: Gio.Converter): Gio.InputStream
```

Creates a new converter input stream for the `base_stream`.

**Parameters**

- `baseStream`: a `GInputStream`
- `converter`: a `GConverter`

**Returns** a new `GInputStream`.

## Props

`ref` receives the `Gio.ConverterInputStream` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.

### `converter`

`Gio.Converter` · construct-only

The converter object.

## Methods

Methods are called on the `Gio.ConverterInputStream` instance, obtained with the `ref` prop or imported from `@gtkx/gi/gio`. Methods inherited from ancestors are documented on their own pages.

### `getConverter`

```ts
getConverter(): Gio.Converter
```

Gets the `GConverter` that is used by `converter_stream`.

**Returns** the converter of the converter input stream

_Available since 2.24._
