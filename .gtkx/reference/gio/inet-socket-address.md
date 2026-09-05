---
description: "An IPv4 or IPv6 socket address."
---

# GInetSocketAddress

An IPv4 or IPv6 socket address. That is, the combination of a
`Gio.InetAddress` and a port number.

In UNIX terms, `GInetSocketAddress` corresponds to a
[`struct sockaddr_in` or `struct sockaddr_in6`](man:sockaddr(3type)).

```tsx
import { GInetSocketAddress } from "@gtkx/jsx/gio";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → [GSocketAddress](.gtkx/reference/gio/socket-address.md) → **GInetSocketAddress**

Implements `GSocketConnectable`.

## Static methods

Static methods are called on `Gio.InetSocketAddress`, imported from `@gtkx/gi/gio`.

### `new`

```ts
new(address: Gio.InetAddress, port: number): Gio.SocketAddress
```

Creates a new `GInetSocketAddress` for `address` and `port`.

**Parameters**

- `address`: a `GInetAddress`
- `port`: a port number

**Returns** a new `GInetSocketAddress`

_Available since 2.22._

### `newFromString`

```ts
newFromString(address: string, port: number): Gio.SocketAddress | null
```

Creates a new `GInetSocketAddress` for `address` and `port`.

If `address` is an IPv6 address, it can also contain a scope ID
(separated from the address by a `%`). Note that currently this
behavior is platform specific. This may change in a future release.

**Parameters**

- `address`: the string form of an IP address
- `port`: a port number

**Returns** a new `GInetSocketAddress`,
or `null` if `address` cannot be parsed.

_Available since 2.40._

## Props

`ref` receives the `Gio.InetSocketAddress` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.

### `address`

`Gio.InetAddress` · construct-only

The address.

_Available since 2.22._

### `flowinfo`

`number` · default `0` · construct-only

The `sin6_flowinfo` field, for IPv6 addresses.

If unset this property is inherited from `Gio.InetSocketAddress.address`.

_Available since 2.32._

### `port`

`number` · default `0` · construct-only

The port.

_Available since 2.22._

### `scopeId`

`number` · default `0` · construct-only

The `sin6_scope_id` field, for IPv6 addresses.

If unset this property is inherited from `Gio.InetSocketAddress.address`.

_Available since 2.32._

## Methods

Methods are called on the `Gio.InetSocketAddress` instance, obtained with the `ref` prop or imported from `@gtkx/gi/gio`. Methods inherited from ancestors are documented on their own pages.

### `getAddress`

```ts
getAddress(): Gio.InetAddress
```

Gets `address`'s `GInetAddress`.

**Returns** the `GInetAddress` for `address`, which must be
`g_object_ref()`'d if it will be stored

_Available since 2.22._

### `getFlowinfo`

```ts
getFlowinfo(): number
```

Gets the `sin6_flowinfo` field from `address`,
which must be an IPv6 address.

If not overridden this value will be inherited from `Gio.InetSocketAddress.address`.

**Returns** the flowinfo field

_Available since 2.32._

### `getPort`

```ts
getPort(): number
```

Gets `address`'s port.

**Returns** the port for `address`

_Available since 2.22._

### `getScopeId`

```ts
getScopeId(): number
```

Gets the `sin6_scope_id` field from `address`,
which must be an IPv6 address.

If not overridden this value will be inherited from `Gio.InetSocketAddress.address`.

**Returns** the scope id field

_Available since 2.32._
