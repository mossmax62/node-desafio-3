const { db } = require('../db');

const getPosts = async () => {
    try {
        console.log("get posts dao");
        const data = await db.query('SELECT * FROM posts;');   
        console.log("get posts dao 2");
        console.log(data.rows); 
        return data.rows;
    } catch (error) {
        throw new Error("error al obtener los posts");
    }
    

    
} 

const getPostById = async (id) => {
    const data = await db.query('SELECT * FROM posts WHERE id = $1;', [id]);
    return data.rows;
} 

const createPost = async (titulo, url, descripcion) => {
    try {
        const data = await db.query('INSERT INTO posts (titulo, img, descripcion) VALUES ($1, $2, $3);', [titulo, url, descripcion]);
        return data.rows;    
    } catch (error) {
        console.log(error);
        throw new Error("error al crear el post");
    }
    
}

const updatePost = async (id, title, content) => {
    return await db.query('UPDATE posts SET title = $1, content = $2 WHERE id = $3;', [title, content, id]);
}

const deletePost = async (id) => {
    return await db.query('DELETE FROM posts WHERE id = $1;', [id]);
}

module.exports = { getPosts, getPostById, createPost, updatePost, deletePost };