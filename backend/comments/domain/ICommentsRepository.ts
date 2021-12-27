interface ICommentsRepository<T> {
    create: (item: T) => any;
    get: (_id: string) => any;
    list: (parentId: string) => any;
    editList: (item: any) => any;
    confirm: (_id: string) => any;
    remove: (_id: string) => any;
}

export { ICommentsRepository };
