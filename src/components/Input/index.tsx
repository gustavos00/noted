import IInputTypes from '../../_common/types/IInputTypes';
import * as S from './styles';

interface IProps extends IInputTypes {
    width?: string;
    height?: string;
    placeholder: string;
    required?: boolean;
}

export function Input({ width, height, placeholder, type, required } : IProps) {
    return <S.Input width={width} height={height} placeholder={placeholder} type={type} required={required}></S.Input>;
}
