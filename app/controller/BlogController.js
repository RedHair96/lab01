// blog-controller
var blogController = {
  index: function(req, res) {
    res.render('blog', {
      title: 'BLOG',
      page: 'blog',
      message: 'Blog here!'
    });
  }
}

module.exports = blogController;
