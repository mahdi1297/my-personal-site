const authForm = [
  {
    id: 1,
    size: 12,
    type: "email",
    name: "email",
    placeholder: "ایمیل ",
    label: "ایمیل",
    labelRequired: true,
    validation: {
      required: true,
      minLength: 5,
      maxLength: 250,
    },
  },
  {
    id: 2,
    size: 12,
    type: "password",
    name: "password",
    placeholder: "*********",
    label: "رمز عبور",
    labelRequired: true,
    validation: {
      required: true,
      minLength: 5,
      maxLength: 250,
    },
  },
];

export { authForm };
