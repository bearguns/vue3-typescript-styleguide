export const errors = {
  blank: "This field cannot be blank.",
  emailInvalid: "Email address is not valid.",
  numeric: "Field must only contain numbers.",
  alpha: "Field must only contain letters.",
  exclude(exclude: string[]): string {
    return `This field cannot contain these characters: ${exclude.join(",")}`;
  },
  includeStrict(include: string[]) {
    return `This field must include these character(s): ${include.join(",")}`;
  },
  include(include: string[]) {
    return `This field must include at least one of these characters: ${include.join(",")}`;
  },
  long(max: number): string {
    return `Must be ${max} or fewer characters.`;
  },
  short(min: number): string {
    return `Must be at least ${min} characters.`;
  },
};

export type Allow = "alpha" | "numeric" | "alphanumeric";

export type InputValue = string | number;

export interface Include {
  chars: string[];
  strict?: boolean;
}

export function validateEmailAddress(emailAddress: string): boolean {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailAddress);
}

export const validateRequired = (value: InputValue): boolean => !!value;

export const validateIncluded = (value: InputValue, include: Include): boolean => {
  const chars: string[] = value.toString().split("");
  if (include.strict) {
    return include.chars.every((char: string) => chars.includes(char));
  }
  return include.chars.some((char: string) => chars.includes(char));
};

export const validateExcluded = (value: InputValue, exclude: string[]): boolean => {
  return exclude.every((char: string) => value.toString().split("").includes(char) === false);
};
