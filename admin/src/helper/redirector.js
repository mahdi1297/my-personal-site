export function redirector(type, path, history) {
    switch (type) {
        case "with-load":
            window.location.href = path;
            break;
        case "non-load":
            history.push(path);
            break;
        default:
            break;
    }
}
