import { mount } from "@vue/test-utils";
import MultilineText from "./MultilineText.vue";

const defaultProps = {
  name: "message",
  label: "Message",
  columns: 40,
  rows: 20,
};

describe("Components | Inputs | MultilineText", () => {
  test("Renders textarea element", () => {
    const wrapper = mount(MultilineText, {
      props: {
        ...defaultProps,
      },
    });
    expect(wrapper.find("textarea")).toBeTruthy();
  });

  test("Renders textarea with provided number of rows", async () => {
    const rows = 35;
    const wrapper = mount(MultilineText, {
      props: {
        ...defaultProps,
        rows,
      },
    });
    expect(wrapper.find("textarea").attributes("rows")).toBe(rows.toString());
    await wrapper.setProps({ rows: 38 });
    expect(wrapper.find("textarea").attributes("rows")).toBe("38");
  });

  test("Renders textarea with provided number of columns", async () => {
    const columns = 12;
    const wrapper = mount(MultilineText, {
      props: {
        ...defaultProps,
        columns,
      },
    });
    expect(wrapper.find("textarea").attributes("cols")).toBe(columns.toString());
    await wrapper.setProps({ columns: 18 });
    expect(wrapper.find("textarea").attributes("cols")).toBe("18");
  });

  test("Renders provided model value in input", () => {
    const msg = "Hello\n this is a big message yeah?\n";
    const Component = {
      components: { MultilineText },
      data() {
        return {
          ...defaultProps,
          msg,
        };
      },
      template: `<MultilineText :name="name" :label="label" v-model="msg" />`,
    };
    const wrapper = mount(Component);
    expect(wrapper.find("textarea").element.value).toBe(msg);
  });

  test("Reacts to change in provided model value", async () => {
    const msg = "Hello\n this is a big message yeah?\n";
    const secondMsg = "Hello, this is second message.";
    const Component = {
      components: { MultilineText },
      data() {
        return {
          ...defaultProps,
          msg,
        };
      },
      template: `<MultilineText :name="name" :label="label" v-model="msg" />`,
    };
    const wrapper = mount(Component);
    expect(wrapper.find("textarea").element.value).toBe(msg);
    await wrapper.setData({ msg: secondMsg });
    expect(wrapper.find("textarea").element.value).toBe(secondMsg);
  });

  test("Emits user input to parent component", async () => {
    const msg = "Hello there!";
    const wrapper = mount(MultilineText, {
      props: {
        ...defaultProps,
      },
    });
    expect(wrapper.find("textarea").element.value).toBe("");
    await wrapper.find("textarea").setValue(msg);
    wrapper.find("textarea").trigger("input");
    const ev: any[] = wrapper.emitted("update:modelValue");
    expect(ev[0][0]).toBe(msg);
  });

  test("Emits blur event to parent when input loses focus", async () => {
    const wrapper = mount(MultilineText, {
      props: {
        ...defaultProps,
      },
    });
    await wrapper.find("textarea").trigger("blur");
    const ev: any[] = wrapper.emitted("blur");
    expect(ev[0]).toBeTruthy();
  });
});
