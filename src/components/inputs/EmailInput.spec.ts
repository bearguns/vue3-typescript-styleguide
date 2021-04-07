import { mount } from "@vue/test-utils";
import EmailInput from "./EmailInput.vue";
import { errors } from "../../composers/inputs";

const defaultProps = {
  name: "email",
  label: "My email",
  placeholder: "test.harness@teliax.com",
};

describe("Components | Inputs | EmailInput", () => {
  test("Renders input with email type", () => {
    const wrapper = mount(EmailInput, {
      props: {
        ...defaultProps,
      },
    });
    expect(wrapper.find("input").attributes("type")).toEqual("email");
  });

  test("Renders provided placeholder", () => {
    const wrapper = mount(EmailInput, {
      props: {
        ...defaultProps,
      },
    });
    expect(wrapper.find("input").attributes("placeholder")).toEqual(defaultProps.placeholder);
  });

  test("Renders default placeholder when no prop provided", () => {
    const wrapper = mount(EmailInput, {
      props: {
        ...defaultProps,
        placeholder: undefined,
      },
    });
    expect(wrapper.find("input").attributes("placeholder")).not.toBe(undefined);
  });

  test("Renders provided label", () => {
    const wrapper = mount(EmailInput, {
      props: {
        ...defaultProps,
      },
    });
    expect(wrapper.find("label").html()).toContain(defaultProps.label);
  });

  test("Renders provided name on input", () => {
    const wrapper = mount(EmailInput, {
      props: {
        ...defaultProps,
      },
    });
    expect(wrapper.find("input").attributes("name")).toBe(defaultProps.name);
    expect(wrapper.find("label").attributes("for")).toBe(defaultProps.name);
    expect(wrapper.find("input").attributes("data-qa")).toBe(`${defaultProps.name}_input`);
  });

  test("Renders helpMsg if provided", () => {
    const helpMsg = "Help message.";
    const wrapper = mount(EmailInput, {
      props: {
        ...defaultProps,
        helpMsg,
      },
    });
    expect(wrapper.find(".help").html()).toContain(helpMsg);
  });

  test("Renders errorMsg if provided", () => {
    const errorMsg = "Error message.";
    const wrapper = mount(EmailInput, {
      props: {
        ...defaultProps,
        errorMsg,
      },
    });
    expect(wrapper.find(".help.is-danger").html()).toContain(errorMsg);
  });

  test("Renders successMsg if provided", () => {
    const successMsg = "Success message.";
    const wrapper = mount(EmailInput, {
      props: {
        ...defaultProps,
        successMsg,
      },
    });
    expect(wrapper.find(".help.is-success").html()).toContain(successMsg);
  });

  test("Renders provided v-model as input value", async () => {
    const testValue = "test@test.teliax.com";
    const testValue2 = "test2@test.teliax.com";
    const Component = {
      components: { EmailInput },
      data() {
        return {
          ...defaultProps,
          value: testValue,
        };
      },
      template: '<EmailInput v-model="value" :name="name" :label="label" />',
    };
    const wrapper = mount(Component);
    expect(wrapper.find("input").element.value).toBe(testValue);
    await wrapper.setData({ value: testValue2 });
    expect(wrapper.find("input").element.value).toBe(testValue2);
  });

  test("Emits new value to parent on input", async () => {
    const testValue = "test@test.teliax.com";
    const wrapper = mount(EmailInput, {
      props: {
        ...defaultProps,
      },
    });
    const input = wrapper.find("input");
    await input.setValue(testValue);
    await input.trigger("input");
    const em: any[] = wrapper.emitted("update:modelValue");
    expect(em[0][0]).toBe(testValue);
  });

  test("Renders error if field required and blank", async () => {
    const wrapper = mount(EmailInput, {
      props: {
        ...defaultProps,
        required: true,
      },
    });
    await wrapper.find("input").trigger("blur");
    expect(wrapper.find(".help.is-danger").html()).toContain(errors.blank);
  });

  test("Renders error if email does not contain @ and . characters (basic email validation)", async () => {
    const wrapper = mount(EmailInput, {
      props: {
        ...defaultProps,
      },
    });
    await wrapper.find("input").setValue("foobar");
    await wrapper.find("input").trigger("blur");
    expect(wrapper.find(".help.is-danger").html()).toContain(errors.emailInvalid);
  });

  test("Renders error if email does not match email address format (adv. email validation)", async () => {
    const wrapper = mount(EmailInput, {
      props: {
        ...defaultProps,
      },
    });
    await wrapper.find("input").setValue("@foobar.");
    await wrapper.find("input").trigger("blur");
    expect(wrapper.find(".help.is-danger").html()).toContain(errors.emailInvalid);
  });

  test("Does not render error if email address is valid format", async () => {
    const wrapper = mount(EmailInput, {
      props: {
        ...defaultProps,
      },
    });
    await wrapper.find("input").setValue("test.email@teliax.com");
    await wrapper.find("input").trigger("blur");
    expect(wrapper.find(".help.is-danger").html()).not.toContain(errors.emailInvalid);
  });
});
