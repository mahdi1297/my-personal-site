interface IPortfolioRepository<T> {
    create: (item: T) => any;
    list: (pageNumber: number) => any;
    editList: (pageNumber: number) => any;
    update: (_id: string, data: any) => any;
    remove: (_id: string) => any;
    refactor: (_id: string) => any;
}

export default IPortfolioRepository;
