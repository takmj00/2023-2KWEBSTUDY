const {ArticleDAO} = require("../../DAO");

// GET /article/:articleId(\\d+)
const readArticle = async (req, res, next) => {
    try {
    const { user } = req.session;
    const { articleId } = req.params;
    const article = await ArticleDAO.getById(articleId);
    if (!article) throw new Error('NOT_FOUND');
    return res.render('articles/details.pug', { user, article });
    } catch (err) {
        return next(err);
}
};

const writeArticleForm = async (req, res, next) => {
    try {
        const {user} = req.session;
        return res.render("articles/editor.pug", {user});
    } catch (err) {
        next(err);
    }
}

const writeArticle = async (req, res, next) => {
    try {
        const {user} = req.session;
        const title = req.body.title.trim();
        const content = req.body.content.trim();
        if (!title||!content) throw new Error("BAD_REQUEST");
        if (title > 50 || content > 65000) throw new Error("BAD_REQUEST");
        const articleID = await ArticleDAO.create(title, content, user);
        return res.redirect(`/article/${articleID}`);
    } catch (err) {
        next(err);
    }
}


// GET /article/edit/:articleId(\\d+)
// GET /article/edit/:articleId(\\d+)
const editArticleForm = async (req, res, next) => {
    try {
    const { user } = req.session;
    const { articleId } = req.params;
    const article = await ArticleDAO.getByIdAndAuthor(articleId, user);
    if (!article) throw new Error('NOT_FOUND');
    return res.render('articles/editor.pug', { user, article });
    } catch (err) {
    return next(err);
    }
    };
    

// POST /article/edit/:articleId(\\d+)
const editArticle = async (req, res, next) => {
    try {
    const { user } = req.session;
    const { articleId } = req.params;
    const article = await ArticleDAO.getByIdAndAuthor(articleId, user);
    if (!article) throw new Error('NOT_FOUND');
    const title = req.body.title.trim();
    const content = req.body.content.trim();
    if (!title || title.length > 50 || !content || content.length > 65535)
    throw new Error('BAD_REQUEST');
    await ArticleDAO.update(articleId, title, content);
    return res.redirect(`/article/${articleId}`);
    } catch (err) {
    return next(err);
    }
    };
    
// GET /article/delete/:articleId(\\d+)
const deleteArticle = async (req, res, next) => {
    try {
    const { user } = req.session;
    const { articleId } = req.params;
    const article = await ArticleDAO.getByIdAndAuthor(articleId, user);
    if (!article) throw new Error('NOT_FOUND');
    await ArticleDAO.remove(articleId, user);
    return res.redirect('/articles/page/1');
    } catch (err) {
    return next(err);
    }
    };
    
module.exports = {
    readArticle,
    writeArticle,
    writeArticleForm,
    editArticle,
    editArticleForm,
    deleteArticle
}