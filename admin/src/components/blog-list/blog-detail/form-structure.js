const formStructure = [
  {
    id: 1,
    size: 12,
    type: "text",
    name: "title",
    placeholder: "عنوان ",
    label: "عنوان بلاگ",
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
    name: "slug",
    placeholder: "how-to-learn-programming",
    label: "slug",
    labelRequired: true,
    validation: {
      required: true,
      minLength: 5,
      maxLength: 250,
    },
  },
  // {
  //   id: 3,
  //   size: 12,
  //   type: "text",
  //   name: "keyword",
  //   placeholder: "برنامه نویسی, جاوااسکریپت...",
  //   label: "keyword",
  //   labelRequired: true,
  //   validation: {
  //     required: true,
  //     minLength: 5,
  //     maxLength: 250,
  //   },
  // },
  {
    id: 5,
    size: 12,
    type: "textarea",
    name: "description",
    placeholder: "توضیح کوتاه وبلاگ",
    label: "توضیح کوتاه وبلاگ",
    labelRequired: true,
    rows: 4,
    validation: {
      required: true,
      minLength: 5,
      maxLength: 250,
    },
  },
];

const imageUploadStructure = {
  size: 12,
  type: "file",
  name: "image",
  placeholder: "تصویر اصلی و بند انگشتی",
  label: "تصویر اصلی و بند انگشتی",
  labelRequired: true,
  validation: {
    required: true,
    minLength: 5,
    maxLength: 250,
  },
};

const textEditorStructure = {
  name: "content",
  size: 12,
  label: "متن بلاگ",
};

const typeheadStructure = {
  name: "tags",
  label: "تگ ها",
  placeholder: "تگ ها را وارد کنید",
  newSelectionPrefix: "اضافه کردن تگ :",
};

export {
  textEditorStructure,
  typeheadStructure,
  formStructure,
  imageUploadStructure,
};
