import { View } from "react-native";
import { StyledComponent } from 'nativewind';

export function Card({ children, ...rest }) {
    return (
        <StyledComponent component={View} className='p-4 rounded-xl justify-center items-center bg-white90' {...rest}>
            {children}
        </StyledComponent>
    );
}