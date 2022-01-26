interface IUserRpository<T> {
    list: (pageNumber: number) => any;
    get: (item: any) => any;
    create: (item: T) => any;
    update: (_id: string, data: any) => any;
    remove: (_id: string) => any;
    refactor: (_id: string) => any;
    count: () => any;
}

export default IUserRpository;
