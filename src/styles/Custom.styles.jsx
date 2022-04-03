import styled from 'styled-components';
import CustomText from '../components/CustomText';

// eslint-disable-next-line import/prefer-default-export
export const StyledCustomText = styled(CustomText)`
    font-size: 18px;
    color: ${(props) => props.color};
    :hover {
        color: #465c4a;
        cursor: pointer;
    }
`;
