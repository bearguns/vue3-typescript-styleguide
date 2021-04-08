import { mount } from "@vue/test-utils";
import AppTable from "./AppTable.vue";

describe("Components | Presenters | AppTable", () => {
  const basicColumns = ["Name", "Date", "ID"];
  const sortColumns = [
    { label: "Name", value: "name" },
    { label: "Date", value: "timestamp" },
    { label: "ID", value: "id" },
  ];
  test("Renders th with provided columns as strings", () => {
    const wrapper = mount(AppTable, {
      props: {
        columns: basicColumns,
      },
    });
    const headers = wrapper.findAll("th");
    expect(headers[0].html()).toContain(basicColumns[0]);
    expect(headers[1].html()).toContain(basicColumns[1]);
    expect(headers[2].html()).toContain(basicColumns[2]);
  });

  test("Renders th with provided columns as objects", () => {
    const wrapper = mount(AppTable, {
      props: {
        columns: sortColumns,
      },
    });
    const headers = wrapper.findAll("th");
    expect(headers[0].html()).toContain(sortColumns[0].label);
    expect(headers[1].html()).toContain(sortColumns[1].label);
    expect(headers[2].html()).toContain(sortColumns[2].label);
  });

  test("Emits selected sort column on click", () => {
    const wrapper = mount(AppTable, {
      props: {
        columns: sortColumns,
      },
    });
    wrapper.find("th").element.click();
    const em: any[] = wrapper.emitted("sort");
    expect(em[0][0]).toBe(sortColumns[0].value);
  });
});
