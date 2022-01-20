const formStructure = [
  {
    id: 1,
    size: 12,
    type: "text",
    name: "title",
    placeholder: "عنوان پروژه ",
    label: "عنوان پروژه",
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
    placeholder: "slug",
    label: "slug پروژه",
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
    type: "text",
    name: "path",
    placeholder: "لینک پروژه ",
    label: "لینک پروژه",
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
    type: "textarea",
    name: "description",
    placeholder: "پروژه سایت فروشگاهی با امکانات...",
    label: "جزییِات پروژه",
    labelRequired: true,
    validation: {
      required: true,
      minLength: 5,
      maxLength: 1000,
    },
  },
  {
    id: 5,
    size: 12,
    type: "file",
    name: "main_image",
    placeholder: "",
    label: "تصویر اصلی و بند انگشتی",
    labelRequired: true,
    validation: {
      required: true,
    },
  },
];

const techs_form_structre = {
  name: "technologies",
  label: "تکنولوژی ها",
  placeholder: "تگ ها را وارد کنید",
  newSelectionPrefix: "اضافه کردن تگ :",
};

export { formStructure, techs_form_structre };
