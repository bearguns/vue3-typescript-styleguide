import { mount } from "@vue/test-utils";
import AppPagination from "./AppPagination";

describe("Unit|Common|AppPagination", () => {
  it("renders page numbers 1-10 on initial load", () => {
    const wrapper = mount(AppPagination, {
      props: {
        lastPage: 25,
        currentPage: 1,
      },
      global: {
        stubs: {
          AppIcon: true,
        },
      },
    });
    const links = wrapper.findAll(".pagination-link");
    // we add 2 to account for first/last page chevron buttons
    expect(links.length).toBe(12);
    expect(links[1].html()).toContain(1);
    expect(links[2].html()).toContain(2);
    expect(links[3].html()).toContain(3);
    expect(links[4].html()).toContain(4);
    expect(links[5].html()).toContain(5);
    expect(links[6].html()).toContain(6);
    expect(links[7].html()).toContain(7);
    expect(links[8].html()).toContain(8);
    expect(links[9].html()).toContain(9);
    expect(links[10].html()).toContain(10);
  });
  it("renders page numbers 1 - lastPage if lastPage < 10", () => {
    const wrapper = mount(AppPagination, {
      props: {
        lastPage: 4,
        currentPage: 1,
      },
      global: {
        stubs: {
          AppIcon: true,
        },
      },
    });
    const links = wrapper.findAll(".pagination-link");
    // we add 2 to account for first/last page chevron buttons
    expect(links.length).toBe(6);
    expect(links[1].html()).toContain(1);
    expect(links[2].html()).toContain(2);
    expect(links[3].html()).toContain(3);
    expect(links[4].html()).toContain(4);
  });
  it("applies is-current class to link if link number === currentPage", async () => {
    const wrapper = mount(AppPagination, {
      props: {
        lastPage: 10,
        currentPage: 1,
      },
      global: {
        stubs: {
          AppIcon: true,
        },
      },
    });
    const links = wrapper.findAll(".pagination-link");
    expect(links[1].element.classList).toContain("is-current");
    await wrapper.setProps({ currentPage: 4 });
    expect(links[4].element.classList).toContain("is-current");
    expect(links[1].element.classList).not.toContain("is-current");
  });
  it("reacts to change in currentPage and selects appropriate link", async () => {
    const wrapper = mount(AppPagination, {
      props: {
        lastPage: 10,
        currentPage: 8,
      },
      global: {
        stubs: {
          AppIcon: true,
        },
      },
    });
    await wrapper.setProps({ currentPage: 3 });
    expect(wrapper.findAll(".pagination-link")[3].element.classList).toContain(
      "is-current"
    );
  });
  it("emits gotoPage(1) when left chevron button clicked", () => {
    const wrapper = mount(AppPagination, {
      props: {
        lastPage: 200,
        currentPage: 75,
      },
      global: {
        stubs: {
          AppIcon: true,
        },
      },
    });
    const firstPageButton = wrapper.find(".pagination-link");
    firstPageButton.element.click();
    expect(wrapper.emitted().input[0]).toEqual([1]);
  });
  it("emits goToPage(lastPage) when right chevron button clicked", () => {
    const wrapper = mount(AppPagination, {
      props: {
        lastPage: 783,
        currentPage: 212,
      },
      global: {
        stubs: {
          AppIcon: true,
        },
      },
    });
    const lastPageButton = wrapper.findAll(".pagination-link")[11];
    lastPageButton.element.click();
    expect(wrapper.emitted().input[0]).toEqual([wrapper.props().lastPage]);
  });
  it("emits goToPage(currentPage + 1) on next button click", () => {
    const wrapper = mount(AppPagination, {
      props: {
        lastPage: 10,
        currentPage: 1,
      },
      global: {
        stubs: {
          AppIcon: true,
        },
      },
    });
    wrapper.find(".pagination-next").element.click();
    expect(wrapper.emitted().input[0]).toEqual([2]);
  });
  it("emits goToPage(currentPage - 1) on previous button click", () => {
    const wrapper = mount(AppPagination, {
      props: {
        lastPage: 10,
        currentPage: 4,
      },
      global: {
        stubs: {
          AppIcon: true,
        },
      },
    });
    wrapper.find(".pagination-previous").element.click();
    expect(wrapper.emitted().input[0]).toEqual([3]);
  });
  it("ignores previous button click if on first page", () => {
    const wrapper = mount(AppPagination, {
      props: {
        lastPage: 10,
        currentPage: 1,
      },
      global: {
        stubs: {
          AppIcon: true,
        },
      },
    });
    wrapper.find(".pagination-previous").element.click();
    expect(wrapper.emitted().input).toBeFalsy();
  });
  it("ignores next button click if on last page", () => {
    const wrapper = mount(AppPagination, {
      props: {
        lastPage: 10,
        currentPage: 10,
      },
      global: {
        stubs: {
          AppIcon: true,
        },
      },
    });
    wrapper.find(".pagination-next").element.click();
    expect(wrapper.emitted().input).toBeFalsy();
  });
  it("calculates a page range of 10 if lastPage > 10", () => {
    const wrapper = mount(AppPagination, {
      props: {
        lastPage: 69,
        currentPage: 47,
      },
      global: {
        stubs: {
          AppIcon: true,
        },
      },
    });
    expect(wrapper.vm.pageRange).toBe(10);
  });
  it("calculates a page range of 4 if lastPage === 4", () => {
    const wrapper = mount(AppPagination, {
      props: {
        lastPage: 4,
        currentPage: 1,
      },
      global: {
        stubs: {
          AppIcon: true,
        },
      },
    });
    expect(wrapper.vm.pageRange).toBe(4);
  });
  it("calculates a page range offset if user crosses midway point when going to next page", async () => {
    const wrapper = mount(AppPagination, {
      props: {
        lastPage: 25,
        currentPage: 1,
      },
      global: {
        stubs: {
          AppIcon: true,
        },
      },
    });
    expect(wrapper.vm.offset).toBe(0);
    await wrapper.setProps({ currentPage: 6 });
    expect(wrapper.vm.offset).toBe(0);
    await wrapper.setProps({ currentPage: 8 });
    expect(wrapper.vm.offset).toBe(2);
    await wrapper.setProps({ currentPage: 23 });
    expect(wrapper.vm.offset).toBe(15);
  });
});
