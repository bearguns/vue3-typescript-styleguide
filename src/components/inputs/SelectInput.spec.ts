import { mount } from "@vue/test-utils";
import SelectInput from "./SelectInput.vue";

const defaultProps = {
  name: "my-select",
  label: "Select an option",
  options: [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
  ],
};

describe("Unit | Components | SelectInput", () => {
  it("Renders HTML select element with provide name and label", () => {
    const wrapper = mount(SelectInput, {
      props: {
        ...defaultProps,
      },
    });
    expect(wrapper.find("select").attributes("name")).toBe(defaultProps.name);
    expect(wrapper.find("select").attributes("data-qa")).toBe(defaultProps.name + "_input");
    expect(wrapper.find("label").attributes("for")).toBe(defaultProps.name);
    expect(wrapper.find("label").attributes("data-qa")).toBe(defaultProps.name + "_label");
    expect(wrapper.find("label").html()).toContain(defaultProps.label);
  });

  it("Renders default -- option plus provided options", () => {
    const wrapper = mount(SelectInput, {
      props: {
        ...defaultProps,
      },
    });
    expect(wrapper.findAll("option")).toHaveLength(defaultProps.options.length + 1);
  });

  it("renders with modelValue option selected", () => {
    const wrapper = mount(SelectInput, {
      props: {
        ...defaultProps,
        modelValue: "2",
      },
    });
    expect(wrapper.find("option:checked").attributes("value")).toBe("2");
  });

  it("emits new value to parent when option clicked", async () => {
    const wrapper = mount(SelectInput, {
      props: {
        ...defaultProps,
        modelValue: undefined,
      },
    });
    // @ts-ignore
    await wrapper.find("select").trigger("change");
    // @ts-ignore
    expect(wrapper.emitted("update:modelValue")).toHaveLength(1);
  });
});
