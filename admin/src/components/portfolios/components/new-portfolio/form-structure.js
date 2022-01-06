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
        id: 3,
        size: 12,
        type: "textarea",
        name: "title",
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
        id: 4,
        size: 12,
        type: "file",
        name: "image",
        placeholder: "",
        label: "تصویر اصلی و بند انگشتی",
        labelRequired: true,
        validation: {
            required: true,
        },
    },
];

export {formStructure};