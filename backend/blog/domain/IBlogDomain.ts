import mongoose from "mongoose";

interface IBlogDomain extends mongoose.Document {
    title: string;
    slug: string;
    main_image: string;
    thumbnail: string;
    description: string;
    keyword: string;
    main_keyword: string;
    content: string;
    writer: string;
    isPublished: string;
    comments_length: number;
    category: any;
    tags: string[];
    isRemoved: boolean;
}

export default IBlogDomain;
