var express = require('express');
var router = express.Router();
var path = require('path');
// const Formidable = require('formidable');
const fileUpload = require('express-fileupload');
router.use(fileUpload({
  limits: { fileSize: 10 * 1024 * 1024 },
}));
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index.html', {
    title: 'Express'
  });
});
router.get('/img/:name', (req, res) => {
  let pathImage = path.join(__dirname, '../../img/' + req.params.name);
  res.sendFile(pathImage);
})
// formidable
// router.post('/uploads', (req, res, next) => {
//   let Formidable = require('formidable');
//   var form = Formidable.IncomingForm();
//   form.uploadDir = path.join(__dirname, '../../img/');
//   form.keepExtensions = true; // get .typefile on name
//   form.maxFieldsSize = 10 * 1024 * 1024; // max size 10MB
//   form.multiples = true; // sen multiple file
//   form.parse(req, (err, field, files) => {
//     if (err) {
//       res.json('err up load');
//     } else {
//       var arrFiles = files[""];
//       console.log(files);
//       if (arrFiles.length > 0) {
//         var fileName = arrFiles[0];
//         res.json({
//           statusCode: 'ok',
//           data: fileName
//         });
//       } else {
//         res.json('no data');
//       }
//     }
//   })
// })
// express-fileupload
router.post('/uploads', (req, res, next) => {
  if (!req.files)
    return res.status(400).json('No files were uploaded.');
  if (!req.files.picture)
    return res.status(400).json('field name err');
  let picture = req.files.picture;
  console.log(req.body);
  let pathImage = path.join(__dirname, '../../img/');
  let countImgeUpload = 0;
  let pictureUload = (picture.length == undefined)?picture:picture[0];
  let fileName = 'upload_' + Date.now().toString()+ pictureUload.name;
  pictureUload.mv(pathImage + fileName, function (err) {
    if (err)
      return res.status(500).json(err);
    res.json('File uploaded!');
  });

})
module.exports = router;