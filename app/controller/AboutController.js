// about-controller
var aboutController = {
  index: function(req, res) {
    res.render('about/index', {
      title: 'ABOUT',
      page: 'about'
    });
  }
}

module.exports = aboutController;
