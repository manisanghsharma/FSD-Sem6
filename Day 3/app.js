import express from 'express';

const app = express();
app.use(express.json());

const users = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Jack', age: 35 }
]

app.get('/users', (req, res) => {
    res.send(users);
});


app.post('/users', (req, res) => {
    const data = req.body;
    const newid = users.length > 0 ? users[users.length - 1].id + 1 : 1;

    users.push(data);
    res.send({msg: 'Data received!', data: data});
}
);

app.post('/api', (req, res) => {
    const data = req.body;
    res.send({msg: 'Data received!', data});
}
);

app.listen(9000, () => {
    console.log('Server is running on port 9000');
}
);