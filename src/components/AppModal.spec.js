import { mount } from "@vue/test-utils";
import AppModal from "./AppModal.vue";

describe("AppModal", () => {
  it("renders as hidden if active prop is false", () => {
    const wrapper = mount(AppModal, {
      props: {
        active: false,
      },
    });
    expect(wrapper.find(".modal").classes()).not.toContain("is-active");
  });
  it("renders as shown is active prop is true", () => {
    const wrapper = mount(AppModal, {
      props: {
        active: true,
      },
    });
    expect(wrapper.find(".modal").classes()).toContain("is-active");
  });
  it("renders as shown when provided active prop changes from false to true", async () => {
    const wrapper = mount(AppModal, {
      props: {
        active: false,
      },
    });
    expect(wrapper.find(".modal").classes()).not.toContain("is-active");
    await wrapper.setProps({ active: true });
    expect(wrapper.find(".modal").classes()).toContain("is-active");
  });
  it("renders as hidden when provided active prop changes from true to false", async () => {
    const wrapper = mount(AppModal, {
      props: {
        active: true,
      },
    });
    expect(wrapper.find(".modal").classes()).toContain("is-active");
    await wrapper.setProps({ active: false });
    expect(wrapper.find(".modal").classes()).not.toContain("is-active");
  });
  it("emits click event to parent when backdrop clicked", async () => {
    const wrapper = mount(AppModal, {
      props: {
        active: true,
      },
    });
    await wrapper.find(".modal-background").element.click();
    expect(wrapper.emitted().click[0]).toBeTruthy();
  });
  it("emits click event to parent when close button clicked", async () => {
    const wrapper = mount(AppModal, {
      props: {
        active: true,
      },
    });
    await wrapper.find(".modal-close").element.click();
    expect(wrapper.emitted().click[0]).toBeTruthy();
  });
});
