interface ITokenRepository<T> {
    create: (item: T) => any;
    get: (item: object) => any;
    update: (userId: string, updatePack: any) => any;
    exist: (userId: string) => Promise<boolean>;
}

export default ITokenRepository;
