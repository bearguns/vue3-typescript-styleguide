<template>
  <div class="inputs-page">
    <h1 class="title">Inputs</h1>
    <div class="columns">
      <div class="column is-one-third">
        <AppPanel title="Basic inputs">
          <FileInput label="File input" name="test-file" :fileName="fileName" @change="setFile" />
          <TextInput label="Text input" name="test-text" v-model="testText" :required="true" />
          <EmailInput label="Email input" name="test-email" v-model="testEmail" :required="true" />
          <MultilineText label="Text area" name="test-multiline" v-model="testMultiline" :required="true" />
        </AppPanel>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, ref } from "vue";
import { AppPanel } from "../components/layout";
import { FileInput, TextInput, MultilineText, EmailInput } from "../components/inputs";
export default defineComponent({
  components: { AppPanel, FileInput, TextInput, MultilineText, EmailInput },
  setup(props) {
    const testFile = reactive({ list: [] });
    const testText = ref("");
    const testMultiline = ref("");
    const testEmail = ref("");
    const fileName = computed(() => {
      return testFile.list.length ? testFile.list[0].name : "";
    });

    function setFile(fileList) {
      testFile.list = fileList;
    }
    return {
      testFile,
      fileName,
      setFile,
      testText,
      testMultiline,
      testEmail,
    };
  },
});
</script>
