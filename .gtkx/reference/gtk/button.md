---
description: "Calls a callback function when the button is clicked."
---

# GtkButton

Calls a callback function when the button is clicked.

The `GtkButton` widget can hold any valid child widget. That is, it can hold
almost any other standard `GtkWidget`. The most commonly used child is the
`GtkLabel`.

## Shortcuts and Gestures

The following signals have default keybindings:

- `Gtk.Button.activate`

## CSS nodes

`GtkButton` has a single CSS node with name button. The node will get the
style classes .image-button or .text-button, if the content is just an
image or label, respectively. It may also receive the .flat style class.
When activating a button via the keyboard, the button will temporarily
gain the .keyboard-activating style class.

Other style classes that are commonly used with `GtkButton` include
.suggested-action and .destructive-action. In special cases, buttons
can be made round by adding the .circular style class.

Button-like widgets like `Gtk.ToggleButton`, `Gtk.MenuButton`,
`Gtk.VolumeButton`, `Gtk.LockButton`, `Gtk.ColorButton`
or `Gtk.FontButton` use style classes such as .toggle, .popup, .scale,
.lock, .color on the button node to differentiate themselves from a plain
`GtkButton`.

## Accessibility

`GtkButton` uses the `Gtk.AccessibleRole.button` role.

```tsx
import { GtkButton } from "@gtkx/jsx/gtk";
```

## Hierarchy

[GObject](.gtkx/reference/gobject/object.md) → [GInitiallyUnowned](.gtkx/reference/gobject/initially-unowned.md) → [GtkWidget](.gtkx/reference/gtk/widget.md) → **GtkButton**

Implements `GtkAccessible`, `GtkActionable`, `GtkBuildable`, `GtkConstraintTarget`.

## Static methods

Static methods are called on `Gtk.Button`, imported from `@gtkx/gi/gtk`.

### `new`

```ts
new(): Gtk.Widget
```

Creates a new `GtkButton` widget.

To add a child widget to the button, use `Gtk.Button.setChild()`.

**Returns** The newly created `GtkButton` widget.

### `newFromIconName`

```ts
newFromIconName(iconName: string): Gtk.Widget
```

Creates a new button containing an icon from the current icon theme.

If the icon name isn’t known, a “broken image” icon will be
displayed instead. If the current icon theme is changed, the icon
will be updated appropriately.

**Parameters**

- `iconName`: an icon name

**Returns** a new `GtkButton` displaying the themed icon

### `newWithLabel`

```ts
newWithLabel(label: string): Gtk.Widget
```

Creates a `GtkButton` widget with a `GtkLabel` child.

**Parameters**

- `label`: The text you want the `GtkLabel` to hold

**Returns** The newly created `GtkButton` widget

### `newWithMnemonic`

```ts
newWithMnemonic(label: string): Gtk.Widget
```

Creates a new `GtkButton` containing a label.

If characters in `label` are preceded by an underscore, they are underlined.
If you need a literal underscore character in a label, use “__” (two
underscores). The first underlined character represents a keyboard
accelerator called a mnemonic. Pressing <kbd>Alt</kbd> and that key
activates the button.

**Parameters**

- `label`: The text of the button, with an underscore in front of the mnemonic character

**Returns** a new `GtkButton`

## Props

`ref` receives the `Gtk.Button` instance. Every mutable property also has an `onNotify<Prop>` handler prop called with the new value when the property changes. Props inherited from ancestor elements are documented on their own pages.

### `actionName`

`string` · default `null` · from `GtkActionable`

The name of the action with which this widget should be associated.

### `actionTarget`

`GLib.Variant` · from `GtkActionable`

The target value of the actionable widget's action.

### `canShrink`

`boolean` · default `false`

Whether the size of the button can be made smaller than the natural
size of its contents.

For text buttons, setting this property will allow ellipsizing the label.

If the contents of a button are an icon or a custom widget, setting this
property has no effect.

_Available since 4.12._

### `children`

`ReactNode`

Elements attached to the element's default child slot, or its text for elements that hold text.

### `hasFrame`

`boolean` · default `true`

Whether the button has a frame.

### `iconName`

`string` · default `null`

The name of the icon used to automatically populate the button.

### `label`

`string` · default `null`

Text of the label inside the button, if the button contains a label widget.

### `useUnderline`

`boolean` · default `false`

If set, an underline in the text indicates that the following character is
to be used as mnemonic.

## Signals

### `onActivate`

```ts
(self: Gtk.Button) => void
```

Emitted to animate press then release.

This is an action signal. Applications should never connect
to this signal, but use the `Gtk.Button.clicked` signal.

The default bindings for this signal are all forms of the
<kbd>␣</kbd> and <kbd>Enter</kbd> keys.

**Parameters**

- `self`: The instance the signal was emitted on.

### `onClicked`

```ts
(self: Gtk.Button) => void
```

Emitted when the button has been activated (pressed and released).

**Parameters**

- `self`: The instance the signal was emitted on.

## Methods

Methods are called on the `Gtk.Button` instance, obtained with the `ref` prop or imported from `@gtkx/gi/gtk`. Methods inherited from ancestors are documented on their own pages.

### `getCanShrink`

```ts
getCanShrink(): boolean
```

Retrieves whether the button can be smaller than the natural
size of its contents.

**Returns** true if the button can shrink, and false otherwise

_Available since 4.12._

### `getChild`

```ts
getChild(): Gtk.Widget | null
```

Gets the child widget of `button`.

**Returns** the child widget of `button`

### `getHasFrame`

```ts
getHasFrame(): boolean
```

Returns whether the button has a frame.

**Returns** `true` if the button has a frame

### `getIconName`

```ts
getIconName(): string | null
```

Returns the icon name of the button.

If the icon name has not been set with `Gtk.Button.setIconName()`
the return value will be `null`. This will be the case if you create
an empty button with `Gtk.Button.new()` to use as a container.

**Returns** The icon name set via `Gtk.Button.setIconName()`

### `getLabel`

```ts
getLabel(): string | null
```

Fetches the text from the label of the button.

If the label text has not been set with `Gtk.Button.setLabel()`
the return value will be `null`. This will be the case if you create
an empty button with `Gtk.Button.new()` to use as a container.

**Returns** The text of the label widget.

### `getUseUnderline`

```ts
getUseUnderline(): boolean
```

gets whether underlines are interpreted as mnemonics.

See `Gtk.Button.setUseUnderline()`.

**Returns** `true` if an embedded underline in the button label
  indicates the mnemonic accelerator keys.

### `setCanShrink`

```ts
setCanShrink(canShrink: boolean): void
```

Sets whether the button size can be smaller than the natural size of
its contents.

For text buttons, setting `can_shrink` to true will ellipsize the label.

For icons and custom children, this function has no effect.

**Parameters**

- `canShrink`: whether the button can shrink

_Available since 4.12._

### `setChild`

```ts
setChild(child: Gtk.Widget | null): void
```

Sets the child widget of `button`.

Note that by using this API, you take full responsibility for setting
up the proper accessibility label and description information for `button`.
Most likely, you'll either set the accessibility label or description
for `button` explicitly, or you'll set a labelled-by or described-by
relations from `child` to `button`.

**Parameters**

- `child`: the child widget

### `setHasFrame`

```ts
setHasFrame(hasFrame: boolean): void
```

Sets the style of the button.

Buttons can have a flat appearance or have a frame drawn around them.

**Parameters**

- `hasFrame`: whether the button should have a visible frame

### `setIconName`

```ts
setIconName(iconName: string): void
```

Adds a `GtkImage` with the given icon name as a child.

If `button` already contains a child widget, that child widget will
be removed and replaced with the image.

**Parameters**

- `iconName`: An icon name

### `setLabel`

```ts
setLabel(label: string): void
```

Sets the text of the label of the button to `label`.

This will also clear any previously set labels.

**Parameters**

- `label`: a string

### `setUseUnderline`

```ts
setUseUnderline(useUnderline: boolean): void
```

Sets whether to use underlines as mnemonics.

If true, an underline in the text of the button label indicates
the next character should be used for the mnemonic accelerator key.

**Parameters**

- `useUnderline`: `true` if underlines in the text indicate mnemonics
