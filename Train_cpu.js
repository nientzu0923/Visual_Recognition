///Train cpu Node.js

var watson = require('watson-developer-cloud');
var fs = require('fs');



var visual_recognition = watson.visual_recognition({
  username: '69440278-4c65-468c-ae21-8685e230477e',
  password: 'Mt2MKsfB9EwM',
  version: 'v2-beta',
  version_date: '2015-12-02'
});

var params = {
  name: 'cpu',
  positive_examples: fs.createReadStream('./cpupositive.zip'),
  negative_examples: fs.createReadStream('./cpunegative.zip')
};

visual_recognition.createClassifier(params, 
  function(err, response) {
     if (err)
          console.log(err);
       else
      console.log(JSON.stringify(response, null, 2));
});