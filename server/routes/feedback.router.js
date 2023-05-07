const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log('POSTING Feedback', req.body);

    let feelingScore = req.body.feeling
    let understandingScore = req.body.understanding
    let supportScore = req.body.support
    let commentLeft = req.body.comment

    let sqlText =`
    INSERT INTO "feedback"
    ("feeling", "understanding", "support", "comments")
    VALUES
    ($1, $2, $3, $4)
    `;

    let sqlValues = [feelingScore, understandingScore, supportScore, commentLeft]

    pool.query(sqlText, sqlValues)
    .then((dbRes) => {
        res.sendStatus(201);
    })
    .catch((dbErr) =>{
        console.log('POST /feedback error:', dbErr);
        res.sendStatus(500);
    })
})

router.get('/', (req, res) => {
    const sqlText = `
    SELECT * FROM feedback
        ORDER BY id;

`;

pool.query(sqlText)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('GET /feedback fail:', error);
        res.sendStatus(500);
    })
})


module.exports = router;