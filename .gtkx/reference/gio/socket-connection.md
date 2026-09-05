---
description: "GSocketConnection is a Gio.IOStream for a connected socket."
---

# GSocketConnection

`GSocketConnection` is a `Gio.IOStream` for a connected socket. They
can be created either by `Gio.SocketClient` when connecting to a host,
or by `Gio.SocketListener` when accepting a new client.

The type of the `GSocketConnection` object returned from these calls
depends on the type of the underlying socket that is in use. For
instance, for a TCP/IP connection it will be a `Gio.TcpConnection`.

Choosing what type of object to construct is done with the socket
connection factory, and it is possible for third parties to register
custom socket connection types for specific combination of socket
family/type/protocol using `Gio.SocketConnection.factoryRegisterType()`.

To close a `GSocketConnection`, use `Gio.IOStream.close()`. Closing both
substreams of the `Gio.IOStream` separately will not close the
underlying `Gio.Socket`.

_Available since 2.22._

```tsx
import { GSocketConnection } from "@gtkx/jsx/gio";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → [GIOStream](.gtkx/reference/gio/io-stream.md) → **GSocketConnection**

## Static methods

Static methods are called on `Gio.SocketConnection`, imported from `@gtkx/gi/gio`.

### `factoryLookupType`

```ts
factoryLookupType(family: Gio.SocketFamily, type: Gio.SocketType, protocolId: number): bigint
```

Looks up the `GType` to be used when creating socket connections on
sockets with the specified `family`, `type` and `protocol_id`.

If no type is registered, the `GSocketConnection` base type is returned.

**Parameters**

- `family`: a `GSocketFamily`
- `type`: a `GSocketType`
- `protocolId`: a protocol id

**Returns** a `GType`

_Available since 2.22._

### `factoryRegisterType`

```ts
factoryRegisterType(gType: bigint | AnyClass<TypedClass>, family: Gio.SocketFamily, type: Gio.SocketType, protocol: number): void
```

Looks up the `GType` to be used when creating socket connections on
sockets with the specified `family`, `type` and `protocol`.

If no type is registered, the `GSocketConnection` base type is returned.

**Parameters**

- `gType`: a `GType`, inheriting from `G_TYPE_SOCKET_CONNECTION`
- `family`: a `GSocketFamily`
- `type`: a `GSocketType`
- `protocol`: a protocol id

_Available since 2.22._

## Props

`ref` receives the `Gio.SocketConnection` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.

### `socket`

`Gio.Socket` · construct-only

The underlying `Gio.Socket`.

_Available since 2.22._

## Methods

Methods are called on the `Gio.SocketConnection` instance, obtained with the `ref` prop or imported from `@gtkx/gi/gio`. Methods inherited from ancestors are documented on their own pages.

### `connect`

```ts
connect(address: Gio.SocketAddress, cancellable: Gio.Cancellable | null): boolean
```

Connect `connection` to the specified remote address.

**Parameters**

- `address`: a `GSocketAddress` specifying the remote address.
- `cancellable`: a `GCancellable` or `null`

**Returns** `true` if the connection succeeded, `false` on error

**Throws** A `GLib.Error` carrying the failing operation's domain, code, and message.

_Available since 2.32._

### `connectAsync`

```ts
connectAsync(address: Gio.SocketAddress, cancellable?: Gio.Cancellable | null): Promise<boolean>
```

Asynchronously connect `connection` to the specified remote address.

This clears the `GSocket.blocking` flag on `connection`'s underlying
socket if it is currently set.

If `GSocket.timeout` is set, the operation will time out and return
`G_IO_ERROR_TIMED_OUT` after that period. Otherwise, it will continue
indefinitely until operating system timeouts (if any) are hit.

Use `g_socket_connection_connect_finish()` to retrieve the result.

**Parameters**

- `address`: a `GSocketAddress` specifying the remote address.
- `cancellable`: a `GCancellable` or `null`

**Returns** `true` if the connection succeeded, `false` on error

**Throws** A `GLib.Error` carrying the failing operation's domain, code, and message.

_Available since 2.32._

### `connectFinish`

```ts
connectFinish(result: Gio.AsyncResult): boolean
```

Gets the result of a `g_socket_connection_connect_async()` call.

**Parameters**

- `result`: the `GAsyncResult`

**Returns** `true` if the connection succeeded, `false` on error

**Throws** A `GLib.Error` carrying the failing operation's domain, code, and message.

_Available since 2.32._

### `getLocalAddress`

```ts
getLocalAddress(): Gio.SocketAddress
```

Try to get the local address of a socket connection.

**Returns** a `GSocketAddress` or `null` on error.

**Throws** A `GLib.Error` carrying the failing operation's domain, code, and message.

_Available since 2.22._

### `getRemoteAddress`

```ts
getRemoteAddress(): Gio.SocketAddress
```

Try to get the remote address of a socket connection.

Since GLib 2.40, when used with `g_socket_client_connect()` or
`g_socket_client_connect_async()`, during emission of
`G_SOCKET_CLIENT_CONNECTING`, this function will return the remote
address that will be used for the connection.  This allows
applications to print e.g. "Connecting to example.com
(10.42.77.3)...".

**Returns** a `GSocketAddress` or `null` on error.

**Throws** A `GLib.Error` carrying the failing operation's domain, code, and message.

_Available since 2.22._

### `getSocket`

```ts
getSocket(): Gio.Socket
```

Gets the underlying `GSocket` object of the connection.
This can be useful if you want to do something unusual on it
not supported by the `GSocketConnection` APIs.

**Returns** a `GSocket` or `null` on error.

_Available since 2.22._

### `isConnected`

```ts
isConnected(): boolean
```

Checks if `connection` is connected. This is equivalent to calling
`g_socket_is_connected()` on `connection`'s underlying `GSocket`.

**Returns** whether `connection` is connected

_Available since 2.32._
