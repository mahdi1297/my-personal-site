interface IBlogRepository<T> {
    list: (pageNumber: number) => any;
    editList: (pageNumber: number) => any;
    getByID: (_id: string) => any;
    getDetailByID: (_id: string) => any;
    publish: (_id: string, isPublished: string) => any;
    getBySlug: (slug: string) => any;
    existsSlug: (slug: string) => any;
    existsTitle: (title: string) => any;
    create: (item: T) => any;
    update: (_id: string, data: object) => any;
    remove: (_id: string) => void;
    count: () => any;
}

export default IBlogRepository;
