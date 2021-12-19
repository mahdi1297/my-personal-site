interface ITokenRepository<T> {
    create: (item: T) => any;
    get: (item: object) => any;
    update: (_id: string, updatePack: any) => any;
    exist: (userId: string) => Promise<boolean>;
}

export default ITokenRepository;
