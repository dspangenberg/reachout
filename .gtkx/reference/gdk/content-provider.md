---
description: "Provides content for the clipboard or for drag-and-drop operations in a number of formats."
---

# GdkContentProvider

Provides content for the clipboard or for drag-and-drop operations
in a number of formats.

To create a `GdkContentProvider`, use `Gdk.ContentProvider.newForValue()`
or `Gdk.ContentProvider.newForBytes()`.

GDK knows how to handle common text and image formats out-of-the-box. See
`Gdk.ContentSerializer` and `Gdk.ContentDeserializer` if you want
to add support for application-specific data formats.

```tsx
import { GdkContentProvider } from "@gtkx/jsx/gdk";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → **GdkContentProvider**

## Static methods

Static methods are called on `Gdk.ContentProvider`, imported from `@gtkx/gi/gdk`.

### `newForBytes`

```ts
newForBytes(mimeType: string, bytes: GLib.Bytes): Gdk.ContentProvider
```

Create a content provider that provides the given `bytes` as data for
the given `mime_type`.

**Parameters**

- `mimeType`: the mime type
- `bytes`: a `GBytes` with the data for `mime_type`

**Returns** a new `GdkContentProvider`

### `newForValue`

```ts
newForValue(value: GObject.Value | JsValue): Gdk.ContentProvider
```

Create a content provider that provides the given `value`.

**Parameters**

- `value`: a `GValue`

**Returns** a new `GdkContentProvider`

### `newUnion`

```ts
newUnion(providers: Gdk.ContentProvider[] | null): Gdk.ContentProvider
```

Creates a content provider that represents all the given `providers`.

Whenever data needs to be written, the union provider will try the given
`providers` in the given order and the first one supporting a format will
be chosen to provide it.

This allows an easy way to support providing data in different formats.
For example, an image may be provided by its file and by the image
contents with a call such as
```c
gdk_content_provider_new_union ((GdkContentProvider *[2]) {
                                  gdk_content_provider_new_typed (G_TYPE_FILE, file),
                                  gdk_content_provider_new_typed (GDK_TYPE_TEXTURE, texture)
                                }, 2);
```

**Parameters**

- `providers`: The `GdkContentProvider`s to present the union of

**Returns** a new `GdkContentProvider`

## Props

`ref` receives the `Gdk.ContentProvider` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.

### `formats`

`Gdk.ContentFormats` · read-only, observe with `onNotifyFormats`

The possible formats that the provider can provide its data in.

### `storableFormats`

`Gdk.ContentFormats` · read-only, observe with `onNotifyStorableFormats`

The subset of formats that clipboard managers should store this provider's data in.

## Signals

### `onContentChanged`

```ts
(self: Gdk.ContentProvider) => void
```

Emitted whenever the content provided by this provider has changed.

**Parameters**

- `self`: The instance the signal was emitted on.

## Methods

Methods are called on the `Gdk.ContentProvider` instance, obtained with the `ref` prop or imported from `@gtkx/gi/gdk`. Methods inherited from ancestors are documented on their own pages.

### `contentChanged`

```ts
contentChanged(): void
```

Emits the ::content-changed signal.

### `getValue`

```ts
getValue(): [boolean, unknown]
```

Gets the contents of `provider` stored in `value`.

The `value` will have been initialized to the `GType` the value should be
provided in. This given `GType` does not need to be listed in the formats
returned by `Gdk.ContentProvider.refFormats()`. However, if the
given `GType` is not supported, this operation can fail and
`G_IO_ERROR_NOT_SUPPORTED` will be reported.

**Returns** Tuple of:

- `result`: `true` if the value was set successfully. Otherwise `error` will be set to describe the failure.
- `value`: the `GValue` to fill

**Throws** A `GLib.Error` carrying the failing operation's domain, code, and message.

### `refFormats`

```ts
refFormats(): Gdk.ContentFormats
```

Gets the formats that the provider can provide its current contents in.

**Returns** The formats of the provider

### `refStorableFormats`

```ts
refStorableFormats(): Gdk.ContentFormats
```

Gets the formats that the provider suggests other applications to store
the data in.

An example of such an application would be a clipboard manager.

This can be assumed to be a subset of `Gdk.ContentProvider.refFormats()`.

**Returns** The storable formats of the provider

### `writeMimeTypeAsync`

```ts
writeMimeTypeAsync(mimeType: string, stream: Gio.OutputStream, ioPriority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>
```

Asynchronously writes the contents of `provider` to `stream` in the given
`mime_type`.

The given mime type does not need to be listed in the formats returned by
`Gdk.ContentProvider.refFormats()`. However, if the given `GType` is
not supported, `G_IO_ERROR_NOT_SUPPORTED` will be reported.

The given `stream` will not be closed.

**Parameters**

- `mimeType`: the mime type to provide the data in
- `stream`: the `GOutputStream` to write to
- `ioPriority`: I/O priority of the request.
- `cancellable`: optional `GCancellable` object, `null` to ignore.

**Returns** `true` if the operation was completed successfully. Otherwise
  `error` will be set to describe the failure.

**Throws** A `GLib.Error` carrying the failing operation's domain, code, and message.

### `writeMimeTypeFinish`

```ts
writeMimeTypeFinish(result: Gio.AsyncResult): boolean
```

Finishes an asynchronous write operation.

See `Gdk.ContentProvider.writeMimeTypeAsync()`.

**Parameters**

- `result`: a `GAsyncResult`

**Returns** `true` if the operation was completed successfully. Otherwise
  `error` will be set to describe the failure.

**Throws** A `GLib.Error` carrying the failing operation's domain, code, and message.
