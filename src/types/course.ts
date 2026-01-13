export interface ICourse {
    id: number;
    course: boolean;
    CourseSyllabusImagesLink?: Array<string>;
    popular?: boolean;
    title: string;
    tagline: string;
    description: string;
    originalPrice: number;
    salePrice: number;
    imageSrc: string;
    purchaseLink: string;
}
