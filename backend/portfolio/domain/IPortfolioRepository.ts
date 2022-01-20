interface IPortfolioRepository<T> {
    create: (item: T) => any;
    get: (_id: string) => any;
    getBySlug: (slug: string) => any;
    list: () => any;
    editList: (pageNumber: number) => any;
    confirm: (_id: string) => any;
    remove: (_id: string) => any;
}

export { IPortfolioRepository };
