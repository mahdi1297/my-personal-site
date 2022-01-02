const formStructure = {
  id: 1,
  size: 12,
  type: "textarea",
  name: "content",
  placeholder: "با تشکر از دیدگاه شما",
  label: "برای این دیدگاه پاسخی ثبت کنید",
  labelRequired: true,
  rows: 6,
  validation: {
    required: true,
    minLength: 5,
    maxLength: 500,
  },
};

export { formStructure };
