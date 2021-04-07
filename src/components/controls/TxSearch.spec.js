import { mount } from "@vue/test-utils";
import TxSearch from "./TxSearch.vue";

describe("TxSearch", () => {
  it("renders", () => {
    const wrapper = mount(TxSearch, {
      props: {
        name: "search-test",
      },
      global: {
        stubs: {
          TxIcon: true,
        },
      },
    });
    expect(wrapper).toBeTruthy();
  });
  it("emits current value on input", () => {
    const wrapper = mount(TxSearch, {
      props: {
        name: "app-search",
      },
      global: {
        stubs: {
          TxIcon: true,
        },
      },
    });
    wrapper.find("input").setValue("foo");
    expect(wrapper.emitted("input")[0]).toEqual(["foo"]);
  });
  it("emits submit event on button click", () => {
    const wrapper = mount(TxSearch, {
      propsData: {
        name: "app-search",
      },
      global: {
        stubs: {
          TxIcon: true,
        },
      },
    });
    wrapper.find("button").element.click();
    expect(wrapper.emitted("submit")[0]).toBeTruthy();
  });
});
