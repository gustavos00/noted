import * as S from './styles';
import Lottie from 'react-lottie';
import loginAnimation from '../../_common/animations/login-animation.json';

interface ILoginAndRegisterSlider {
    animation: string;
}

export function LoginAndRegisterSlider() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loginAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <S.Container>
            <Lottie options={defaultOptions} width="40vw" height="80vh"/>
        </S.Container>
    );
}
