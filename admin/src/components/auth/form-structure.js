/* eslint-disable eqeqeq */

const numOne = Math.floor(Math.random() * 10);
const numTwo = Math.floor(Math.random() * 10);

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
    type: "text",
    name: "username",
    placeholder: "نام کاربری ",
    label: "نام کاربری",
    labelRequired: true,
    validation: {
      required: true,
      minLength: 5,
      maxLength: 250,
    },
  },
  {
    id: 3,
    size: 12,
    type: "password",
    name: "password",
    placeholder: "*********",
    label: "رمز عبور",
    labelRequired: true,
    validation: {
      required: {
        value: true,
      },
      minLength: 5,
      maxLength: 250,
    },
  },
  {
    id: 4,
    size: 12,
    type: "text",
    name: "captcha",
    placeholder: "",
    label: ` جمع ${numTwo} و ${numOne} را به عدد وارد کنید`,
    labelRequired: true,
    validation: {
      required: true,
      validate: (value) => value == numOne + numTwo,
    },
  },
];

export { authForm };
