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
        const data = await db.query('INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0);', [titulo, url, descripcion]);
        return data.rows;    
    } catch (error) {
        console.log(error);
        throw new Error("error al crear el post");
    }
    
}

const updatePost = async (id) => {
    try {
        console.log("updating post dao " + id);
        return await db.query('UPDATE posts SET likes = likes + 1 WHERE id = $1;', [id]);    
    } catch (error) {
        console.log(error);
        throw new Error("error al actualizar el post");
    }
    
}

const deletePost = async (id) => {
    try {
        return await db.query('DELETE FROM posts WHERE id = $1;', [id]);    
    } catch (error) {
        console.log(error);
        throw new Error("error al eliminar el post");
    }
    
}

module.exports = { getPosts, getPostById, createPost, updatePost, deletePost };