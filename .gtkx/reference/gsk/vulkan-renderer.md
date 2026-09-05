---
description: "Renders a GSK rendernode tree with Vulkan."
---

# GskVulkanRenderer

Renders a GSK rendernode tree with Vulkan.

This renderer will fail to realize if Vulkan is not supported.

```tsx
import { GskVulkanRenderer } from "@gtkx/jsx/gsk";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → [GskRenderer](.gtkx/reference/gsk/renderer.md) → **GskVulkanRenderer**

## Static methods

Static methods are called on `Gsk.VulkanRenderer`, imported from `@gtkx/gi/gsk`.

### `new`

```ts
new(): Gsk.Renderer
```

Creates a new Vulkan renderer.

The Vulkan renderer is a renderer that uses the Vulkan library for
rendering.

This renderer will fail to realize when GTK was not compiled with
Vulkan support.

**Returns** a new Vulkan renderer

## Props

`ref` receives the `Gsk.VulkanRenderer` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.
