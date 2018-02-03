const users = [
    {
        username: 'orenzo101',
        password: '123456'
    }
];

module.exports = {
    login({ username, password }) {
        
        const currentUser = users.find((user) => {
            return user.username === username && user.password === password;
        });
        if(currentUser) {
            return true;
        }
        else {
            return false;
        } 
    }
}