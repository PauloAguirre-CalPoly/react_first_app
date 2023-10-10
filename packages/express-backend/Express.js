const addUser = (user) => {
    users['users_list'].push(user);
    return user;
}

app.post('/users', (req, res) => {
    const userToAdd = req.body;
    addUser(userToAdd);
    res.send();
});