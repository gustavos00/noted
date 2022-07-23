import * as S from './styles';
import { LoginAndRegisterSlider } from '../../components/LoginAndRegisterSlider';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Login() {
    const handleSignIn = (e: any) => {
        e.preventDefault();
        console.log(e);
    };

    return (
        <S.LoginContainer>
            <LoginAndRegisterSlider />
            <S.LoginFormWrapper>
                <S.LoginFormContainer>
                    <S.HeaderContainer>
                        <h1>Hello Again!</h1>
                        <p>
                            This is just a small text about the most perfet application saying
                            something...
                        </p>
                    </S.HeaderContainer>
                    <Input placeholder={'Email'} type={'email'} />
                    <Input placeholder={'Password'} type={'password'} />
                    
                    <a href="">Forgot password</a>

                    <Button text={'Sign in'} handleClick={handleSignIn} />
                    <p>
                        New user?<a href="">Sign up!</a>
                    </p>
                </S.LoginFormContainer>
            </S.LoginFormWrapper>
        </S.LoginContainer>
    );
}
