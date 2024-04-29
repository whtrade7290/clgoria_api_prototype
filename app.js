const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
var cors = require('cors');

const app = express();
const port = 8080;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: '172.104.71.209',
  user: 'cgloria',
  password: 'cgloria1234',
  database: 'dev_cgloria'
});

connection.connect(err => {
  if (err) {
    console.error('Database connection failed: ', err.stack);
    return;
  }
  console.log('Connected to database');
});

app.post('/sermon', (req, res) => {
 console.log(req.body);
 const {startRow, pageSize} = req.body
  connection.query(`SELECT * FROM sermon LIMIT ${pageSize} OFFSET ${startRow}`, (error, results, fields) => {
    if (error) {
      console.error('Error fetching contacts: ', error);
      res.status(500).json({ error: 'Error fetching contacts' });
      return;
    }
    res.json(results);
  });
});
app.get('/sermon_count', (req, res) => {
  connection.query('SELECT count(*) FROM sermon', (error, results, fields) => {
    console.log("results: ", results);
    if (error) {
      console.error('Error fetching contacts: ', error);
      res.status(500).json({ error: 'Error fetching contacts' });
      return;
    }
    res.json(results);
  });
});

app.post('/column', (req, res) => {
 const {startRow, pageSize} = req.body
  connection.query(`SELECT * FROM columnTable LIMIT ${pageSize} OFFSET ${startRow}`, (error, results, fields) => {
    if (error) {
      console.error('Error fetching contacts: ', error);
      res.status(500).json({ error: 'Error fetching contacts' });
      return;
    }
    res.json(results);
  });
});
app.get('/column_count', (req, res) => {
  connection.query('SELECT count(*) FROM columnTable', (error, results, fields) => {
    console.log("results: ", results);
    if (error) {
      console.error('Error fetching contacts: ', error);
      res.status(500).json({ error: 'Error fetching contacts' });
      return;
    }
    res.json(results);
  });
});
app.post('/weekly', (req, res) => {
  const {startRow, pageSize } = req.body
  connection.query(`SELECT * FROM weeksScript LIMIT ${pageSize} OFFSET ${startRow}`, (error, results, fields) => {
    if (error) {
      console.error('Error fetching contacts: ', error);
      res.status(500).json({ error: 'Error fetching contacts' });
      return;
    }
    res.json(results);
  });
});
app.get('/weekly_count', (req, res) => {
  connection.query('SELECT count(*) FROM weeksScript', (error, results, fields) => {
    console.log("results: ", results);
    if (error) {
      console.error('Error fetching contacts: ', error);
      res.status(500).json({ error: 'Error fetching contacts' });
      return;
    }
    res.json(results);
  });
});
app.post('/small', (req, res) => {
  const {startRow, pageSize} = req.body
  connection.query(`SELECT * FROM classTable LIMIT ${pageSize} OFFSET ${startRow}`, (error, results, fields) => {
    if (error) {
      console.error('Error fetching contacts: ', error);
      res.status(500).json({ error: 'Error fetching contacts' });
      return;
    }
    res.json(results);
  });
});
app.get('/small_count', (req, res) => {
  connection.query('SELECT count(*) FROM classTable', (error, results, fields) => {
    console.log("results: ", results);
    if (error) {
      console.error('Error fetching contacts: ', error);
      res.status(500).json({ error: 'Error fetching contacts' });
      return;
    }
    res.json(results);
  });
});
app.post('/notice', (req, res) => {
  const {startRow, pageSize} = req.body
  connection.query(`SELECT * FROM Notice LIMIT ${pageSize} OFFSET ${startRow}`, (error, results, fields) => {
    if (error) {
      console.error('Error fetching contacts: ', error);
      res.status(500).json({ error: 'Error fetching contacts' });
      return;
    }
    res.json(results);
  });
});
app.get('/notice_count', (req, res) => {
  connection.query('SELECT count(*) FROM notice', (error, results, fields) => {
    console.log("results: ", results);
    if (error) {
      console.error('Error fetching contacts: ', error);
      res.status(500).json({ error: 'Error fetching contacts' });
      return;
    }
    res.json(results);
  });
});

app.post('/library', (req, res) => {
  const {startRow, pageSize} = req.body
  connection.query(`SELECT * FROM schoo_library LIMIT ${pageSize} OFFSET ${startRow}`, (error, results, fields) => {
    if (error) {
      console.error('Error fetching contacts: ', error);
      res.status(500).json({ error: 'Error fetching contacts' });
      return;
    }
    res.json(results);
  });
});
app.get('/library_count', (req, res) => {
  connection.query('SELECT count(*) FROM schoo_library', (error, results, fields) => {
    console.log("results: ", results);
    if (error) {
      console.error('Error fetching contacts: ', error);
      res.status(500).json({ error: 'Error fetching contacts' });
      return;
    }
    res.json(results);
  });
});
app.post('/free', (req, res) => {
  const {startRow, pageSize} = req.body
  connection.query(`SELECT * FROM free_table LIMIT ${pageSize} OFFSET ${startRow}`, (error, results, fields) => {
    if (error) {
      console.error('Error fetching contacts: ', error);
      res.status(500).json({ error: 'Error fetching contacts' });
      return;
    }
    res.json(results);
  });
});
app.get('/free_count', (req, res) => {
  connection.query('SELECT count(*) FROM free_table', (error, results, fields) => {
    console.log("results: ", results);
    if (error) {
      console.error('Error fetching contacts: ', error);
      res.status(500).json({ error: 'Error fetching contacts' });
      return;
    }
    res.json(results);
  });
});
app.post('/testimony', (req, res) => {
  const {startRow, pageSize} = req.body
  connection.query(`SELECT * FROM testimony LIMIT ${pageSize} OFFSET ${startRow}`, (error, results, fields) => {
    if (error) {
      console.error('Error fetching contacts: ', error);
      res.status(500).json({ error: 'Error fetching contacts' });
      return;
    }
    res.json(results);
  });
});
app.get('/testimony_count', (req, res) => {
  connection.query('SELECT count(*) FROM testimony', (error, results, fields) => {
    console.log("results: ", results);
    if (error) {
      console.error('Error fetching contacts: ', error);
      res.status(500).json({ error: 'Error fetching contacts' });
      return;
    }
    res.json(results);
  });
});
app.post('/photo', (req, res) => {
  const {startRow, pageSize} = req.body
  connection.query(`SELECT * FROM photo LIMIT ${pageSize} OFFSET ${startRow}`, (error, results, fields) => {
    if (error) {
      console.error('Error fetching contacts: ', error);
      res.status(500).json({ error: 'Error fetching contacts' });
      return;
    }
    res.json(results);
  });
});
app.get('/photo_count', (req, res) => {
  connection.query('SELECT count(*) FROM photo', (error, results, fields) => {
    console.log("results: ", results);
    if (error) {
      console.error('Error fetching contacts: ', error);
      res.status(500).json({ error: 'Error fetching contacts' });
      return;
    }
    res.json(results);
  });
});
app.post('/school_photo', (req, res) => {
  const {startRow, pageSize} = req.body
  connection.query(`SELECT * FROM school_photo LIMIT ${pageSize} OFFSET ${startRow}`, (error, results, fields) => {
    if (error) {
      console.error('Error fetching contacts: ', error);
      res.status(500).json({ error: 'Error fetching contacts' });
      return;
    }
    res.json(results);
  });
});
app.get('/school_photo_count', (req, res) => {
  connection.query('SELECT count(*) FROM school_photo', (error, results, fields) => {
    console.log("results: ", results);
    if (error) {
      console.error('Error fetching contacts: ', error);
      res.status(500).json({ error: 'Error fetching contacts' });
      return;
    }
    res.json(results);
  });
});
app.post('/contacts', (req, res) => {
  const { name, phone, email, memo } = req.body;
  const regdate = new Date().toISOString();

  const query = 'INSERT INTO contact (name, phone, email, memo, regdate) VALUES (?, ?, ?, ?, ?)';
  const values = [name, phone, email, memo, regdate];

  connection.query(query, values, (error, results, fields) => {
    if (error) {
      console.error('Error inserting contact: ', error);
      res.status(500).json({ error: 'Error inserting contact' });
      return;
    }
    res.json({ message: 'Contact inserted successfully' });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.post('/training', (req, res) => {
  const {id} = req.body;
  console.log("id: ", id);
  connection.query(`SELECT * FROM training WHERE id = ${id}`, (error, results, fields) => {
  
    if (error) {
      console.error('Error fetching contacts: ', error);
      res.status(500).json({ error: 'Error fetching contacts' });
      return;
    }
    res.json(results);
  });
});

app.post('/diary', (req, res) => {
  const {training_num, startRow, pageSize} = req.body;
  console.log("training_num: ", training_num);
  connection.query(`SELECT
                     * 
                    FROM training_diary
                    WHERE training_id = ${training_num}
                    LIMIT ${pageSize} 
                    OFFSET ${startRow}`,
                     (error, results, fields) => {
  
    if (error) {
      console.error('Error fetching contacts: ', error);
      res.status(500).json({ error: 'Error fetching contacts' });
      return;
    }
    res.json(results);
  });
});

app.post('/diary_count', (req, res) => {
  const {training_num} = req.body;
  connection.query(`SELECT count(*) FROM training_diary WHERE training_id = ${training_num}`, (error, results, fields) => {
    console.log("results: ", results);
    if (error) {
      console.error('Error fetching contacts: ', error);
      res.status(500).json({ error: 'Error fetching contacts' });
      return;
    }
    res.json(results);
  });
});

app.post('/assignment', (req, res) => {
  const {training_num, startRow, pageSize} = req.body;
  console.log("training_num: ", training_num);
  connection.query(`SELECT
                     * 
                    FROM training_assignment
                    WHERE training_id = ${training_num}
                    LIMIT ${pageSize} 
                    OFFSET ${startRow}`
                    , (error, results, fields) => {
  
    if (error) {
      console.error('Error fetching contacts: ', error);
      res.status(500).json({ error: 'Error fetching contacts' });
      return;
    }
    res.json(results);
  });
});
app.post('/assignment_count', (req, res) => {
  const {training_num} = req.body;
  connection.query(`SELECT count(*) FROM training_assignment WHERE training_id = ${training_num}`, (error, results, fields) => {
    console.log("results: ", results);
    if (error) {
      console.error('Error fetching contacts: ', error);
      res.status(500).json({ error: 'Error fetching contacts' });
      return;
    }
    res.json(results);
  });
});
app.post('/training_notice', (req, res) => {
  const {training_num, startRow, pageSize} = req.body;
  console.log("training_num: ", training_num); 
  connection.query(`SELECT
                     * 
                    FROM training_notice
                    WHERE training_id = ${training_num}
                    LIMIT ${pageSize} 
                    OFFSET ${startRow}`
                    , (error, results, fields) => {
  
    if (error) {
      console.error('Error fetching contacts: ', error);
      res.status(500).json({ error: 'Error fetching contacts' });
      return;
    }
    res.json(results);
  });
});
app.post('/training_notice_count', (req, res) => {
  const {training_num} = req.body;
  connection.query(`SELECT count(*) FROM training_notice WHERE training_id = ${training_num}`, (error, results, fields) => {
    console.log("results: ", results);
    if (error) {
      console.error('Error fetching contacts: ', error);
      res.status(500).json({ error: 'Error fetching contacts' });
      return;
    }
    res.json(results);
  });
});

app.post('/login', (req, res) => {
  const {username, password} = req.body;
  console.log(username);
  console.log(password);
 
  connection.query(`SELECT * FROM user WHERE password = '${password}' AND username = '${username}'`, (error, results, fields) => {
    
    console.log("result: ", results);

    if (!results || results.length === 0) {
      console.error('Error fetching contacts: ', error);
      res.status(500).json({ error: '찾으시는 계정이 없습니다.' });
      return;
    }
    if (error) {
      console.error('Error fetching contacts: ', error);
      res.status(500).json({ error: 'Error fetching contacts' });
      return;
    }
    res.json(results);
  });

 
});
