import { mount } from "@vue/test-utils";
import AppInput from "./AppInput";

const defaultProps = {
  name: "app-input",
  label: "My input",
  placeholder: "your input here",
};

describe("Unit|Common|AppInput", () => {
  it("renders expected attributes on input element", () => {
    const wrapper = mount(AppInput, {
      props: {
        ...defaultProps,
      },
    });
    expect(wrapper.find("input").element.name).toEqual(defaultProps.name);
    expect(wrapper.find("input").element.placeholder).toEqual(
      defaultProps.placeholder
    );
  });
  it("renders provided help text", () => {
    const helpText = "*This field is required";
    const wrapper = mount(AppInput, {
      props: {
        ...defaultProps,
        helpText,
      },
    });
    expect(wrapper.find(".app-input__help")).toBeTruthy();
    expect(wrapper.find(".app-input__help").html()).toContain(helpText);
  });
  it("renders provided error text", () => {
    const errorText = "*This field is required";
    const wrapper = mount(AppInput, {
      props: {
        ...defaultProps,
        error: errorText,
      },
    });
    expect(wrapper.find(".app-input__error").element).toBeTruthy();
    expect(wrapper.find(".app-input__error").html()).toContain(errorText);
  });
  it("does not render error text if no error provided", () => {
    const wrapper = mount(AppInput, {
      props: {
        ...defaultProps,
      },
    });
    expect(wrapper.find(".app-input__error").exists()).toBe(false);
  });
  it("reacts to change in error status", async () => {
    const helpText = "*This field is required.";
    const error = "This field cannot be blank.";
    const wrapper = mount(AppInput, {
      props: {
        ...defaultProps,
        helpText,
      },
    });
    expect(wrapper.find(".app-input__help").html()).toContain(helpText);
    await wrapper.setProps({ error });
    expect(wrapper.find(".app-input__help").exists()).toBe(false);
    expect(wrapper.find(".app-input__error").exists()).toBe(true);
    expect(wrapper.find(".app-input__error").html()).toContain(error);
  });
  it("emits updated value on input", () => {
    const inputValue = "my input value";
    const wrapper = mount(AppInput, {
      props: {
        ...defaultProps,
      },
    });
    wrapper.find("input").setValue(inputValue);
    expect(wrapper.emitted().input[0]).toEqual([inputValue]);
  });
  it("reacts to updated value on prop change", async () => {
    const inputValue = "my input value";
    const newValue = "my second input value";
    const wrapper = mount(AppInput, {
      props: {
        ...defaultProps,
        value: inputValue,
      },
    });
    expect(wrapper.find("input").element.value).toBe(inputValue);
    await wrapper.setProps({ value: newValue });
    expect(wrapper.find("input").element.value).toBe(newValue);
  });
  it("renders input as readonly when readonly prop provided", () => {
    const wrapper = mount(AppInput, {
      props: {
        ...defaultProps,
        readonly: true,
      },
    });
    expect(wrapper.find("input").element.readOnly).toEqual(true);
  });
  it("renders input as disabled when disabled prop provided", () => {
    const wrapper = mount(AppInput, {
      props: {
        ...defaultProps,
        disabled: true,
      },
    });
    expect(wrapper.find("input").element.disabled).toEqual(true);
  });
});
