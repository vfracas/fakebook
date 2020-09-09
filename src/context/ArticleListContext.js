import React, { createContext, useState, useEffect } from 'react';
import {v4 as uuid} from 'uuid';

export const ArticleListContext = createContext();

const ArticleListContextProvider = props => {
    const initialState = JSON.parse(localStorage.getItem('articles')) || [];
    const [articles, setArticles] = useState(initialState);
    const [editItem, setEditItem] = useState(null)

    useEffect(() => {
        localStorage.setItem('articles', JSON.stringify(articles));
    }, [articles]);

    const addArticle = title => {
        setArticles([...articles, { title, id: uuid(), date: new Date()}]);
    }
    
    const removeArticle = id => {
        setArticles(articles.filter(article => article.id !== id));
    }

    const findItem = id => {
        const item = articles.find(article => article.id === id);
        setEditItem(item);
    }

    const editArticle = (title, id) => {
        const newArticle = articles.map(article => (article.id === id ? {title, id} : article));
        setArticles(newArticle);
        setEditItem(null);
    }

    return (
        <ArticleListContext.Provider value={{articles, addArticle, removeArticle, findItem, editItem, editArticle}}>
            {props.children}
        </ArticleListContext.Provider>
    );
};

export default ArticleListContextProvider;