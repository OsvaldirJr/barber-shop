import { StyleSheet, View } from "react-native";
import { StyledComponent } from 'nativewind';

export function Card({ children }) {
    return (
        <StyledComponent
            component={View}
            style={styles.card}
            className='w-full p-4 rounded-xl justify-center items-center bg-white90'
        >
            {children}
        </StyledComponent>
    );
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOpacity: 0.6,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
        elevation: 8
    }
})