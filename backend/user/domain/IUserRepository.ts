interface IUserRpository<T> {
    list: () => any;
    getById: (_id: string) => any;
    checkUser: (item: any) => any;
    create: (item: T) => any;
    update: (_id: string, data: any) => any;
    remove: (_id: string) => any;
    refactor: (_id: string) => any;
}

export default IUserRpository;
