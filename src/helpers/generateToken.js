function generateToken() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    const length = 20;
    for (let i = 0; i < length; i++) {
        token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
}

export default generateToken;
