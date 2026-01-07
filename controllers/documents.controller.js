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

async function download(req, res) {
    console.log('Called download...', req.params.id);

    const authUser = req.authUser;
    const documentId = req.params.id;

    const document = await File.findOne({
        _id: documentId,
        userId: authUser._id
    }).exec();

    if (!document) {
        return res
            .status(401)
            .json({
                status: 'Unauthorized',
                message: 'You are not authorized to access that file'
            });
    }

    // WIP

    // const signedUrl = await firebase.storage().bucket().file(path).getSignedUrl({
    //     action: 'read',
    //     expires: Date.now() + 1000 * 60 * 60
    // });

    // console.log('signedUrl', signedUrl);

    // return res.redirect(signedUrl);
}

export {
    upload,
    download
};
