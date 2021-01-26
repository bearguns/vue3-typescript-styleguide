import { mount } from "@vue/test-utils";
import AppSearch from "./AppSearch.vue";

describe("AppSearch", () => {
  it("renders", () => {
    const wrapper = mount(AppSearch, {
      props: {
        name: "search-test",
      },
    });
    expect(wrapper).toBeTruthy();
  });
  it("emits current value on input", () => {
    const wrapper = mount(AppSearch, {
      props: {
        name: "app-search",
      },
    });
    wrapper.find("input").setValue("foo");
    expect(wrapper.emitted("input")[0]).toEqual(["foo"]);
  });
  it("emits submit event on button click", () => {
    const wrapper = mount(AppSearch, {
      propsData: {
        name: "app-search",
      },
    });
    wrapper.find("button").element.click();
    expect(wrapper.emitted("submit")[0]).toBeTruthy();
  });
});
