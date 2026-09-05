---
description: "A certificate used for TLS authentication and encryption."
---

# GTlsCertificate

A certificate used for TLS authentication and encryption.
This can represent either a certificate only (eg, the certificate
received by a client from a server), or the combination of
a certificate and a private key (which is needed when acting as a
`Gio.TlsServerConnection`).

_Available since 2.28._

```tsx
import { GTlsCertificate } from "@gtkx/jsx/gio";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → **GTlsCertificate**

## Static methods

Static methods are called on `Gio.TlsCertificate`, imported from `@gtkx/gi/gio`.

### `listNewFromFile`

```ts
listNewFromFile(file: string): Gio.TlsCertificate[]
```

Creates one or more `GTlsCertificates` from the PEM-encoded
data in `file`. If `file` cannot be read or parsed, the function will
return `null` and set `error`. If `file` does not contain any
PEM-encoded certificates, this will return an empty list and not
set `error`.

**Parameters**

- `file`: file containing PEM-encoded certificates to import

**Returns** a
`GList` containing `GTlsCertificate` objects.

**Throws** A `GLib.Error` carrying the failing operation's domain, code, and message.

_Available since 2.28._

### `newFromFile`

```ts
newFromFile(file: string): Gio.TlsCertificate
```

Creates a `GTlsCertificate` from the data in `file`.

As of 2.72, if the filename ends in `.p12` or `.pfx` the data is loaded by
`g_tls_certificate_new_from_pkcs12()` otherwise it is loaded by
`g_tls_certificate_new_from_pem()`. See those functions for
exact details.

If `file` cannot be read or parsed, the function will return `null` and
set `error`.

**Parameters**

- `file`: file containing a certificate to import

**Returns** the new certificate, or `null` on error

**Throws** A `GLib.Error` carrying the failing operation's domain, code, and message.

_Available since 2.28._

### `newFromFiles`

```ts
newFromFiles(certFile: string, keyFile: string): Gio.TlsCertificate
```

Creates a `GTlsCertificate` from the PEM-encoded data in `cert_file`
and `key_file`. The returned certificate will be the first certificate
found in `cert_file`. As of GLib 2.44, if `cert_file` contains more
certificates it will try to load a certificate chain. All
certificates will be verified in the order found (top-level
certificate should be the last one in the file) and the
`GTlsCertificate.issuer` property of each certificate will be set
accordingly if the verification succeeds. If any certificate in the
chain cannot be verified, the first certificate in the file will
still be returned.

If either file cannot be read or parsed, the function will return
`null` and set `error`. Otherwise, this behaves like
`g_tls_certificate_new_from_pem()`.

**Parameters**

- `certFile`: file containing one or more PEM-encoded certificates to import
- `keyFile`: file containing a PEM-encoded private key to import

**Returns** the new certificate, or `null` on error

**Throws** A `GLib.Error` carrying the failing operation's domain, code, and message.

_Available since 2.28._

### `newFromFileWithPassword`

```ts
newFromFileWithPassword(file: string, password: string): Gio.TlsCertificate
```

Creates a `GTlsCertificate` from the data in `file`.

If `file` cannot be read or parsed, the function will return `null` and
set `error`.

Any unknown file types will error with `G_IO_ERROR_NOT_SUPPORTED`.
Currently only `.p12` and `.pfx` files are supported.
See `g_tls_certificate_new_from_pkcs12()` for more details.

**Parameters**

- `file`: file containing a certificate to import
- `password`: password for PKCS `12` files

**Returns** the new certificate, or `null` on error

**Throws** A `GLib.Error` carrying the failing operation's domain, code, and message.

_Available since 2.72._

### `newFromPem`

```ts
newFromPem(data: string, length: number): Gio.TlsCertificate
```

Creates a `GTlsCertificate` from the PEM-encoded data in `data`. If
`data` includes both a certificate and a private key, then the
returned certificate will include the private key data as well. (See
the `GTlsCertificate.privateKeyPem` property for information about
supported formats.)

The returned certificate will be the first certificate found in
`data`. As of GLib 2.44, if `data` contains more certificates it will
try to load a certificate chain. All certificates will be verified in
the order found (top-level certificate should be the last one in the
file) and the `GTlsCertificate.issuer` property of each certificate
will be set accordingly if the verification succeeds. If any
certificate in the chain cannot be verified, the first certificate in
the file will still be returned.

**Parameters**

- `data`: PEM-encoded certificate data
- `length`: the length of `data`, or -1 if it's 0-terminated.

**Returns** the new certificate, or `null` if `data` is invalid

**Throws** A `GLib.Error` carrying the failing operation's domain, code, and message.

_Available since 2.28._

### `newFromPkcs11Uris`

```ts
newFromPkcs11Uris(pkcs11Uri: string, privateKeyPkcs11Uri: string | null): Gio.TlsCertificate
```

Creates a `GTlsCertificate` from a
[PKCS \`11`](https://docs.oasis-open.org/pkcs11/pkcs11-base/v3.0/os/pkcs11-base-v3.0-os.html) URI.

An example `pkcs11_uri` would be `pkcs11:model=Model;manufacturer=Manufacture;serial=1;token=My%20Client%20Certificate;id=%01`

Where the token’s layout is:

```
Object 0:
  URL: pkcs11:model=Model;manufacturer=Manufacture;serial=1;token=My%20Client%20Certificate;id=%01;object=private%20key;type=private
  Type: Private key (RSA-2048)
  ID: 01

Object 1:
  URL: pkcs11:model=Model;manufacturer=Manufacture;serial=1;token=My%20Client%20Certificate;id=%01;object=Certificate%20for%20Authentication;type=cert
  Type: X.509 Certificate (RSA-2048)
  ID: 01
```

In this case the certificate and private key would both be detected and used as expected.
`pkcs_uri` may also just reference an X.509 certificate object and then optionally
`private_key_pkcs11_uri` allows using a private key exposed under a different URI.

Note that the private key is not accessed until usage and may fail or require a PIN later.

**Parameters**

- `pkcs11Uri`: A PKCS \`11` URI
- `privateKeyPkcs11Uri`: A PKCS \`11` URI

**Returns** the new certificate, or `null` on error

**Throws** A `GLib.Error` carrying the failing operation's domain, code, and message.

_Available since 2.68._

### `newFromPkcs12`

```ts
newFromPkcs12(data: Uint8Array | number[], password: string | null): Gio.TlsCertificate
```

Creates a `GTlsCertificate` from the data in `data`. It must contain
a certificate and matching private key.

If extra certificates are included they will be verified as a chain
and the `GTlsCertificate.issuer` property will be set.
All other data will be ignored.

You can pass as single password for all of the data which will be
used both for the PKCS `12` container as well as encrypted
private keys. If decryption fails it will error with
`G_TLS_ERROR_BAD_CERTIFICATE_PASSWORD`.

This constructor requires support in the current `GTlsBackend`.
If support is missing it will error with
`G_IO_ERROR_NOT_SUPPORTED`.

Other parsing failures will error with `G_TLS_ERROR_BAD_CERTIFICATE`.

**Parameters**

- `data`: DER-encoded PKCS `12` format certificate data
- `password`: optional password for encrypted certificate data

**Returns** the new certificate, or `null` if `data` is invalid

**Throws** A `GLib.Error` carrying the failing operation's domain, code, and message.

_Available since 2.72._

## Props

`ref` receives the `Gio.TlsCertificate` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.

### `certificate`

`Uint8Array` · construct-only

The DER (binary) encoded representation of the certificate.
This property and the `GTlsCertificate.certificatePem` property
represent the same data, just in different forms.

_Available since 2.28._

### `certificatePem`

`string` · default `null` · construct-only

The PEM (ASCII) encoded representation of the certificate.
This property and the `GTlsCertificate.certificate`
property represent the same data, just in different forms.

_Available since 2.28._

### `dnsNames`

`bigint[]` · read-only, observe with `onNotifyDnsNames`

The DNS names from the certificate's Subject Alternative Names (SANs),
`null` if unavailable.

_Available since 2.70._

### `ipAddresses`

`bigint[]` · read-only, observe with `onNotifyIpAddresses`

The IP addresses from the certificate's Subject Alternative Names (SANs),
`null` if unavailable.

_Available since 2.70._

### `issuer`

`Gio.TlsCertificate` · construct-only

A `GTlsCertificate` representing the entity that issued this
certificate. If `null`, this means that the certificate is either
self-signed, or else the certificate of the issuer is not
available.

Beware the issuer certificate may not be the same as the
certificate that would actually be used to construct a valid
certification path during certificate verification.
[RFC 4158](https://datatracker.ietf.org/doc/html/rfc4158) explains
why an issuer certificate cannot be naively assumed to be part of the
the certification path (though GLib's TLS backends may not follow the
path building strategies outlined in this RFC). Due to the complexity
of certification path building, GLib does not provide any way to know
which certification path will actually be used. Accordingly, this
property cannot be used to make security-related decisions. Only
GLib itself should make security decisions about TLS certificates.

_Available since 2.28._

### `issuerName`

`string` · default `null` · read-only, observe with `onNotifyIssuerName`

The issuer from the certificate,
`null` if unavailable.

_Available since 2.70._

### `notValidAfter`

`GLib.DateTime` · read-only, observe with `onNotifyNotValidAfter`

The time at which this cert is no longer valid,
`null` if unavailable.

_Available since 2.70._

### `notValidBefore`

`GLib.DateTime` · read-only, observe with `onNotifyNotValidBefore`

The time at which this cert is considered to be valid,
`null` if unavailable.

_Available since 2.70._

### `password`

`string` · default `null` · construct-only

An optional password used when constructed with GTlsCertificate:pkcs12-data.

_Available since 2.72._

### `pkcs11Uri`

`string` · default `null` · construct-only

A URI referencing the [PKCS \`11`](https://docs.oasis-open.org/pkcs11/pkcs11-base/v3.0/os/pkcs11-base-v3.0-os.html)
objects containing an X.509 certificate and optionally a private key.

If `null`, the certificate is either not backed by PKCS \`11` or the
`GTlsBackend` does not support PKCS \`11`.

_Available since 2.68._

### `pkcs12Data`

`Uint8Array` · construct-only

The PKCS `12` formatted data used to construct the object.

See also: `g_tls_certificate_new_from_pkcs12()`

_Available since 2.72._

### `privateKey`

`Uint8Array` · construct-only

The DER (binary) encoded representation of the certificate's
private key, in either [PKCS \`1` format](https://datatracker.ietf.org/doc/html/rfc8017)
or unencrypted [PKCS \`8` format.](https://datatracker.ietf.org/doc/html/rfc5208)
PKCS \`8` format is supported since 2.32; earlier releases only
support PKCS \`1`. You can use the `openssl rsa` tool to convert
PKCS \`8` keys to PKCS \`1`.

This property (or the `GTlsCertificate.privateKeyPem` property)
can be set when constructing a key (for example, from a file).
Since GLib 2.70, it is now also readable; however, be aware that if
the private key is backed by a PKCS \`11` URI – for example, if it
is stored on a smartcard – then this property will be `null`. If so,
the private key must be referenced via its PKCS \`11` URI,
`GTlsCertificate.privateKeyPkcs11Uri`. You must check both
properties to see if the certificate really has a private key.
When this property is read, the output format will be unencrypted
PKCS \`8`.

_Available since 2.28._

### `privateKeyPem`

`string` · default `null` · construct-only

The PEM (ASCII) encoded representation of the certificate's
private key in either [PKCS \`1` format](https://datatracker.ietf.org/doc/html/rfc8017)
("`BEGIN RSA PRIVATE KEY`") or unencrypted
[PKCS \`8` format](https://datatracker.ietf.org/doc/html/rfc5208)
("`BEGIN PRIVATE KEY`"). PKCS \`8` format is supported since 2.32;
earlier releases only support PKCS \`1`. You can use the `openssl rsa`
tool to convert PKCS \`8` keys to PKCS \`1`.

This property (or the `GTlsCertificate.privateKey` property)
can be set when constructing a key (for example, from a file).
Since GLib 2.70, it is now also readable; however, be aware that if
the private key is backed by a PKCS \`11` URI - for example, if it
is stored on a smartcard - then this property will be `null`. If so,
the private key must be referenced via its PKCS \`11` URI,
`GTlsCertificate.privateKeyPkcs11Uri`. You must check both
properties to see if the certificate really has a private key.
When this property is read, the output format will be unencrypted
PKCS \`8`.

_Available since 2.28._

### `privateKeyPkcs11Uri`

`string` · default `null` · construct-only

A URI referencing a [PKCS \`11`](https://docs.oasis-open.org/pkcs11/pkcs11-base/v3.0/os/pkcs11-base-v3.0-os.html)
object containing a private key.

_Available since 2.68._

### `subjectName`

`string` · default `null` · read-only, observe with `onNotifySubjectName`

The subject from the cert,
`null` if unavailable.

_Available since 2.70._

## Methods

Methods are called on the `Gio.TlsCertificate` instance, obtained with the `ref` prop or imported from `@gtkx/gi/gio`. Methods inherited from ancestors are documented on their own pages.

### `getDnsNames`

```ts
getDnsNames(): GLib.Bytes[] | null
```

Gets the value of `GTlsCertificate.dnsNames`.

**Returns** A `GPtrArray` of
`GBytes` elements, or `null` if it's not available.

_Available since 2.70._

### `getIpAddresses`

```ts
getIpAddresses(): Gio.InetAddress[] | null
```

Gets the value of `GTlsCertificate.ipAddresses`.

**Returns** A `GPtrArray`
of `GInetAddress` elements, or `null` if it's not available.

_Available since 2.70._

### `getIssuer`

```ts
getIssuer(): Gio.TlsCertificate | null
```

Gets the `GTlsCertificate` representing `cert`'s issuer, if known

**Returns** The certificate of `cert`'s issuer,
or `null` if `cert` is self-signed or signed with an unknown
certificate.

_Available since 2.28._

### `getIssuerName`

```ts
getIssuerName(): string | null
```

Returns the issuer name from the certificate.

**Returns** The issuer name, or `null` if it's not available.

_Available since 2.70._

### `getNotValidAfter`

```ts
getNotValidAfter(): GLib.DateTime | null
```

Returns the time at which the certificate became or will become invalid.

**Returns** The not-valid-after date, or `null` if it's not available.

_Available since 2.70._

### `getNotValidBefore`

```ts
getNotValidBefore(): GLib.DateTime | null
```

Returns the time at which the certificate became or will become valid.

**Returns** The not-valid-before date, or `null` if it's not available.

_Available since 2.70._

### `getSubjectName`

```ts
getSubjectName(): string | null
```

Returns the subject name from the certificate.

**Returns** The subject name, or `null` if it's not available.

_Available since 2.70._

### `isSame`

```ts
isSame(certTwo: Gio.TlsCertificate): boolean
```

Check if two `GTlsCertificate` objects represent the same certificate.
The raw DER byte data of the two certificates are checked for equality.
This has the effect that two certificates may compare equal even if
their `GTlsCertificate.issuer`, `GTlsCertificate.privateKey`, or
`GTlsCertificate.privateKeyPem` properties differ.

**Parameters**

- `certTwo`: second certificate to compare

**Returns** whether the same or not

_Available since 2.34._

### `verify`

```ts
verify(identity: Gio.SocketConnectable | null, trustedCa: Gio.TlsCertificate | null): Gio.TlsCertificateFlags
```

This verifies `cert` and returns a set of `GTlsCertificateFlags`
indicating any problems found with it. This can be used to verify a
certificate outside the context of making a connection, or to
check a certificate against a CA that is not part of the system
CA database.

If `cert` is valid, `G_TLS_CERTIFICATE_NO_FLAGS` is returned.

If `identity` is not `null`, `cert`'s name(s) will be compared against
it, and `G_TLS_CERTIFICATE_BAD_IDENTITY` will be set in the return
value if it does not match. If `identity` is `null`, that bit will
never be set in the return value.

If `trusted_ca` is not `null`, then `cert` (or one of the certificates
in its chain) must be signed by it, or else
`G_TLS_CERTIFICATE_UNKNOWN_CA` will be set in the return value. If
`trusted_ca` is `null`, that bit will never be set in the return
value.

GLib guarantees that if certificate verification fails, at least one
error will be set in the return value, but it does not guarantee
that all possible errors will be set. Accordingly, you may not safely
decide to ignore any particular type of error. For example, it would
be incorrect to mask `G_TLS_CERTIFICATE_EXPIRED` if you want to allow
expired certificates, because this could potentially be the only
error flag set even if other problems exist with the certificate.

Because TLS session context is not used, `GTlsCertificate` may not
perform as many checks on the certificates as `GTlsConnection` would.
For example, certificate constraints may not be honored, and
revocation checks may not be performed. The best way to verify TLS
certificates used by a TLS connection is to let `GTlsConnection`
handle the verification.

**Parameters**

- `identity`: the expected peer identity
- `trustedCa`: the certificate of a trusted authority

**Returns** the appropriate `GTlsCertificateFlags`

_Available since 2.28._
