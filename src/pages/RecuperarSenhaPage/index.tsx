import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { FormTitle } from "../../components/FormTitle";
import { HeaderForm } from "../../components/HeaderForm";
import  iconOffHidePassword  from '../../assets/icons/elements/senha-exibir.svg';
import  iconOnHidePassword  from '../../assets/icons/elements/senha-esconder.svg';
import './RecuperarSenhaPage.css';
import { useState } from "react";

export const RecuperarSenhaPage = () => {

    const hidePassword = () => {
        setShowPassword(!showPassword);
    }

    const hideNewPassword = () => {
        setShowConfirmedPassword(!showConfirmedPassword);
    }

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmedPassword, setShowConfirmedPassword] = useState(false)

    return (
        <Container>
            <HeaderForm />
            <div className="containerFormForgotPassword">
                <form className="containerForgotPassword">
                    <div className="forgotPasswordHeader">
                        <FormTitle title="Esqueci a senha" />
                        <p>Tranquilo, digite seu e-mail e enviaremos um código para a recuperação de senha.</p>
                    </div>
                    <div className="forgotPasswordInputField">
                    <div>
                        <label>
                            E-mail
                            <input type="email" />
                        </label>
                    </div>
                    <div className="forgotPasswordFooter">
                        <Button type="submit">Solicitar código</Button>
                    </div>
                    </div>
                </form>

                <form className="containerIhaveCode">
                    <div className="iHaveCodeHeader">
                        <FormTitle title="Já possuo o código" />
                        <p>Maravilha! Insira o código de recuperação que enviamos por e-mail
                            e crie sua nova senha.
                        </p>
                    </div>
                    <div className="iHaveCodeInputField">
                        <div>
                            <label>
                                Código
                                <input type="text" />
                            </label>
                        </div>
                        <div className="iconHidePassword2">
                            <label>
                                Senha
                                <input type={showPassword? 'text' : 'password'} />
                                <button type="button" onClick={hidePassword}><img src={showPassword ? iconOffHidePassword : iconOnHidePassword} /></button>
                            </label>
                        </div>
                        <div className="iconHidePassword2">
                            <label>
                                Nova senha
                                <input type={showConfirmedPassword? 'text' : 'password'} />
                                <button type="button" onClick={hideNewPassword}><img src={showConfirmedPassword ? iconOffHidePassword : iconOnHidePassword} /></button>
                            </label>
                        </div>
                    </div>
                    <div className="ihaveCodeFooter">
                        <Button type="submit">Redefinir senha</Button>
                    </div>
                </form>
            </div>
            <p className="linkToLogin">Lembrou a senha? <Link to="/login">Entrar</Link></p>
        </Container>
    )
}