import mongoose from "mongoose";

interface IPortfolioDomain extends mongoose.Document {
    title: string;
    link: string;
    main_image: string;
    slug: string;
    isConfirmed: string;
    presentation_images: string[];
    description: string;
    technologies: string[];
}

export default IPortfolioDomain;
