const spawn = require('child_process').spawn;

var express = require('express');
var app = express();

app.post('/docker', function (req, res) {
  
  console.log('Redeploying...');
  const redeploy = spawn('./deploy.sh');

  redeploy.on('close', (code) => {
    console.log(`Redeploy exited with code ${code}`);
  });
  
  res.send('OK');

});

app.listen(3005, function () {
  console.log('Hooks ready');
});
