---
description: "Support for UNIX-domain (also known as local) sockets, corresponding to struct sockaddr_un."
---

# GUnixSocketAddress

Support for UNIX-domain (also known as local) sockets, corresponding to
`struct sockaddr_un`.

UNIX domain sockets are generally visible in the filesystem.
However, some systems support abstract socket names which are not
visible in the filesystem and not affected by the filesystem
permissions, visibility, etc. Currently this is only supported
under Linux. If you attempt to use abstract sockets on other
systems, function calls may return `G_IO_ERROR_NOT_SUPPORTED`
errors. You can use `Gio.UnixSocketAddress.abstractNamesSupported()`
to see if abstract names are supported.

Since GLib 2.72, `GUnixSocketAddress` is available on all platforms. It
requires underlying system support (such as Windows 10 with `AF_UNIX`) at
run time.

Before GLib 2.72, `<gio/gunixsocketaddress.h>` belonged to the UNIX-specific
GIO interfaces, thus you had to use the `gio-unix-2.0.pc` pkg-config file
when using it. This is no longer necessary since GLib 2.72.

```tsx
import { GUnixSocketAddress } from "@gtkx/jsx/gio";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → [GSocketAddress](.gtkx/reference/gio/socket-address.md) → **GUnixSocketAddress**

Implements `GSocketConnectable`.

## Static methods

Static methods are called on `Gio.UnixSocketAddress`, imported from `@gtkx/gi/gio`.

### `abstractNamesSupported`

```ts
abstractNamesSupported(): boolean
```

Checks if abstract UNIX domain socket names are supported.

**Returns** `true` if supported, `false` otherwise

_Available since 2.22._

### `new`

```ts
new(path: string): Gio.SocketAddress
```

Creates a new `GUnixSocketAddress` for `path`.

To create abstract socket addresses, on systems that support that,
use `g_unix_socket_address_new_abstract()`.

**Parameters**

- `path`: the socket path

**Returns** a new `GUnixSocketAddress`

_Available since 2.22._

### `newAbstract`

```ts
newAbstract(path: number[]): Gio.SocketAddress
```

Creates a new `G_UNIX_SOCKET_ADDRESS_ABSTRACT_PADDED`
`GUnixSocketAddress` for `path`.

**Parameters**

- `path`: the abstract name

**Returns** a new `GUnixSocketAddress`

> **Deprecated.** Use `g_unix_socket_address_new_with_type()`.

### `newWithType`

```ts
newWithType(path: number[], type: Gio.UnixSocketAddressType): Gio.SocketAddress
```

Creates a new `GUnixSocketAddress` of type `type` with name `path`.

If `type` is `G_UNIX_SOCKET_ADDRESS_PATH`, this is equivalent to
calling `g_unix_socket_address_new()`.

If `type` is `G_UNIX_SOCKET_ADDRESS_ANONYMOUS`, `path` and `path_len` will be
ignored.

If `path_type` is `G_UNIX_SOCKET_ADDRESS_ABSTRACT`, then `path_len`
bytes of `path` will be copied to the socket's path, and only those
bytes will be considered part of the name. (If `path_len` is -1,
then `path` is assumed to be NUL-terminated.) For example, if `path`
was "test", then calling `g_socket_address_get_native_size()` on the
returned socket would return 7 (2 bytes of overhead, 1 byte for the
abstract-socket indicator byte, and 4 bytes for the name "test").

If `path_type` is `G_UNIX_SOCKET_ADDRESS_ABSTRACT_PADDED`, then
`path_len` bytes of `path` will be copied to the socket's path, the
rest of the path will be padded with 0 bytes, and the entire
zero-padded buffer will be considered the name. (As above, if
`path_len` is -1, then `path` is assumed to be NUL-terminated.) In
this case, `g_socket_address_get_native_size()` will always return
the full size of a `struct sockaddr_un`, although
`g_unix_socket_address_get_path_len()` will still return just the
length of `path`.

`G_UNIX_SOCKET_ADDRESS_ABSTRACT` is preferred over
`G_UNIX_SOCKET_ADDRESS_ABSTRACT_PADDED` for new programs. Of course,
when connecting to a server created by another process, you must
use the appropriate type corresponding to how that process created
its listening socket.

**Parameters**

- `path`: the name
- `type`: a `GUnixSocketAddressType`

**Returns** a new `GUnixSocketAddress`

_Available since 2.26._

## Props

`ref` receives the `Gio.UnixSocketAddress` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.

### `abstract`

`boolean` · default `false` · construct-only · deprecated

Whether or not this is an abstract address

> **Deprecated.** Use `GUnixSocketAddress.addressType`, which distinguishes between zero-padded and non-zero-padded abstract addresses.

### `addressType`

`Gio.UnixSocketAddressType` · default `G_UNIX_SOCKET_ADDRESS_PATH` · construct-only

The type of Unix socket address.

_Available since 2.22._

### `path`

`string` · default `null` · construct-only

Unix socket path.

_Available since 2.22._

### `pathAsArray`

`Uint8Array` · construct-only

Unix socket path, as a byte array.

_Available since 2.22._

## Methods

Methods are called on the `Gio.UnixSocketAddress` instance, obtained with the `ref` prop or imported from `@gtkx/gi/gio`. Methods inherited from ancestors are documented on their own pages.

### `getAddressType`

```ts
getAddressType(): Gio.UnixSocketAddressType
```

Gets `address`'s type.

**Returns** a `GUnixSocketAddressType`

_Available since 2.26._

### `getIsAbstract`

```ts
getIsAbstract(): boolean
```

Tests if `address` is abstract.

**Returns** `true` if the address is abstract, `false` otherwise

> **Deprecated.** Use `g_unix_socket_address_get_address_type()`

_Available since 2.22._

### `getPath`

```ts
getPath(): string
```

Gets `address`'s path, or for abstract sockets the "name".

Guaranteed to be zero-terminated, but an abstract socket
may contain embedded zeros, and thus you should use
`g_unix_socket_address_get_path_len()` to get the true length
of this string.

**Returns** the path for `address`

_Available since 2.22._

### `getPathLen`

```ts
getPathLen(): number
```

Gets the length of `address`'s path.

For details, see `g_unix_socket_address_get_path()`.

**Returns** the length of the path

_Available since 2.22._
