import { mount } from "@vue/test-utils";
import AppSearch from "./AppSearch.vue";

describe("Unit | Components | Controls |AppSearch", () => {
  it("renders", () => {
    const wrapper = mount(AppSearch, {
      props: {
        name: "search-test",
      },
      global: {
        stubs: {
          SearchIcon: true,
        },
      },
    });
    expect(wrapper).toBeTruthy();
  });

  it("renders with no button if :hasButton=false", () => {
    const wrapper = mount(AppSearch, {
      props: {
        name: "my-search",
        hasButton: false,
      },
    });
    expect(wrapper.find("button").exists()).toBeFalsy();
  });

  it("emits current value on input", () => {
    const wrapper = mount(AppSearch, {
      props: {
        name: "app-search",
      },
      global: {
        stubs: {
          SearchIcon: true,
        },
      },
    });
    wrapper.find("input").setValue("foo");
    setTimeout(() => expect(wrapper.emitted("update:modelValue")[0]).toEqual(["foo"]), 1000);
  });

  it("emits submit event on button click", () => {
    const wrapper = mount(AppSearch, {
      props: {
        name: "app-search",
        hasButton: true,
      },
      global: {
        stubs: {
          SearchIcon: true,
        },
      },
    });
    wrapper.find("button").element.click();
    expect(wrapper.emitted("submit")[0]).toBeTruthy();
  });
});
