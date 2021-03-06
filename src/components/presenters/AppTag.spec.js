import { mount } from "@vue/test-utils";
import AppTag from "./AppTag.vue";

describe("AppTag", () => {
  const statusesUnderTest = ["primary", "success", "info", "danger", "warning"];

  // DRY
  statusesUnderTest.forEach(status => {
    it(`renders appropriate ${status} color`, () => {
      const wrapper = mount(AppTag, {
        props: {
          status,
        },
      });
      expect(wrapper.vm.statusClass).toBe(`is-${status}`);
      expect(wrapper.find(".tag").classes()).toContain(`is-${status}`);
    });
  });

  it("renders slotted content in default slot", () => {
    const wrapper = mount(AppTag, {
      slots: {
        default: "tag me",
      },
    });
    expect(wrapper.find(".tag").html()).toContain("tag me");
  });

  it("renders delete button if removeable property is true", () => {
    const wrapper = mount(AppTag, {
      props: {
        removeable: true,
      },
    });
    expect(wrapper.find(".delete").exists()).toBe(true);
  });

  it("emits click to parent if removeable and user clicks delete button", async () => {
    const wrapper = mount(AppTag, {
      props: {
        removeable: true,
      },
    });
    await wrapper.find(".delete").element.click();
    expect(wrapper.emitted().click[0]).toBeTruthy();
  });
});
