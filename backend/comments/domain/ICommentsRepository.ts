interface ICommentsRepository<T> {
    create: (item: T) => any;
    confirm: (_id: string) => any;
    remove: (_id: string) => any;
}

export { ICommentsRepository };
