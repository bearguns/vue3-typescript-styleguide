import { mount } from "@vue/test-utils";
import AppDropdown from "./AppDropdown.vue";

describe("AppDropdown", () => {
  it("renders button element with slotted label content", () => {
    const wrapper = mount(AppDropdown, {
      slots: {
        label: "Dropdown",
      },
      global: {
        stubs: {
          AppIcon: true,
        },
      },
    });
    expect(wrapper.find(".button").html()).toContain("Dropdown");
  });
  it("returns correct icon class when dropdown active status changes", async () => {
    const wrapper = mount(AppDropdown, {
      global: {
        stubs: {
          AppIcon: true,
        },
      },
    });
    expect(wrapper.vm.icon).toBe("chevron-down");
    await wrapper.setData({ isActive: true });
    expect(wrapper.vm.icon).toBe("chevron-up");
  });
  it("sets active value on button click", async () => {
    const wrapper = mount(AppDropdown, {
      global: {
        stubs: {
          AppIcon: true,
        },
      },
    });
    expect(wrapper.vm.isActive).toBe(false);
    await wrapper.find(".button").element.click();
    expect(wrapper.vm.isActive).toBe(true);
    await wrapper.find(".button").element.click();
    expect(wrapper.vm.isActive).toBe(false);
  });
  it("closes menu when close method called", async () => {
    const wrapper = mount(AppDropdown, {
      global: {
        stubs: {
          AppIcon: true,
        },
      },
      data() {
        return {
          isActive: true,
        };
      },
    });
    expect(wrapper.find(".dropdown").classes()).toContain("is-active");
    await wrapper.vm.closeDropdown();
    // Forcibly re-render the component HTML so that CSS class changes are properly detected.
    await wrapper.vm.$forceUpdate();
    expect(wrapper.find(".dropdown").classes()).not.toContain("is-active");
  });
  it("registers event listener if persistent prop is false", () => {
    window.addEventListener = jest.fn();
    const wrapper = mount(AppDropdown, {
      global: {
        stubs: {
          AppIcon: true,
        },
      },
    });
    expect(window.addEventListener).toHaveBeenCalledWith(
      "click",
      wrapper.vm.closeDropdown
    );
    window.addEventListener.mockClear();
  });
  it("does not register event listener on window if persistent prop is true", () => {
    window.addEventListener = jest.fn();
    const wrapper = mount(AppDropdown, {
      global: {
        stubs: {
          AppIcon: true,
        },
      },
      props: {
        persistent: true,
      },
    });
    expect(window.addEventListener).not.toHaveBeenCalled();
    window.addEventListener.mockClear();
  });
  it("removes event listener on unmount when persistent prop is false", async () => {
    window.removeEventListener = jest.fn();
    const wrapper = mount(AppDropdown, {
      global: {
        stubs: {
          AppIcon: true,
        },
      },
    });
    await wrapper.unmount();
    expect(window.removeEventListener).toHaveBeenCalledWith(
      "click",
      wrapper.vm.closeDropdown
    );
    window.removeEventListener.mockClear();
  });
});
