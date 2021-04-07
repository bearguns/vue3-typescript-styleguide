import { mount } from "@vue/test-utils";
import TextInput from "./TextInput.vue";
import { errors, Include } from "../../composers/inputs";

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
    expect(wrapper.find("input").attributes("data-qa")).toEqual(`${defaultProps.name}_input`);
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

  test("Renders validation error if field required and blank on blur", async () => {
    const wrapper = mount(TextInput, {
      props: {
        ...defaultProps,
        required: true,
      },
    });
    await wrapper.find("input").setValue("");
    await wrapper.find("input").trigger("blur");
    expect(wrapper.find(".help.is-danger").html()).toContain(errors.blank);
  });

  test("Renders validation error if field contains invalid characters", async () => {
    const exclude = ["!", "?", "@"];
    const wrapper = mount(TextInput, {
      props: {
        ...defaultProps,
        exclude,
      },
    });
    await wrapper.find("input").setValue("Did you @ me? Don't @ me!");
    await wrapper.find("input").trigger("blur");
    expect(wrapper.find(".help.is-danger").html()).toContain(errors.exclude(exclude));
  });

  test("Renders validation error if a required character missing", async () => {
    const include: Include = {
      chars: ["!", "@", "7"],
      strict: false,
    };
    const wrapper = mount(TextInput, {
      props: {
        ...defaultProps,
        include,
      },
    });
    await wrapper.find("input").setValue("No characters here.");
    await wrapper.find("input").trigger("blur");
    expect(wrapper.find(".help.is-danger").html()).toContain(errors.include(include.chars));
  });

  test("Renders validation error if all required characters missing", async () => {
    const include: Include = {
      chars: ["8", "@", "&"],
      strict: true,
    };
    const wrapper = mount(TextInput, {
      props: {
        ...defaultProps,
        include,
      },
    });
    await wrapper.find("input").setValue("I 8 the thing @ the restaurant.");
    await wrapper.find("input").trigger("blur");
    expect(wrapper.find(".help.is-danger").html()).toContain(errors.includeStrict(include.chars));
  });

  test("Renders error if value does not meet or exceed provided min prop", async () => {
    const min = 8;
    const wrapper = mount(TextInput, {
      props: {
        ...defaultProps,
        min,
      },
    });
    await wrapper.find("input").setValue("12345");
    await wrapper.find("input").trigger("blur");
    expect(wrapper.find(".help.is-danger").html()).toContain(errors.short(min));
  });

  test("Does not render error if value meets or exceeds provided min prop", async () => {
    const min = 4;
    const wrapper = mount(TextInput, {
      props: {
        ...defaultProps,
        min,
      },
    });
    await wrapper.find("input").setValue("12345");
    await wrapper.find("input").trigger("blur");
    expect(wrapper.find(".help.is-danger").html()).not.toContain(errors.short(min));
  });

  test("Renders error if value length exceeds provided max prop", async () => {
    const max = 7;
    const wrapper = mount(TextInput, {
      props: {
        ...defaultProps,
        max,
      },
    });
    await wrapper.find("input").setValue("1234567890");
    await wrapper.find("input").trigger("blur");
    expect(wrapper.find(".help.is-danger").html()).toContain(errors.long(max));
  });

  test("Does not render error if value length does not exceed provided max prop", async () => {
    const max = 7;
    const wrapper = mount(TextInput, {
      props: {
        ...defaultProps,
        max,
      },
    });
    await wrapper.find("input").setValue("123456");
    await wrapper.find("input").trigger("blur");
    expect(wrapper.find(".help.is-danger").html()).not.toContain(errors.long(max));
  });

  test("Renders error if non-numeric characters entered and 'allow' prop === 'numeric'", async () => {
    const wrapper = mount(TextInput, {
      props: {
        ...defaultProps,
        allow: "numeric",
      },
    });
    await wrapper.find("input").setValue("hey0uguys");
    await wrapper.find("input").trigger("blur");
    expect(wrapper.find(".help.is-danger").html()).toContain(errors.numeric);
  });

  test("Error message from parent supercedes local errors", async () => {
    const errorMsg = "The system...is down.";
    const wrapper = mount(TextInput, {
      props: {
        ...defaultProps,
        errorMsg,
      },
    });
    await wrapper.find("input").setValue("");
    await wrapper.find("input").trigger("blur");
    expect(wrapper.find(".help.is-danger").html()).toContain(errorMsg);
  });
});
