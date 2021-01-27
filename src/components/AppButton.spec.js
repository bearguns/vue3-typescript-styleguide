import { mount } from "@vue/test-utils";
import AppButton from "./AppButton";

describe("Unit|Common|AppButton", () => {
  it("renders slotted text 'Submit'", () => {
    const slotText = "Submit";
    const wrapper = mount(AppButton, {
      slots: {
        default: slotText,
      },
    });
    expect(wrapper.html()).toContain(slotText);
  });
  it("renders slotted text 'Confirm'", () => {
    const slotText = "Confirm";
    const wrapper = mount(AppButton, {
      slots: {
        default: slotText,
      },
    });
    expect(wrapper.html()).toContain(slotText);
  });
  it("renders button with default size", () => {
    const wrapper = mount(AppButton);
    expect(wrapper.element.classList).toContain("is-normal");
  });
  it("renders button with large size", () => {
    const wrapper = mount(AppButton, {
      propsData: {
        size: "large",
      },
    });
    expect(wrapper.element.classList).toContain("button");
    expect(wrapper.element.classList).toContain("is-large");
  });
  it("renders button with small size", () => {
    const wrapper = mount(AppButton, {
      propsData: {
        size: "small",
      },
    });
    expect(wrapper.element.classList).toContain("button");
    expect(wrapper.element.classList).toContain("is-small");
  });
  it("renders button with default background", () => {
    const wrapper = mount(AppButton);
    expect(wrapper.element.classList).toContain("button");
  });
  it("renders button with primary background", () => {
    const wrapper = mount(AppButton, {
      propsData: {
        status: "primary",
      },
    });
    expect(wrapper.element.classList).toContain("button");
    expect(wrapper.element.classList).toContain("is-primary");
  });
  it("renders button with info background", () => {
    const wrapper = mount(AppButton, {
      propsData: {
        status: "info",
      },
    });
    expect(wrapper.element.classList).toContain("button");
    expect(wrapper.element.classList).toContain("is-info");
  });
  it("renders button with success background", () => {
    const wrapper = mount(AppButton, {
      propsData: {
        status: "success",
      },
    });
    expect(wrapper.element.classList).toContain("button");
    expect(wrapper.element.classList).toContain("is-success");
  });
  it("renders button with danger background", () => {
    const wrapper = mount(AppButton, {
      propsData: {
        status: "danger",
      },
    });
    expect(wrapper.element.classList).toContain("button");
    expect(wrapper.element.classList).toContain("is-danger");
  });
});
