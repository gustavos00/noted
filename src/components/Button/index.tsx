import * as S from './styles';

interface IProps {
    text: string;
    isDark?: boolean;
    handleClick: (e: any) => void;
}

export function Button({ text, isDark, handleClick }: IProps) {
    return <S.Button isDark={isDark} onClick={handleClick}>{text}</S.Button>;
}
