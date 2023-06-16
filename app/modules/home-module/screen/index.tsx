import React, { useEffect } from 'react';
import { Card } from '../../../shared/components/card';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { increment } from '../../../stores/ducks';
import { useAppSelector } from '../../../stores/hooks/use-app-selector';
import CustomButton from '../../../shared/components/custom-button';
import { Action } from 'redux';

export default function HomeScreen({ navigation }) {
    const count = useAppSelector((state) => state.user.counterValue);
    const email = useAppSelector((state) => state.user.userEmail);
    const dispatch = useDispatch();

    function handlePress() {
        dispatch(increment())
    };

    // ↓ gambiarra temporária pra prevenir de voltar a tela de login através do botão de voltar do celular ↓
    useEffect(
        () =>
            navigation.addListener('beforeRemove', (e) => {
                e.preventDefault();
            }),
        [navigation]
    );

    return (
        <>
            <View className='flex-1 px-6 justify-center items-center bg-grayFaint'>
                <Card>
                    <Text className='mb-4'>Home</Text>
                    <Text>E-mail digitado:</Text>
                    <Text className='mb-4 font-bold'>{email}</Text>
                    <Text className='mb-4'>Número do contador: {count}</Text>
                    <CustomButton onPress={() => { handlePress() }} variant='outlined'>
                        Add 1
                    </CustomButton>
                </Card>
            </View>
        </>
    );
};