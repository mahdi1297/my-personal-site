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
  {
    id: 4,
    size: 12,
    type: "text",
    name: "main_keyword",
    placeholder: "مثلا react.js",
    label: "کلمه کلیدی اصلی",
    labelRequired: true,
    validation: {
      required: true,
      minLength: 5,
      maxLength: 250,
    },
  },
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
  name: "category",
  label: "دسته بندی ها",
  placeholder: "دسته بندی ها ها را وارد کنید",
  newSelectionPrefix: "اضافه کردن دسته بندی :",
};

export {
  textEditorStructure,
  typeheadStructure,
  formStructure,
  imageUploadStructure,
};
