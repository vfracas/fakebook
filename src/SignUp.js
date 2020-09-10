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
                    <Link href="/#">Français (France)</Link>
                    <Link href="/#">English (US)</Link>
                </p>
                <hr/>
                <p className="services">
                    <Link href="/signup">S'inscrire</Link>
                    <Link href="/fakebook">Connexion</Link>
                    <Link href="https://www.instagram.com/?hl=fr">Instagram</Link>
                    <Link href="/#">Messenger</Link>
                    <Link href="/#">Fakebook Lite</Link>
                    <Link href="/#">Confidentialité</Link>
                    <Link href="https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal">Pages</Link>
                    <Link href="/#">Cookies</Link>
                    <Link href="https://www.google.com/maps">Lieux</Link>
                    <Link href="/#">Aide</Link>
                    <Link href="/#">Emplois</Link>
                    <Link href="/#">À propos</Link>
                    <Link href="/#">Local</Link>
                    <Link href="https://github.com/vfracas">Github</Link>
                </p>
                <p className="copyrights">Fakebook © 2020</p>
            </div>
        </div>
    );
};

export default withRouter(SignUp);