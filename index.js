const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
const posts_dao = require('./repositorio/posts_dao');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Hello World');
    });

app.get('/posts',async (req, res) => {
    try {
        console .log("get posts");
        res.status(200).send(await posts_dao.getPosts());    
        console.log("get posts 2");
    } catch (error) {
        res.status(500).send(error);
    }
    }
    );

app.post('/posts', async (req, res) => {
    const {titulo, url, descripcion} = req.body;
    try {
        console.log(titulo, url, descripcion);
        const data = await posts_dao.createPost(titulo, url, descripcion)
        console.log(data);
        res.status(201).send(data);    
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
    
    }
    );


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });