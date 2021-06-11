import { mount } from "@vue/test-utils";
import AppSwitch from "./AppSwitch.vue";

describe("AppSwitch", () => {
  it("renders provided label and name", () => {
    const label = "Checkbox";
    const name = "checkbox-name";
    const wrapper = mount(AppSwitch, {
      props: {
        label,
        name,
      },
    });
    expect(wrapper.find("label").html()).toContain(label);
    expect(wrapper.find("input").attributes("name")).toEqual(name);
  });

  it("renders as checked when provided value is true", () => {
    const wrapper = mount(AppSwitch, {
      props: {
        name: "checkbox",
        modelValue: true,
      },
    });
    expect(wrapper.find("input").element.checked).toBe(true);
  });

  it("renders as disabled when disabled property is true", () => {
    const wrapper = mount(AppSwitch, {
      props: {
        name: "checkbox",
        modelValue: false,
        disabled: true,
      },
    });
    expect(wrapper.find("span.switch-label").element.classList).toContain("switch-label--disabled");
  });

  it("renders as not checked when provided value is false", () => {
    const wrapper = mount(AppSwitch, {
      props: {
        name: "checkbox",
        checked: false,
      },
    });
    expect(wrapper.find("input").element.checked).toBe(false);
  });

  it("reacts to change in received checked prop", async () => {
    const wrapper = mount(AppSwitch, {
      props: {
        name: "checkbox",
        modelValue: false,
      },
    });
    expect(wrapper.find("input").element.checked).toBe(false);
    await wrapper.setProps({ modelValue: true });
    expect(wrapper.find("input").element.checked).toBe(true);
  });

  it("emits current value of checkbox when clicked (false => true)", () => {
    const wrapper = mount(AppSwitch, {
      props: {
        name: "checkbox",
        modelValue: false,
      },
    });
    wrapper.find("input").trigger("click");
    wrapper.find("input").trigger("change");
    expect(wrapper.emitted("update:modelValue")).toHaveLength(1);
    // @ts-ignore
    expect(wrapper.emitted("update:modelValue")[0]).toEqual([true]);
  });

  it("emits current value of checkbox when clicked (true => false)", async () => {
    const wrapper = mount(AppSwitch, {
      props: {
        name: "checkbox",
        modelValue: true,
      },
    });
    wrapper.find("input").trigger("click");
    wrapper.find("input").trigger("change");
    expect(wrapper.emitted("update:modelValue")).toHaveLength(1);
    // @ts-ignore
    expect(wrapper.emitted("update:modelValue")[0]).toEqual([false]);
  });
});
