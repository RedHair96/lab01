// model
var fs = require("fs");

function getFirstImage(dir) {
  var fileList = [];
  var files = fs.readdirSync(dir);
  for (var i in files) {
    if (!files.hasOwnProperty(i)) continue;
    var name = dir.replace("public", "") + '/' + files[i];
    return name;
  }
}

function getImages(dir) {
  var fileList = [];
  var files = fs.readdirSync(dir);
  for (var i in files) {
    if (!files.hasOwnProperty(i)) continue;
    var name = dir.replace("public", "") + '/' + files[i];
    fileList.push(name);
  }
  return fileList;
}

var users = [{
    id: 1412538,
    images: getImages('public/image/1412538'),
    represent: getFirstImage('public/image/1412538'),
    name: 'Phan Hữu Thuận',
    pictures: 5,
    view: 38
  },
  {
    id: 1412539,
    images: getImages('public/image/1412539'),
    represent: getFirstImage('public/image/1412539'),
    name: "Trần Ngọc Thanh Trâm",
    pictures: 5,
    views: 208
  }
];

var User = {
  findAll: function() {
    return users;
  }
};

module.exports = User;
