import { mount } from "@vue/test-utils";
import TxFile from "./TxFile.vue";

describe("TxFile", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(TxFile, {
      global: {
        stubs: {
          TxIcon: true,
        },
      },
      props: {
        name: "file-input",
      },
    });
  });

  afterEach(() => wrapper.unmount());

  it("renders input element", () => {
    expect(wrapper.find("input").element.name).toBe("file-input");
  });

  it("displays selected file name after user selects file", async () => {
    expect(wrapper.find(".file-name").exists()).toBe(false);
    await wrapper.setData({
      file: {
        name: "my-file",
      },
    });
    expect(wrapper.find(".file-name").isVisible()).toBe(true);
    expect(wrapper.find(".file-name").html()).toContain("my-file");
  });

  it("emits selected file to parent when user selects file", async () => {
    wrapper.vm.emitFile = jest.fn();
    await wrapper.find("input").trigger("change");
    expect(wrapper.vm.emitFile).toHaveBeenCalled();
    wrapper.vm.emitFile.mockClear();
  });

  it("sets local file and emits value equal to user input", async () => {
    const mockEvent = {
      target: {
        files: [
          {
            name: "my-file",
          },
        ],
      },
    };
    await wrapper.vm.emitFile(mockEvent);
    expect(wrapper.vm.file.name).toBe("my-file");
    expect(wrapper.emitted().input[0][0].name).toBe("my-file");
  });

  it("triggers input event when clicking container element", async () => {
    wrapper.vm.$refs.input.click = jest.fn();
    await wrapper.find(".file").element.click();
    expect(wrapper.vm.$refs.input.click).toHaveBeenCalled();
    wrapper.vm.$refs.input.click.mockClear();
  });
});
