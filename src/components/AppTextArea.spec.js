import { mount } from "@vue/test-utils";
import AppTextArea from "./AppTextArea.vue";

describe("AppTextArea", () => {
  it("renders provided label and name attributes", () => {
    const wrapper = mount(AppTextArea, {
      props: {
        label: "My text",
        name: "text-area",
        value: "",
      },
    });
    expect(wrapper.find("label").html()).toContain("My text");
    expect(wrapper.find("textarea").element.name).toBe("text-area");
  });
  it("renders help text if provided by parent", async () => {
    const wrapper = mount(AppTextArea, {
      props: {
        label: "text",
        name: "text",
        value: "",
      },
    });
    expect(wrapper.find(".app-text-area__help").exists()).toBe(false);
    await wrapper.setProps({ helpText: "foo" });
    expect(wrapper.find(".app-text-area__help").exists()).toBe(true);
    expect(wrapper.find(".app-text-area__help").html()).toContain("foo");
  });
  it("renders error text if provided by parent", async () => {
    const wrapper = mount(AppTextArea, {
      props: {
        label: "text",
        name: "text",
        value: "",
      },
    });
    expect(wrapper.find(".app-text-area__error").exists()).toBe(false);
    await wrapper.setProps({ error: "foo" });
    expect(wrapper.find(".app-text-area__error").exists()).toBe(true);
    expect(wrapper.find(".app-text-area__error").html()).toContain("foo");
  });
  it("renders as disabled if disabled prop is true", () => {
    const wrapper = mount(AppTextArea, {
      props: {
        label: "text",
        name: "text",
        disabled: true,
        value: "",
      },
    });
    expect(wrapper.find("textarea").element.disabled).toBe(true);
  });
  it("reacts to change in parent value and renders new value", async () => {
    const wrapper = mount(AppTextArea, {
      props: {
        label: "text",
        name: "text",
        value: "foo",
      },
    });
    expect(wrapper.find("textarea").element.value).toBe("foo");
    await wrapper.setProps({ value: "bar" });
    expect(wrapper.find("textarea").element.value).toBe("bar");
  });
  it("emits new value to parent on input", async () => {
    const wrapper = mount(AppTextArea, {
      props: {
        label: "text",
        name: "text",
        value: "",
      },
    });
    await wrapper.find("textarea").setValue("my new value");
    await wrapper.find("textarea").trigger("input");
    expect(wrapper.emitted().input[0][0]).toBe("my new value");
  });
});
