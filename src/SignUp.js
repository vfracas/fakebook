import React, {useCallback} from "react";
import {withRouter} from "react-router";
import {Link} from "react-router-dom";
import app from "./base.js";

const SignUp = ({ history}) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const {email, password} = event.target.elements;
        try {
            await app
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return(
        <div className="log_page">
            <div className="header">
                <div className="d-flex flex-row justify-content-between align-items-center title_login">
                    <div className="d-flex flex-column title_sentence">
                        <h1 className="title"><b>fakebook</b></h1>
                        <p className="sentence">Avec Fakebook, arborez votre masque et rencontrez de parfaits inconnus.</p>
                    </div>
                    <div className="form-group log_form">
                        <form className="log_inp shadow rounded" onSubmit={handleSignUp}>
                            <div className="form-group">
                                <input className="form-control form-control-lg mail" type="email" name="email" placeholder="Adresse e-mail ou numéro de tél."/>
                            </div>
                            <div className="form-group">
                                <input className="form-control form-control-lg form-control-block psw" type="password" name="password" placeholder="Mot de passe"/>
                            </div>
                            <button className="btn btn-primary btn-lg btn-block connect_btn" type="submit"><b>S'inscrire</b></button>
                            <hr className="midline"/>
                            <Link to='/fakebook' className="sign_log_btn"><b>Se connecter</b></Link>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer">
                <p className="languages">
                    <Link to="/#">Français (France)</Link>
                    <Link to="/#">English (US)</Link>
                </p>
                <hr/>
                <p className="services">
                    <Link to="/signup">S'inscrire</Link>
                    <Link to="/fakebook">Connexion</Link>
                    <Link to="https://www.instagram.com/?hl=fr">Instagram</Link>
                    <Link to="/#">Messenger</Link>
                    <Link to="/#">Fakebook Lite</Link>
                    <Link to="/#">Confidentialité</Link>
                    <Link to="https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal">Pages</Link>
                    <Link to="/#">Cookies</Link>
                    <Link to="https://www.google.com/maps">Lieux</Link>
                    <Link to="/#">Aide</Link>
                    <Link to="/#">Emplois</Link>
                    <Link to="/#">À propos</Link>
                    <Link to="/#">Local</Link>
                    <Link to="https://github.com/vfracas">Github</Link>
                </p>
                <p className="copyrights">Fakebook © 2020</p>
            </div>
        </div>
    );
};

export default withRouter(SignUp);