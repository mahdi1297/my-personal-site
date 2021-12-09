interface IBlogRepository<T> {
    list: (pageNumber: number) => any;
    getByID: (_id: string) => any;
    getBySlug: (slug: string) => any;
    existsSlug: (slug: string) => any;
    existsTitle: (title: string) => any;
    create: (item: T) => any;
    update: (_id: string, data: object) => any;
    remove: (_id: string) => void;
}

export default IBlogRepository;
