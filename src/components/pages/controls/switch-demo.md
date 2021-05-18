## AppSwitch
A styled checkbox that emulates iOS/macOS switches.

### Props
- `label: string` an optional text label to describe the switch's controlled function
- `name: string` -- **required** -- `name` attribute for underlying HTML element
- `disabled: boolean` optionally disable the switch
- `v-model` bind switch state to parent component state

### Emits
- `update:modelValue` -- bound with `v-model` to parent

### Usage
```html
import { AppSwitch } from "@teliax/styleguide"
<AppSwitch label="My switch" name="feature_switch" :disabled="featureNotAllowed" v-model="parentStateValue" />
```
