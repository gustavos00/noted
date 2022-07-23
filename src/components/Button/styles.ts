import styled from 'styled-components';

interface IProps {
    isDark?: boolean;
}

export const Button = styled.button<IProps>`
    width: 50%;
    height: 40px;

    background-color: ${(props) => props.theme.colors.bg_button_color_dark};
    color:  ${(props) => props.theme.colors.font_color_white};

    border-radius: 5px;
    border: none;
`;
