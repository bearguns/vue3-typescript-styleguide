import { mount } from "@vue/test-utils";
import AppDropdown from "./AppDropdown.vue";

describe("AppDropdown", () => {
  it("renders button element with provided label prop", () => {
    const wrapper = mount(AppDropdown, {
      props: {
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
  it("registers event listener if persistent prop is false", () => {
    window.addEventListener = jest.fn();
    const wrapper = mount(AppDropdown, {
      global: {
        stubs: {
          ChevronIcon: true,
        },
      },
    });
    expect(window.addEventListener).toHaveBeenCalledWith("click", wrapper.vm.closeDropdown);
    window.addEventListener.mockClear();
  });
  it("does not register event listener on window if persistent prop is true", () => {
    window.addEventListener = jest.fn();
    const wrapper = mount(AppDropdown, {
      global: {
        stubs: {
          ChevronIcon: true,
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
          ChevronIcon: true,
        },
      },
    });
    await wrapper.unmount();
    expect(window.removeEventListener).toHaveBeenCalledWith("click", wrapper.vm.closeDropdown);
    window.removeEventListener.mockClear();
  });
});
