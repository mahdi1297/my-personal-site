interface IUserRpository<T> {
    list: () => any;
    get: (item: any) => any;
    create: (item: T) => any;
    update: (_id: string, data: any) => any;
    remove: (_id: string) => any;
    refactor: (_id: string) => any;
}

export default IUserRpository;
