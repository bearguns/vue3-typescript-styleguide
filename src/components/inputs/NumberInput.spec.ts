import { mount } from "@vue/test-utils";
import NumberInput from "./NumberInput.vue";

const defaultProps = {
  name: "price",
  label: "Price",
  min: 0,
  max: 1,
};

describe("Components | Inputs | NumberInput", () => {
  test("Sets provided name on name attribute of input", () => {
    const wrapper = mount(NumberInput, {
      props: {
        ...defaultProps,
      },
    });
    expect(wrapper.find("input").attributes("name")).toBe(defaultProps.name);
  });

  test("Sets provided name as data-qa attribute of input", () => {
    const wrapper = mount(NumberInput, {
      props: {
        ...defaultProps,
      },
    });
    expect(wrapper.find("input").attributes("data-qa")).toBe(`${defaultProps.name}_input`);
  });

  test("Receives current value as prop from parent", () => {
    const Component = {
      components: { NumberInput },
      data() {
        return {
          ...defaultProps,
          value: 0,
        };
      },
      template: '<NumberInput :min="min" :max="max" v-model="value" :name="name" :label="label" />',
    };
    const wrapper = mount(Component);
    expect(wrapper.find("input").element.value).toBe("0");
  });

  test("Reacts to change in parent model data", async () => {
    const Component = {
      components: { NumberInput },
      data() {
        return {
          ...defaultProps,
          value: 0,
        };
      },
      template: '<NumberInput :min="min" :max="max" v-model="value" :name="name" :label="label" />',
    };
    const wrapper = mount(Component);
    await wrapper.setData({ value: 1 });
    expect(wrapper.find("input").element.value).toBe("1");
  });

  test("Emits new value on input", async () => {
    const wrapper = mount(NumberInput, {
      props: {
        ...defaultProps,
      },
    });
    await wrapper.find("input").setValue(2);
    const em: any[] = wrapper.emitted("update:modelValue");
    expect(em).toBeTruthy();
    expect(em[0][0]).toBe("2");
  });

  test("Emits blur event to parent for handling", async () => {
    const wrapper = mount(NumberInput, {
      props: {
        ...defaultProps,
      },
    });
    await wrapper.find("input").trigger("blur");
    expect(wrapper.emitted("blur")).toBeTruthy();
  });

  test("Renders with red border if in error state", () => {
    const errorText = "This is BAD.";
    const wrapper = mount(NumberInput, {
      props: {
        ...defaultProps,
        errorText,
      },
    });
    expect(wrapper.find("input").element.classList).toContain("is-danger");
  });
});
