<template>
  <div class="file-input-demo">
    <p class="title is-size-3">FileInput</p>
    <div class="block">
      <FileInput label="Select a file" name="file-demo" :fileName="fileName" @change="setFile" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import { FileInput } from "../../inputs";
export default defineComponent({
  name: "FileInputDemo",
  components: { FileInput },
  setup() {
    const fileName = ref("");
    const file = ref({ contents: {} });
    function setFile(e: any) {
      console.log(e);
      fileName.value = e[0].name;
      file.value.contents = e;
    }

    return {
      fileName,
      setFile,
      file,
    };
  },
});
</script>
