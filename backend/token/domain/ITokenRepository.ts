interface ITokenRepository<T> {
    create: (item: T) => any;
    update: (_id: string, updatePack: any) => any;
}

export default ITokenRepository;
