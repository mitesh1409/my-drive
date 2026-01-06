function upload(req, res) {
    if (!req.authUser) {
        return res.redirect('/users/sign-in');
    }

    // const authUser = req.authUser;

    console.log('Document uploaded');
    res.send(req.file);
}

export {
    upload
};
