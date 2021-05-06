<template>
  <div class="block">
    <p class="title">TextInput</p>
    <p>
      A pre-styled text input, capable of self-validating on blur via the <code>include</code>, <code>exclude</code>,
      and <code>required</code> props. Expects a <code>v-model</code> for binding to a value controlled by the parent.
    </p>
    <div class="columns">
      <div class="column">
        <div class="field is-grouped">
          <TextInput label="Simple text" name="text-input-demo" v-model="simple" placeholder="Enter text here" />
        </div>
        <p>{{ simple }}</p>
      </div>
      <div class="column">
        <TextInput
          label="Required text (blur to see)"
          name="required-text"
          v-model="required"
          placeholder="I'm required!"
          :required="true"
        />
        <p>{{ required }}</p>
      </div>
      <div class="column">
        <TextInput
          label="Include !,*,@ (not strict)"
          placeholder="Enter text without required characters"
          name="include-text"
          v-model="include"
          :include="{ chars: ['!', '*', '@'] }"
        />
        <p>{{ include }}</p>
      </div>
      <div class="column">
        <TextInput
          label="Include !,*,@ (strict)"
          placeholder="Enter text without required characters"
          name="include-strict-text"
          v-model="include"
          :include="{ chars: ['!', '*', '@'], strict: true }"
        />
      </div>
    </div>
    <div class="columns">
      <div class="column is-one-quarter">
        <TextInput
          label="Exclude !,*,@"
          placeholder="Don't enter !, *, or @"
          name="exclude-text"
          v-model="exclude"
          :exclude="['!', '*', '@']"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { TextInput } from "../../inputs";
export default defineComponent({
  name: "TextInputDemo",
  components: { TextInput },
  setup() {
    const simple = ref("");
    const required = ref("");
    const exclude = ref("");
    const include = ref("");
    const includeStrict = ref("");
    return {
      simple,
      required,
      include,
      includeStrict,
      exclude,
    };
  },
});
</script>
