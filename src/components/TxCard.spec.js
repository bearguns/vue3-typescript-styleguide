import { mount } from "@vue/test-utils";
import TxCard from "./TxCard.vue";

describe("TxCard", () => {
  it("renders card with no header bar", () => {
    const wrapper = mount(TxCard);
    expect(wrapper.find(".app-card__header").exists()).toBe(false);
  });
  it("renders card with appropriate status bar", async () => {
    const wrapper = mount(TxCard, {
      props: {
        status: "primary",
      },
    });
    expect(wrapper.find(".app-card__header").element.classList).toContain(
      "has-background-primary"
    );
    await wrapper.setProps({ status: "danger" });
    expect(wrapper.find(".app-card__header").element.classList).toContain(
      "has-background-danger"
    );
    await wrapper.setProps({ status: "info" });
    expect(wrapper.find(".app-card__header").element.classList).toContain(
      "has-background-info"
    );
    await wrapper.setProps({ status: "success" });
    expect(wrapper.find(".app-card__header").element.classList).toContain(
      "has-background-success"
    );
    await wrapper.setProps({ status: "warning" });
    expect(wrapper.find(".app-card__header").element.classList).toContain(
      "has-background-warning"
    );
  });
  it("renders slotted title text", () => {
    const slotText = "Slot Text";
    const wrapper = mount(TxCard, {
      props: {
        status: "primary",
      },
      slots: {
        title: slotText,
      },
    });
    expect(wrapper.find(".app-card__title").html()).toContain(slotText);
  });
  it("renders slotted content in default slot", () => {
    const slotContent = "<h1>I'm the content!</h1>";
    const wrapper = mount(TxCard, {
      slots: {
        default: slotContent,
      },
    });
    expect(wrapper.find(".content").html()).toContain(slotContent);
  });
  it("renders slotted content in footer slot", () => {
    const slotContent = "<button>Submit</button>";
    const wrapper = mount(TxCard, {
      slots: {
        footer: slotContent,
      },
    });
    expect(wrapper.find(".app-card__footer").html()).toContain(slotContent);
  });
});
