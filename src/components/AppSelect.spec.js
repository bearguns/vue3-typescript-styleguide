import { mount } from "@vue/test-utils";
import AppSelect from "./AppSelect";

const defaultProps = {
  name: "app-select",
  options: [
    { label: "option 1", value: 1 },
    { label: "option 2", value: 2 },
    { label: "option 3", value: 3 },
  ],
  label: "Select",
};

describe("Unit|Common|AppSelect", () => {
  it("renders select element with provided options", () => {
    const wrapper = mount(AppSelect, {
      props: {
        ...defaultProps,
      },
    });
    expect(wrapper.findAll("option").length).toBe(
      defaultProps.options.length + 1
    );
  });
  it("renders provided label", () => {
    const wrapper = mount(AppSelect, {
      props: {
        ...defaultProps,
      },
    });
    expect(wrapper.find("label").html()).toContain(defaultProps.label);
  });
  it("renders provided name", () => {
    const wrapper = mount(AppSelect, {
      props: {
        ...defaultProps,
      },
    });
    expect(wrapper.find("select").element.name).toEqual(defaultProps.name);
  });
  it("selects blank option if no value provided", () => {
    const wrapper = mount(AppSelect, {
      props: {
        ...defaultProps,
      },
    });
    expect(wrapper.find("option").element.selected).toBe(true);
  });
  it("selects appropriate option if value provided", () => {
    const wrapper = mount(AppSelect, {
      props: {
        ...defaultProps,
        value: defaultProps.options[0].value,
      },
    });
    const selectedOpt = wrapper.find("option:checked");
    expect(selectedOpt.element.value).toBe(
      defaultProps.options[0].value.toString()
    );
  });
  it("emits selected value on change", async () => {
    const wrapper = mount(AppSelect, {
      props: {
        ...defaultProps,
      },
    });
    const select = wrapper.find("select");
    const option = select.findAll("option")[1];
    await option.setSelected();
    expect(select.element.value).toBe(defaultProps.options[0].value.toString());
    expect(wrapper.emitted()).toHaveProperty("change");
    expect(wrapper.emitted().change[0]).toEqual([
      defaultProps.options[0].value.toString(),
    ]);
  });
  it("reacts to change in provided value", async () => {
    const wrapper = mount(AppSelect, {
      props: {
        ...defaultProps,
      },
    });
    expect(wrapper.find("select").element.value).toBe("");
    expect(wrapper.find("option:checked").html()).toContain("--");
    await wrapper.setProps({ value: defaultProps.options[1].value });
    expect(wrapper.find("select").element.value).toBe(
      defaultProps.options[1].value.toString()
    );
    expect(wrapper.find("option:checked").html()).toContain(
      defaultProps.options[1].label
    );
  });
  it("renders provided help text", () => {
    const helpText = "*This field is required";
    const wrapper = mount(AppSelect, {
      props: {
        ...defaultProps,
        helpText,
      },
    });
    expect(wrapper.find(".app-select__help").html()).toContain(helpText);
  });
  it("render provided error text", () => {
    const errorText = "*This field is required";
    const wrapper = mount(AppSelect, {
      props: {
        ...defaultProps,
        error: errorText,
      },
    });
    expect(wrapper.find(".app-select__error").html()).toContain(errorText);
  });
  it("renders disabled select element if disabled prop true", () => {
    const wrapper = mount(AppSelect, {
      props: {
        ...defaultProps,
        disabled: true,
      },
    });
    expect(wrapper.find("select").element.disabled).toEqual(true);
  });
});
