var watson = require('watson-developer-cloud');
var fs = require('fs');

	
var visual_recognition = watson.visual_recognition({
  username: 'your username',  //這邊改你所拿到的username
  password: 'your password',  //這邊改你所拿到的password
  version: 'v2-beta',
  version_date: '2015-12-02'
});
	

var params = {
	
  images_file: fs.createReadStream('./test1.jpg'),  //所需測試的圖片檔名
  classifier_ids: fs.readFileSync('./class_cpu.json')  //這邊輸入改好的json檔檔名 若註解掉此行則會直接用Visual recognition內建的分類器辨識你的圖片
                                                       //就不會使用到你訓練好的分類器
};


visual_recognition.classify(params, 
  function(err, response) {
	 if (err){
		  console.log(err);	
	 }else{
		  console.log(JSON.stringify(response, null, 2));	
	 }
});
		





