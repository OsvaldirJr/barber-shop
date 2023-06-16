import { useState, useEffect } from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';


export default function CustomButton(props: any) {
    const [btnVariant, setBtnVariant] = useState('cancel');

    useEffect(() => {
        if (props.variant) {
            setBtnVariant(props.variant)
        } else {
            setBtnVariant('cancel')
        }
    }, [props.variant]);

    const btnRender = {
        'outlined': () => {
            return (
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#D3E2ED"
                    onPress={props.onPress}
                    style={styles.btnShadow}
                    className='bg-white90 items-center justify-center px-4 py-2 rounded-full border border-accentBlue'
                >
                    <Text className='font-normal text-accentBlue text-base'>
                        {props.children}
                    </Text>
                </TouchableHighlight>
            )
        }, 'primary': () => {
            return (
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#82B0C2"
                    onPress={props.onPress}
                    style={styles.btnShadow}
                    className='bg-accentBlue items-center justify-center px-4 py-2 rounded-lg'
                >
                    <Text className='font-normal text-white90 text-base'>
                        {props.children}
                    </Text>
                </TouchableHighlight>
            )
        }, 'cancel': () => {
            return (
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#FF9A90"
                    onPress={props.onPress}
                    style={styles.btnShadow}
                    className='bg-white90 items-center justify-center px-4 py-2 rounded-lg border border-accentRed'
                >
                    <Text className='font-normal text-accentRed text-base'>
                        {props.children}
                    </Text>
                </TouchableHighlight>
            )
        }
    }

    return (
        <>
            {btnRender[btnVariant]()}
        </>
    );
}

const styles = StyleSheet.create({
    btnShadow: {
        shadowColor: 'black',
        shadowOpacity: 0.6,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
        elevation: 10
    }
})