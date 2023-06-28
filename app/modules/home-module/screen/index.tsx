import React, { useContext } from 'react';
import { Card } from '../../../shared/components/card';
import { View, Text } from 'react-native';
import CustomButton from '../../../shared/components/custom-button';
import { AuthContext } from '../../../contexts/auth';

export default function HomeScreen() {
    const { user, addCount, counterValue } = useContext<any>(AuthContext);

    function handlePress() {
        addCount(counterValue)
    };

    return (
        <>
            <View className='flex-1 px-6 justify-center items-center bg-grayFaint'>
                <Card>
                    <Text className='mb-4'>Home: </Text>
                    <Text>E-mail digitado:</Text>
                    <Text className='mb-4 font-bold'>{user.email}</Text>
                    <Text className='mb-4'>Número do contador: {counterValue}</Text>
                    <CustomButton onPress={() => { handlePress() }} variant='outlined'>
                        Add 1
                    </CustomButton>
                </Card>
            </View>
        </>
    );
};