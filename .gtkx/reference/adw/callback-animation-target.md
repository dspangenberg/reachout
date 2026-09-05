---
description: "An AnimationTarget that calls a given callback during the animation."
---

# AdwCallbackAnimationTarget

An `AnimationTarget` that calls a given callback during the
animation.

```tsx
import { AdwCallbackAnimationTarget } from "@gtkx/jsx/adw";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → [AdwAnimationTarget](.gtkx/reference/adw/animation-target.md) → **AdwCallbackAnimationTarget**

## Static methods

Static methods are called on `Adw.CallbackAnimationTarget`, imported from `@gtkx/gi/adw`.

### `new`

```ts
new(callback: Adw.AnimationTargetFunc): Adw.AnimationTarget
```

Creates a new `AdwAnimationTarget` that calls the given `callback` during
the animation.

**Parameters**

- `callback`: the callback to call

**Returns** the newly created callback target

## Props

`ref` receives the `Adw.CallbackAnimationTarget` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.
