<template>
  <div class="box">
    <div class="block">
      <p class="title">Inputs</p>
      <p>
        Several pre-configured input components are available, with shared common functionality as well as custom
        behavior tailored to the type of input.
      </p>
      <p>
        Inputs with a field for users to type into can self-validate via the <code>include</code>, <code>exclude</code>,
        and <code>required</code> props.
      </p>
      <p>
        Additionally, these components will render an appropriate error message if the self-validation fails. This
        message can be overwritten by the parent by providing the <code>errorMsg</code> prop, which will supercede any
        self-generated error messaging. This allows for the inputs themselves to provide basic validation, while the
        parent can perform more advanced validation, or set an error message on a field if the server rejects that field
        etc.
      </p>
    </div>
    <div class="block">
      <p class="title is-size-4">Include</p>
      <p>
        Provides a list of characters which <strong>must</strong> be present in the input value in order to pass
        validation.
      </p>
      <p>
        This prop is an object that implements the <code>Include</code> interface, described in
        <code>src/composers/inputs.ts</code>. This object requires an array of characters (include.chars), and can have
        an optional <code>strict: boolean</code> value.
      </p>
      <p>
        If <code>include.strict</code> is <code>true</code>, then <strong>every</strong> character in
        <code>props.include.chars</code> must be present in the input value in order to pass validation. Otherwise,
        validation will pass if <strong>any</strong> character from <code>props.include.chars</code> is present.
      </p>
    </div>
    <div class="block">
      <p class="title is-size-4">Exclude</p>
      <p>
        Simliar to include, this prop is an array of characters which cannot be present in the input string. If a user
        enters any character present in <code>exclude</code>, validation will fail.
      </p>
    </div>
    <div class="block">
      <p class="title is-size-4">Required</p>
      <p>
        Passing a value of <code>true</code> to this prop will cause validation to fail if the user blurs the input
        without entering a value.
      </p>
    </div>
    <div class="block">
      <title class="is-size-4">Min</title>
      <p>Passing a number to the <code>min</code> prop provides the following:</p>
      <p>
        For text inputs, like <code>PasswordInput</code>, this prop will validate that the user's input value
        <strong>meets or exceeds</strong> <code>min</code>.
      </p>
      <p>
        For number inputs, this will validate that the input value is greater than or equal to the value of
        <code>min</code>.
      </p>
    </div>
    <div class="block">
      <p class="title is-size-4">Max</p>
      <p>
        Like <code>min</code>, but validates that the length of the input value is equal to or less than the value of
        <code>max</code>.
      </p>
      <p>For numeric inputs, this will validate that the value is less than or equal to <code>max</code>.</p>
    </div>
  </div>

  <div class="box">
    <p class="title">Self-validating inputs</p>
    <div class="block">
      <TextInputDemo />
    </div>
    <div class="block">
      <NumberInputDemo />
    </div>
  </div>

  <div class="box">
    <p class="title">Specialized Inputs</p>
    <FileInputDemo />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, ref } from "vue";
import { TextInputDemo, NumberInputDemo, FileInputDemo } from "../components/pages/inputs";
export default defineComponent({
  components: { TextInputDemo, NumberInputDemo, FileInputDemo },
  setup(props) {},
});
</script>
