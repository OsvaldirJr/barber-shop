import React from 'react';
import { Card } from '../../../shared/components/card';
import { View, Text } from 'react-native';

export default function PaymentsScreen() {
    return (
        <>
            <View className='flex-1 px-6 justify-center items-center bg-grayFaint'>
                <Card>
                    <Text className='mb-4'>Payments Screen</Text>
                    <Text className='mb-4'>Histórico de pagamentos do usuário</Text>
                </Card>
            </View>
        </>
    );
};