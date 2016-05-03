///Train cpu Node.js

var watson = require('watson-developer-cloud');
var fs = require('fs');



var visual_recognition = watson.visual_recognition({
  username: 'your username',  //這邊改你所拿到的username
  password: 'your password',  //這邊改你所拿到的password
  version: 'v2-beta',
  version_date: '2015-12-02'
});

var params = {
  name: 'cpu',
  positive_examples: fs.createReadStream('./cpupositive.zip'),  //這邊改正樣本的.zip檔檔名
  negative_examples: fs.createReadStream('./cpunegative.zip')   //這邊改負樣本的.zip檔檔名
};

visual_recognition.createClassifier(params, 
  function(err, response) {
     if (err)
          console.log(err);
       else
      console.log(JSON.stringify(response, null, 2));
});
