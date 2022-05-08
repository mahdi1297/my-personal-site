import { slugger } from "../../../helper/slugger";
import { updateBlog } from "./data";

const updateBlogHandler = async (data, typehead, content, image, user, _id) => {
  const formData = new FormData();
  formData.append("_id", _id);
  formData.append("title", data.title);
  formData.append("slug", slugger(data.slug));
  formData.append("description", data.description);
  formData.append("keyword", data.keyword);
  formData.append("tags", JSON.stringify(typehead));
  formData.append("writer", user);
  formData.append("content", content);

  if (Array.isArray(image)) {
    formData.append("main_image", image[0].file);
  } else {
    formData.append("main_image", image);
  }

  await updateBlog(formData);
};

const setInputsValues = (setValue, blogInfo, setImage) => {
  if (blogInfo.title) {
    const valuesToSet = [
      { title: blogInfo.title },
      { slug: blogInfo.slug },
      { keywords: blogInfo.keywords },
      { main_keyword: blogInfo.main_keyword },
      { category: blogInfo.category },
      { description: blogInfo.description },
    ];

    valuesToSet.forEach((item) => {
      setValue(Object.keys(item)[0], Object.values(item)[0]);
    });
    setImage(blogInfo.main_image);
  }
};

export { updateBlogHandler, setInputsValues };
