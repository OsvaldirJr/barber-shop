import { View, TextInput, StyleSheet } from 'react-native';

export default function CustomTextInput(props: any) {
    return (
        <View className='rounded-lg overflow-hidden'>
            <TextInput
                value={props.value}
                placeholder={props.placeholder}
                className='w-full p-2 rounded-lg overflow-hidden'
                style={styles.inputBoxShadows}
                autoComplete={props.autoComplete}
                onChangeText={props.onChangeText}
                defaultValue={props.defaultValue}
                secureTextEntry={props.secureTextEntry}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    inputBoxShadows: {
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 4,
        shadowOffset: { width: 4, height: 4 },
        elevation: 50,
    }
})