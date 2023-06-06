import { useSelector } from 'react-redux';
import { UserReducerData } from '../ducks';

export const useUserSelector = () => {
    const auth = useSelector((state: {user: UserReducerData}) => state.user)
    return auth;
}