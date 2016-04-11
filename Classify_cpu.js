var watson = require('watson-developer-cloud');
var fs = require('fs');

	
var visual_recognition = watson.visual_recognition({
  username: '69440278-4c65-468c-ae21-8685e230477e',
  password: 'Mt2MKsfB9EwM',
  version: 'v2-beta',
  version_date: '2015-12-02'
});
	

var params = {
	
  images_file: fs.createReadStream('./test1.jpg'),
  classifier_ids: fs.readFileSync('./class_cpu.json')
  
};


visual_recognition.classify(params, 
  function(err, response) {
	 if (err){
		  console.log(err);	
	 }else{
		  console.log(JSON.stringify(response, null, 2));	
	 }
});
		





