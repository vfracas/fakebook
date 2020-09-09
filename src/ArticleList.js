import React, {useContext} from 'react';
import {ArticleListContext} from './context/ArticleListContext';
import Article from './Article';

const ArticleList = () => {
    const {articles} = useContext(ArticleListContext);
    return (
        <div>
            {articles.map((article) => {
                return <Article article={article} key={article.id}/>;
            })}
        </div>
    )
}

export default ArticleList
