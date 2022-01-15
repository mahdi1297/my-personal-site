import mongoose from "mongoose";

interface IPortfolioDomain extends mongoose.Document {
    title: string;
    description: string;
    link: string;
    isConfirmed: string;
    main_image: string;
    slug: string;
    presentation_images: string[];
    technologies: string[];
}

export { IPortfolioDomain };
