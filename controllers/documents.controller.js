import File from "../models/file.model.js";

async function upload(req, res) {
    if (!req.authUser) {
        return res.redirect('/users/sign-in');
    }

    try {
        await File.create({
            path: req.file.path,
            originalName: req.file.originalname,
            userId: req.authUser._id,
        });
    } catch (error) {
        console.error('Failed to save record for the uploaded file:', error);

        return res
            .status(500)
            .render('users/dashboard', {
                metaTitle: 'My Drive | Dashboard',
                userFullName: `${req.authUser.firstName} ${req.authUser.lastName}`,
                status: 'failure',
                error: 'Something went wrong. Please try again.'
            });
    }

    return res.redirect('/users/dashboard');
}

export {
    upload
};
