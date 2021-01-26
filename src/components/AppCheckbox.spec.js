import { mount } from "@vue/test-utils";
import AppCheckbox from "./AppCheckbox.vue";

describe("AppCheckbox", () => {
  it("renders provided label and name", () => {
    const label = "Checkbox";
    const name = "checkbox-name";
    const wrapper = mount(AppCheckbox, {
      props: {
        label,
        name,
      },
    });
    expect(wrapper.find("label").html()).toContain(label);
    expect(wrapper.find("input").element.name).toEqual(name);
  });
  it("renders as checked when provided value is true", () => {
    const wrapper = mount(AppCheckbox, {
      props: {
        name: "checkbox",
        checked: true,
      },
    });
    expect(wrapper.find("input").element.checked).toBe(true);
  });
  it("renders as disabled when disabled property is true", () => {
    const wrapper = mount(AppCheckbox, {
      props: {
        name: "checkbox",
        checked: false,
        disabled: true,
      },
    });
    expect(wrapper.find("input").element.disabled).toBe(true);
  });
  it("renders as not checked when provided value is false", () => {
    const wrapper = mount(AppCheckbox, {
      props: {
        name: "checkbox",
        checked: false,
      },
    });
    expect(wrapper.find("input").element.checked).toBe(false);
  });
  it("reacts to change in received checked prop", async () => {
    const wrapper = mount(AppCheckbox, {
      props: {
        name: "checkbox",
        checked: false,
      },
    });
    expect(wrapper.find("input").element.checked).toBe(false);
    await wrapper.setProps({ checked: true });
    expect(wrapper.find("input").element.checked).toBe(true);
  });
  it("emits current value of checkbox when clicked (false => true)", () => {
    const wrapper = mount(AppCheckbox, {
      props: {
        name: "checkbox",
        checked: false,
      },
    });
    wrapper.find("input").element.click();
    expect(wrapper.emitted().click[0]).toEqual([true]);
  });
  it("emits current value of checkbox when clicked (true => false)", () => {
    const wrapper = mount(AppCheckbox, {
      props: {
        name: "checkbox",
        checked: true,
      },
    });
    wrapper.find("input").element.click();
    expect(wrapper.emitted().click[0]).toEqual([false]);
  });
});
