import styled from 'styled-components';

interface IInputProps {
    width?: string;
    height?: string;
}


export const Input = styled.input<IInputProps>`
    width: ${(props) => props.width ? (props) => props.width : '70%'};
    min-width: ${(props) => props.width ? 'unset' : '400px'}; //If exist a dynamic width, the min-width should be 0;
    height: ${(props) => props.height ? (props) => props.height : '50px'};
    
    padding-left: 15px;

    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.colors.bg_button_color_gray}
`;
