import React from 'react';
import { Card } from '../../components/card';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { increment } from '../../stores/ducks';
import { useAppSelector } from '../../stores/hooks/use-app-selector';

export default function HomeScreen({ navigation }) {
    const count = useAppSelector((state) => state.user.counterValue);
    const email = useAppSelector((state) => state.user.userEmail);
    const dispatch = useDispatch();

    function handlePress() {
        dispatch(increment())
    };

    return (
        <>
            <View className='flex-1 justify-center items-center bg-grayFaint'>
                <Card>
                    <Text className='mb-4'>Home</Text>
                    <Text>E-mail digitado:</Text>
                    <Text className='mb-4 font-bold'>{email}</Text>
                    <Text className='mb-4'>Número do contador: {count}</Text>
                    <Button title='Adicionar 1'
                        onPress={() => { handlePress() }}
                    />
                </Card>
            </View>
        </>
    );
};