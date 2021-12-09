interface ITokenRepository<T> {
    create: (item: T) => any;
    update: (userId) => any;
}

export default ITokenRepository;
