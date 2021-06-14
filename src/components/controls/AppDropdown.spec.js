import { mount } from "@vue/test-utils";
import AppDropdown from "./AppDropdown.vue";

describe("AppDropdown", () => {
  it("renders provided label in #label slot", () => {
    const wrapper = mount(AppDropdown, {
      slots: {
        label: "Dropdown",
      },
      global: {
        stubs: {
          ChevronIcon: true,
        },
      },
    });
    expect(wrapper.find(".button").html()).toContain("Dropdown");
  });

  it("sets active value on button click", async () => {
    const wrapper = mount(AppDropdown, {
      global: {
        stubs: {
          ChevronIcon: true,
        },
      },
    });
    expect(wrapper.vm.isActive).toBe(false);
    await wrapper.find(".button").element.click();
    expect(wrapper.vm.isActive).toBe(true);
    await wrapper.find(".button").element.click();
    expect(wrapper.vm.isActive).toBe(false);
  });

  it("registers event listener if persist prop is false", () => {
    window.addEventListener = jest.fn();
    const wrapper = mount(AppDropdown, {
      props: {
        persist: false,
      },
      global: {
        stubs: {
          ChevronIcon: true,
        },
      },
    });
    expect(window.addEventListener).toHaveBeenCalledTimes(1);
    window.addEventListener.mockClear();
  });

  it("does not register event listener on window if persist prop is true", () => {
    window.addEventListener = jest.fn();
    const wrapper = mount(AppDropdown, {
      global: {
        stubs: {
          ChevronIcon: true,
        },
      },
      props: {
        persist: true,
      },
    });
    expect(window.addEventListener).not.toHaveBeenCalled();
    window.addEventListener.mockClear();
  });

  it("removes event listener on unmount when persist prop is false", () => {
    window.removeEventListener = jest.fn();
    const wrapper = mount(AppDropdown, {
      global: {
        stubs: {
          ChevronIcon: true,
        },
      },
    });
    wrapper.unmount();
    expect(window.removeEventListener).toHaveBeenCalledTimes(1);
    window.removeEventListener.mockClear();
  });
});
