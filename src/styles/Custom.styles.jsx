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

// ekhane HOC pattern follow kora hoyeche. karon CustomText already ekta functional component. ar ekhane amra oi CustomText ke style dite chacchi. ekhn amra jani j styled er moddhe sudhu html element gula ache, alada kono custom jinish . notation diye style korte parbo na. taile custom kono component ke style korbo kivabe? ei prob theke bachtei HOC pattern. styled ekta custom component jke tar peter moddhe nite pare ebong tokhn amara oi custom component ja iccha style dite pari jevabe upore deya hoyeche
