import { mount } from "@vue/test-utils";
import InputField from "./InputField.vue";
const defaultProps = {
  name: "namey",
  label: "My input",
};

describe("Components | Inputs | InputField", () => {
  test("Renders provided input in 'input' slot", () => {
    const wrapper = mount(InputField, {
      slots: {
        input: '<input type="text" value="foo" />',
      },
      props: {
        ...defaultProps,
      },
    });
    expect(wrapper.find('input[type="text"]')).toBeTruthy();
  });

  test("Renders provided label", () => {
    const wrapper = mount(InputField, {
      props: {
        ...defaultProps,
      },
    });
    expect(wrapper.find("label").html()).toContain(defaultProps.label);
  });

  test("Passes provided name to 'for' attribute on label", () => {
    const wrapper = mount(InputField, {
      props: {
        ...defaultProps,
      },
    });
    expect(wrapper.find("label").attributes("for")).toEqual(defaultProps.name);
  });

  test("Passes provided name to 'data-qa' attribute on label", () => {
    const wrapper = mount(InputField, {
      props: {
        ...defaultProps,
      },
    });
    expect(wrapper.find("label").attributes("data-qa")).toEqual(
      `${defaultProps.name}_label`
    );
  });

  test("Renders helpMsg if provided", () => {
    const helpMsg = "This field is really hard to fill out, be careful.";
    const wrapper = mount(InputField, {
      props: {
        ...defaultProps,
        helpMsg,
      },
    });
    expect(wrapper.find(".help").html()).toContain(helpMsg);
  });

  test("Renders errorMsg if provided", () => {
    const errorMsg = "This field is WRONG";
    const wrapper = mount(InputField, {
      props: {
        ...defaultProps,
        errorMsg,
      },
    });
    expect(wrapper.find(".help.is-danger").html()).toContain(errorMsg);
  });

  test("Renders successMsg if provided", () => {
    const successMsg = "This field is GREAT.";
    const wrapper = mount(InputField, {
      props: {
        ...defaultProps,
        successMsg,
      },
    });
    expect(wrapper.find(".help.is-success").html()).toContain(successMsg);
  });
});
