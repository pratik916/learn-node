const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  console.log("Hey!!!!!");
  const pratik = { name: 'Pratik', age:28, cool:true };
  // res.send('Hey! It works!');
  // res.json(pratik);
  // res.send(req.query.name);
  // res.json(req.query);
  res.render('hello', {
  	name: 'Champavat',
  	dog: 'Sarpanch'
  });
});

router.get('/reverse/:name', (req, res) => {
	// res.send("It Works");
	const reverse = [...req.params.name].reverse().join('');
	// res.send(req.params.name);
	res.send(reverse);
})

module.exports = router;
