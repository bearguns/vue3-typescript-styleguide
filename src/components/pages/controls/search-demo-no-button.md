<p class="title is-size-4">AppSearch</p>

A reusable search field, with a simple API to allow proper placement and styling.

**Props:**

| Prop                  | Required? | Default  | Description                                                                          |
|-----------------------|-----------|----------|--------------------------------------------------------------------------------------|
| `name: string`        | true      | n/a      | `name` attribute for input element. Required for QA automation and accessibility     |
| `placeholder: string` | false     | "Search" | Placeholder text for input element                                                   |
| `align: string`       | false     | "right"  | Align component to left or right of container. Allowed values are `"left" \|"right"` |
| `hasButton: boolean`  | false     | `false`  | Render component with optional "Submit" button based on UX design.                   |

`AppSearch` emits its input value to the parent component, debounced with a 500ms delay. The parent can then handle the emitted value as appropriate.
