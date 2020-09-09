import React, {useContext} from 'react';
import {ArticleListContext} from './context/ArticleListContext'

const Article = ({article}) => {
    const {removeArticle, findItem} = useContext(ArticleListContext)

    return (
            <div className="card main_el">
                <div className="card-body">
                    <div className="d-flex flex-row justify-content-between align-items-top">
                        <h5 className="card-title">Nouvelle publication</h5>
                        <div className="dropdown article_navbtn">
                            <button className="upnav navicons backtheme navbtn nostyle" type="button" id="dropdownMenuButtona-exp" data-toggle="dropdown" aria-haspopup="true" arianded="false">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-three-dots" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                </svg>
                            </button>
                            <div className="dropdown-menu navcolor article_nav" aria-labelledby="dropdownMenuButton">
                                <div className="d-flex flex-row justify-content-around align-items-center article_nav_el">
                                    <div className="d-flex flex-row justify-content-between align-items-center">
                                        <div className="navicons backtheme d-flex flex-column justify-content-around align-items-center">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                            </svg>
                                        </div>
                                        <button className="nostyle article_btn highlight" onClick={() => findItem(article.id)}>Modifier</button>
                                    </div>
                                </div>
                                <div className="d-flex flex-row justify-content-around align-items-center article_nav_el ">
                                    <div className="d-flex flex-row justify-content-between align-items-center">
                                        <div className="navicons backtheme d-flex flex-column justify-content-around align-items-center">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                                            </svg>
                                        </div>
                                        <button className="nostyle article_btn highlight" onClick={() => removeArticle(article.id)}>Supprimer</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="card-text">{article.title}</p>
                </div>
            </div>
            
    )
}

export default Article;
