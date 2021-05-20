import { mount } from "@vue/test-utils";
import SearchSelect from "./SearchSelect.vue";

const defaultProps = {
  multiple: false,
  name: "search-select",
  label: "Search and select",
  items: [
    { label: "Item 1", value: 1 },
    { label: "Item 2", value: 2 },
  ],
  searchTerm: "",
};

describe("Unit | Components | SearchSelect", () => {
  // Input field tests
  it("renders input field", () => {
    const wrapper = mount(SearchSelect, {
      props: {
        ...defaultProps,
      },
      global: {
        stubs: {
          AppTag: true,
        },
      },
    });

    const input = wrapper.find("input");
    expect(input.element.name).toBe(defaultProps.name);
    expect(input.attributes("data-qa")).toBe(`${defaultProps.name}-input`);
  });

  it("displays current searchTerm value in input", async () => {
    const wrapper = mount(SearchSelect, {
      props: {
        ...defaultProps,
      },
      global: {
        stubs: {
          AppTag: true,
        },
      },
    });

    const input = wrapper.find("input");
    expect(input.element.value).toBe("");
    await wrapper.setProps({ searchTerm: "test" });
    // SearchSelect debounces user input by 700ms, so let's wait until it emits/receives new value
    setTimeout(() => expect(input.element.value).toBe("test"), 1000);
  });

  it("emits user input to parent", async () => {
    const wrapper = mount(SearchSelect, {
      props: {
        ...defaultProps,
      },
      global: {
        stubs: {
          AppTag: true,
        },
      },
    });

    const input = wrapper.find("input");
    await input.setValue("test");
    // SearchSelect debounces user input, so let's wait until it actually $emits
    setTimeout(() => {
      const emitted: any = wrapper.emitted("input");
      expect(emitted[0][0]).toBe("test");
    }, 1000);
  });

  it("renders list items for each provided item", async () => {
    const wrapper = mount(SearchSelect, {
      props: {
        ...defaultProps,
      },
      global: {
        stubs: {
          AppTag: true,
        },
      },
    });

    expect(wrapper.findAll("li").length).toEqual(defaultProps.items.length);
    await wrapper.setProps({
      items: [...defaultProps.items, { label: "Item 3", value: 3 }],
    });
    expect(wrapper.findAll("li").length).toEqual(defaultProps.items.length + 1);
  });

  it("displays list when input field focused", async () => {
    const wrapper = mount(SearchSelect, {
      props: {
        ...defaultProps,
      },
      global: {
        stubs: {
          AppTag: true,
        },
      },
    });

    // Display logic for items is gated with v-show,
    // so let's make sure it shows/hides when we expect
    expect(wrapper.vm.showItems).toBe(false);
    expect(wrapper.find(".search-select__items").isVisible()).toBe(false);
    await wrapper.find("input").trigger("focus");
    expect(wrapper.vm.showItems).toBe(true);
    expect(wrapper.find(".search-select__items").isVisible()).toBe(true);
  });

  it("hides list when user clicks outside", async () => {
    const wrapper = mount(SearchSelect, {
      props: {
        ...defaultProps,
      },
      global: {
        stubs: {
          AppTag: true,
        },
      },
    });

    // Display logic for items is gated with v-show,
    // so let's make sure it shows/hides when we expect
    // Additionally, we wait 1s before registering the "click outside" handler,
    // so we need to account for that in this test.
    expect(wrapper.vm.showItems).toBe(false);
    expect(wrapper.find(".search-select__items").isVisible()).toBe(false);
    await wrapper.find("input").trigger("focus");
    expect(wrapper.vm.showItems).toBe(true);
    expect(wrapper.find(".search-select__items").isVisible()).toBe(true);
    setTimeout(async () => {
      await wrapper.find("label").trigger("click");
      expect(wrapper.find(".search-select__items").isVisible()).toBe(false);
    }, 1500);
  });

  it("emits value of selected item on click", async () => {
    const wrapper = mount(SearchSelect, {
      props: {
        ...defaultProps,
      },
      global: {
        stubs: {
          AppTag: true,
        },
      },
    });

    await wrapper.find("input").trigger("focus");
    await wrapper.find("li").trigger("click");
    const emitted: any = wrapper.emitted("select");
    expect(emitted[0][0]).toEqual(defaultProps.items[0].value);
  });

  it("renders AppTag container if :multiple=true", () => {
    const wrapper = mount(SearchSelect, {
      props: {
        ...defaultProps,
        multiple: true,
      },
      global: {
        stubs: {
          AppTag: true,
        },
      },
    });
    expect(wrapper.find(".search-select__selected").isVisible()).toBe(true);
  });

  it("renders AppTag component for each item in :selected", () => {
    const wrapper = mount(SearchSelect, {
      props: {
        ...defaultProps,
        multiple: true,
        selected: [...defaultProps.items],
      },
      global: {
        stubs: {
          AppTag: true,
        },
      },
    });
    expect(wrapper.findAllComponents({ name: "AppTag" }).length).toEqual(defaultProps.items.length);
  });

  it("emits selected item value for removal when user clicks AppTag", async () => {
    const wrapper = mount(SearchSelect, {
      props: {
        ...defaultProps,
        multiple: true,
        selected: [...defaultProps.items],
      },
      global: {
        stubs: {
          AppTag: true,
        },
      },
    });

    await wrapper.findComponent({ name: "AppTag" }).trigger("click");
    const emitted: any = wrapper.emitted("remove");
    expect(emitted[0][0]).toEqual(defaultProps.items[0].value);
  });
});
