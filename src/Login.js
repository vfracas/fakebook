import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import app from "./base.js";
import {AuthContext} from "./Auth.js";

const Login = ({history}) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const {email, password} = event.target.elements;
            try{
                await app
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
                history.push("/");
            } catch(error){
                alert(error);
            }
        }, [history]
    );

    const {currentUser} = useContext(AuthContext);

    if(currentUser){
        return <Redirect to="/" />;
    }

    return(
        <div className="log_page">
            <div className="header">
                <div className="d-flex flex-row justify-content-between align-items-center title_login">
                    <div className="d-flex flex-column title_sentence">
                        <h1 className="title"><b>fakebook</b></h1>
                        <p className="sentence">Avec Fakebook, arborez votre masque et rencontrez de parfaits inconnus.</p>
                    </div>
                    <div className="form-group log_form">
                        <form className="log_inp shadow rounded" onSubmit={handleLogin}>
                            <div className="form-group">
                                <input className="form-control form-control-lg mail" type="email" name="email" placeholder="Adresse e-mail ou numéro de tél."/>
                            </div>
                            <div className="form-group">
                                <input className="form-control form-control-lg form-control-block psw" type="password" name="password" placeholder="Mot de passe"/>
                            </div>
                            <button className="btn btn-primary btn-lg btn-block connect_btn" type="submit"><b>Connexion</b></button>
                                <a className="reset_psw" href="/resetpsw">Mot de passe oublié ?</a>
                            <hr className="midline"/>
                            <button className="signup_btn" type="button"><a className="signup_link" href="/signup"><b>Créer un compte</b></a></button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer">
                <p className="languages">
                    <a href="/#">Français (France)</a>
                    <a href="/#">English (US)</a>
                </p>
                <hr/>
                <p className="services">
                    <a href="/signup">S'inscrire</a>
                    <a href="/fakebook">Connexion</a>
                    <a href="https://www.instagram.com/?hl=fr">Instagram</a>
                    <a href="/#">Messenger</a>
                    <a href="/#">Fakebook Lite</a>
                    <a href="/#">Confidentialité</a>
                    <a href="https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal">Pages</a>
                    <a href="/#">Cookies</a>
                    <a href="https://www.google.com/maps">Lieux</a>
                    <a href="/#">Aide</a>
                    <a href="/#">Emplois</a>
                    <a href="/#">À propos</a>
                    <a href="/#">Local</a>
                    <a href="https://github.com/vfracas">Github</a>
                </p>
            </div>
        </div>
    );
};

export default withRouter(Login);