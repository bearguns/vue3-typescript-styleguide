import { mount } from "@vue/test-utils";
import TextInput from "./TextInput.vue";

const defaultProps = {
  name: "namey",
  label: "My input",
};

describe("Components | Inputs | TextInput", () => {
  test("Sets provided name on name attribute of input", () => {
    const wrapper = mount(TextInput, {
      props: {
        ...defaultProps,
      },
    });
    expect(wrapper.find("input").attributes("name")).toEqual(defaultProps.name);
  });

  test("Sets provided name as data-qa attribute of input", () => {
    const wrapper = mount(TextInput, {
      props: {
        ...defaultProps,
      },
    });
    expect(wrapper.find("input").attributes("data-qa")).toEqual(
      `${defaultProps.name}_input`
    );
  });

  test("Emits new value to parent", async () => {
    const wrapper = mount(TextInput, {
      props: {
        ...defaultProps,
      },
    });

    await wrapper.find("input").setValue("foobar");
    await wrapper.find("input").trigger("input");
    const emittedValues: any[] = wrapper.emitted("update:modelValue");
    expect(emittedValues[0][0]).toEqual("foobar");
  });

  test("Receives input value from parent", async () => {
    const Component = {
      components: { TextInput },
      data() {
        return {
          name: defaultProps.name,
          label: defaultProps.label,
          value: "",
        };
      },
      template: '<TextInput :label="label" :name="name" v-model="value" />',
    };
    const wrapper = mount(Component);
    await wrapper.setData({ value: "foo" });
    expect(wrapper.find("input").element.value).toContain("foo");
  });

  test("Renders red border if in error state", () => {
    const errorMsg = "This field was filled out incorrectly.";
    const wrapper = mount(TextInput, {
      props: {
        ...defaultProps,
        errorMsg,
      },
    });
    expect(wrapper.find("input").classes()).toContain("is-danger");
  });

  test("Renders green border if in success state", () => {
    const successMsg = "This field looks great!";
    const wrapper = mount(TextInput, {
      props: {
        ...defaultProps,
        successMsg,
      },
    });
    expect(wrapper.find("input").classes()).toContain("is-success");
  });
});
