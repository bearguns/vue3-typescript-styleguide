import { mount } from "@vue/test-utils";
import AppIcon from "./AppIcon.vue";

describe("AppIcon", () => {
  // For future tests, append new icon names and component names here
  const iconsUnderTest = [
    { icon: "check-square", name: "CheckSquareIcon" },
    { icon: "map", name: "MapIcon" },
    { icon: "map-pin", name: "MapPinIcon" },
    { icon: "globe", name: "GlobeIcon" },
    { icon: "loader", name: "LoaderIcon" },
    { icon: "phone", name: "PhoneIcon" },
    { icon: "message", name: "MessageSquareIcon" },
    { icon: "hash", name: "HashIcon" },
    { icon: "trash", name: "Trash2Icon" },
    { icon: "upload", name: "UploadIcon" },
    { icon: "chevron-down", name: "ChevronDownIcon" },
    { icon: "chevron-up", name: "ChevronUpIcon" },
    { icon: "chevrons-left", name: "ChevronsLeftIcon" },
    { icon: "chevrons-right", name: "ChevronsRightIcon" },
    { icon: "search", name: "SearchIcon" },
    { icon: "arrow-down", name: "ArrowDownIcon" },
    { icon: "arrow-up", name: "ArrowUpIcon" },
    { icon: "download", name: "DownloadIcon" },
    { icon: "plus", name: "PlusSquareIcon" },
    { icon: "login", name: "LogInIcon" },
    { icon: "dollar", name: "DollarSignIcon" },
    { icon: "close", name: "XIcon" },
    { icon: "power", name: "PowerIcon" },
    { icon: "edit", name: "EditIcon" },
  ];
  let wrapper;

  // For future tests, be sure to update the stubs here for simplicity and performance
  beforeEach(() => {
    wrapper = mount(AppIcon, {
      global: {
        stubs: {
          CheckSquareIcon: true,
          MapIcon: true,
          MapPinIcon: true,
          GlobeIcon: true,
          LoaderIcon: true,
          PhoneIcon: true,
          MessageSquareIcon: true,
          HashIcon: true,
          Trash2Icon: true,
          UploadIcon: true,
          ChevronDownIcon: true,
          ChevronUpIcon: true,
          ChevronsLeftIcon: true,
          ChevronsRightIcon: true,
          SearchIcon: true,
          ArrowDownIcon: true,
          ArrowUpIcon: true,
          DownloadIcon: true,
          PlusSquareIcon: true,
          LogInIcon: true,
          DollarSignIcon: true,
          XIcon: true,
          PowerIcon: true,
          EditIcon: true,
        },
      },
      props: {
        icon: "check-square",
      },
    });
  });

  afterEach(() => wrapper.unmount());

  // easier to loop over the icons we use and test them via iteration
  iconsUnderTest.forEach(async (i) => {
    it(`renders appropriate icon ${i.name} for provided prop ${i.icon}`, async () => {
      await wrapper.setProps({ icon: i.icon });
      return expect(wrapper.findComponent({ name: i.name }).exists()).toBe(
        true
      );
    });
  });
});
