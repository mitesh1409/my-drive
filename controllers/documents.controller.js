import File from "../models/file.model.js";

async function upload(req, res) {
    if (!req.authUser) {
        return res.redirect('/users/sign-in');
    }

    try {
        await File.create({
            path: req.file.path,
            originalName: req.file.originalname,
            user: req.authUser._id,
        });
    } catch (error) {
        console.error('Error during saving file upload record:', error);

        return res
            .status(500)
            .render('users/dashboard', {
                metaTitle: 'My Drive | Dashboard',
                userFullName: `${authUser.firstName} ${authUser.lastName}`,
                status: 'failure',
                error: 'Something went wrong. Please try again.'
            });
    }

    return res
        .status(201)
        .render('users/dashboard', {
            metaTitle: 'My Drive | Dashboard',
            userFullName: `${authUser.firstName} ${authUser.lastName}`,
            status: 'success',
            error: 'File uploaded successfully.'
        });
}

export {
    upload
};
