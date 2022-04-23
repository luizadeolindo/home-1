import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { FormTitle } from "../../components/FormTitle";
import  arrowBack  from "../../assets/icons/elements/arrow-back.svg";
import { HeaderForm } from "../../components/HeaderForm";
import  iconOffHidePassword  from '../../assets/icons/elements/senha-exibir.svg';
import  iconOnHidePassword  from '../../assets/icons/elements/senha-esconder.svg';
import { useState } from "react";
import './CadastroPage.css';
import apiClient from "../../services/api-client";

export const CadastroPage = () => {

    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [codigoAcesso, setCodigoAcesso] = useState('');

    const [contaCriada, setContaCriada] = useState(false);

    const navigate = useNavigate();
    
    const hidePassword = () => {
        setShowPassword(!showPassword);
    }

    const [showPassword, setShowPassword] = useState(false);

    const registerNewUser = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        try{
            const url = `/auth/cadastrar`;
            const response = await apiClient.post(url, { nome, email, senha, codigoAcesso });
            if (response.status === 201){
                console.log('conta criada com sucesso');
                setContaCriada(true);
                navigate('/login');
            }
        }catch(error: any) {
            console.log(error);
        }
    }

    return(
        <Container>
            <HeaderForm />
                <form className="containerCadastro" onSubmit={registerNewUser}>
                    <div className="cadastroHeader">
                        <FormTitle title="Cadastro" />
                        <p>Desenvolva e amplie seu potencia na tecnologia.</p>
                    </div>
                    <div className="cadastroInputField">
                        <div>
                            <label>
                            Nome
                            <input type="text" required onChange={(e) => setNome(e.target.value)} />
                            </label>
                        </div>
                        <div>
                            <label>
                            E-mail
                            <input type="email" required onChange={(e) => setEmail(e.target.value)} />
                            </label>
                        </div>
                        <div>
                            <label>
                            Senha
                            <div className="iconHidePassword">
                            <input type={showPassword ? "text" : "password"} required onChange={(e) => setSenha(e.target.value)} />
                            <button type="button" onClick={hidePassword}><img src={showPassword ? iconOffHidePassword : iconOnHidePassword} /></button>
                            </div>
                            </label>
                        </div>
                        <div>
                            <label>
                            Código de acesso (ID da turma)
                            <input type="text" required onChange={(e) => setCodigoAcesso(e.target.value)}/>
                            </label>
                        </div>
                    </div>
                    <div className="cadastroFooter">
                        <p>Ao se registrar, você aceita nossos <span>termos de uso </span> 
                            e a nossa <span>política de privacidade.</span>
                        </p>
                        <Button type="submit">Cadastrar</Button>
                        <Link to="/login"><img src={arrowBack}/> Voltar para login</Link>
                    </div>
                </form>
        </Container>
    )
}