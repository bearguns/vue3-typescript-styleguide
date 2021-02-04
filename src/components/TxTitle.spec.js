import { mount } from "@vue/test-utils";
import TxTitle from "./TxTitle";

describe("Unit|Common|TxTitle", () => {
  it("renders appropriate h1 element", () => {
    const wrapper = mount(TxTitle, {
      propsData: {
        size: 1,
      },
    });
    expect(wrapper.element.tagName).toEqual("H1");
    expect(wrapper.element.classList).toContain("is-size-1");
  });
  it("renders appropriate h2 element", () => {
    const wrapper = mount(TxTitle, {
      propsData: {
        size: 2,
      },
    });
    expect(wrapper.element.tagName).toEqual("H2");
    expect(wrapper.element.classList).toContain("is-size-2");
  });
  it("renders appropriate h3 element", () => {
    const wrapper = mount(TxTitle, {
      propsData: {
        size: 3,
      },
    });
    expect(wrapper.element.tagName).toEqual("H3");
    expect(wrapper.element.classList).toContain("is-size-3");
  });
  it("renders appropriate h4 element", () => {
    const wrapper = mount(TxTitle, {
      propsData: {
        size: 4,
      },
    });
    expect(wrapper.element.tagName).toEqual("H4");
    expect(wrapper.element.classList).toContain("is-size-4");
  });
  it("renders appropriate h5 element", () => {
    const wrapper = mount(TxTitle, {
      propsData: {
        size: 5,
      },
    });
    expect(wrapper.element.tagName).toEqual("H5");
    expect(wrapper.element.classList).toContain("is-size-5");
  });
  it("renders appropriate h6 element", () => {
    const wrapper = mount(TxTitle, {
      propsData: {
        size: 6,
      },
    });
    expect(wrapper.element.tagName).toEqual("H6");
    expect(wrapper.element.classList).toContain("is-size-6");
  });
  it("renders with appropriate status modifier --primary", () => {
    const wrapper = mount(TxTitle, {
      propsData: {
        status: "primary",
      },
    });
    expect(wrapper.element.classList).toContain("has-text-primary");
  });
  it("renders with appropriate status modifier --info", () => {
    const wrapper = mount(TxTitle, {
      propsData: {
        status: "info",
      },
    });
    expect(wrapper.element.classList).toContain("has-text-info");
  });
  it("renders with appropriate status modifier --success", () => {
    const wrapper = mount(TxTitle, {
      propsData: {
        status: "success",
      },
    });
    expect(wrapper.element.classList).toContain("has-text-success");
  });
  it("renders with appropriate status modifier --danger", () => {
    const wrapper = mount(TxTitle, {
      propsData: {
        status: "danger",
      },
    });
    expect(wrapper.element.classList).toContain("has-text-danger");
  });
  it("renders provided content in slot", () => {
    const slotText = "Hello, world!";
    const wrapper = mount(TxTitle, {
      slots: {
        default: slotText,
      },
    });
    expect(wrapper.html()).toContain(slotText);
  });
});
