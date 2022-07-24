import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
`;

export const LoginFormWrapper = styled.div`
    width: 50vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoginFormContainer = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const HeaderContainer = styled.div`
    width: 70%;
    min-width: 400px;
    margin-bottom: 70px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    color: ${(props) => props.theme.colors.font_color_dark};
    text-align: center;

    h1 {
        font-size: ${(props) => props.theme.fontsSizes.large};
    }
`;
