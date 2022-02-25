import axios from "axios";
import toast from "react-hot-toast";

const path = `${process.env.REACT_APP_DEV_API}blog`;

const     publishBlog = async (formData, Token) => {
  try {
    const req = await axios.post(path, formData, {
      headers: { Authorization: `${Token}` },
    });
    if (!req || (req && req.status !== 200)) {
      toast.error("مشکلی در انجام عملیات به وجود آمد");
      return;
    }

    toast.success("با موفقیت دخیره شد");
  } catch (err) {
    console.log(err);
    toast.error("مشکلی در انجام عملیات به وجود آمد");
  }
};

export { publishBlog };
