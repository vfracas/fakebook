import React, {useContext, useState, useEffect} from 'react';
import {ArticleListContext} from './context/ArticleListContext';

const ArticleForm = () => {
    const {addArticle, editItem, editArticle} = useContext(ArticleListContext);

    const [title, setTitle] = useState('');

    const handleChange = e =>{
        setTitle(e.target.value);
    };

    const handleSubmit = e =>{
        e.preventDefault();
        if(!editItem) {
            addArticle(title);
            setTitle("");
        } else {
            editArticle(title, editItem.id);
        }
    };

    useEffect(() => {
        if(editItem) {
            setTitle(editItem.title);
        } else {
            setTitle("");
        }
    }, [editItem]);

    return (
        <form onSubmit={handleSubmit}>
            <input className="article_inp backtheme nostyle" onChange={handleChange} value={title} type="text" placeholder="Que voulez-vous dire?" required/>
            <div className="d-flex flex-row justify-content-center">
                <button className="add_article_btn">{editItem ? 'Editer' : 'Créer une publication'}</button>
            </div>
        </form>
    );
};

export default ArticleForm;
