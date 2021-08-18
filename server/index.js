const express = require('express');
const morgan = require('morgan');
const app = express();
const compression = require('compression')
require('newrelic')

app.use(express.json());
// app.use(morgan('dev'));
app.set('port', 3001);

const db = require('../database/index');



app.get('/', (req, res) => {
  res.send('It works, but go to the correct endpoint!');
});

app.get('/answers', async (req, res) => {
  // console.log(req.query)
  const response = { question_id: req.query.question_id };
  response.results = await db.query(`SELECT answers.id as answer_id, answers.body, to_timestamp(answers.date_written/1000) as date, answers.answerer_name, answers.helpful as helpfulness, json_agg(json_build_object('id', photos.id, 'url', photos.url)) AS photos FROM answers LEFT JOIN photos ON photos.answer_id = answers.id WHERE question_id = ${req.query.question_id} GROUP BY answers.id`);
  res.send(response);
});

app.get('/questions', async (req, res) => {
  const response = { product_id: req.query.product_id };

  response.results = await db.query(`SELECT id as question_id, body as question_body,
  to_timestamp(date_written/1000) as question_date, asker_name, helpful as question_helpfulness,
   reported FROM questions WHERE product_id = ${req.query.product_id} LIMIT 50`);

  const eachQuestion = async (qs) => {
    for (let q of qs.results) {
      q.answers = {};
      let answers = await db.query(`SELECT answers.id, answers.body, to_timestamp(answers.date_written/1000) as date,
      answers.answerer_name, answers.helpful as helpfulness, json_agg(photos.url) AS photos
      FROM answers LEFT JOIN photos ON photos.answer_id = answers.id
      WHERE question_id = ${q.question_id} GROUP BY answers.id`);

      for (let answer of answers) {
        q.answers[JSON.stringify(answer.id)] = answer
      }
    }
    res.send(qs);
  };
  eachQuestion(response);
});



app.listen(app.get('port'));
console.log('listening on', app.get('port'));