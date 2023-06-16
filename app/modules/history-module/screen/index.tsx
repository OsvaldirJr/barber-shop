import React from 'react';
import { Card } from '../../../shared/components/card';
import { View, Text } from 'react-native';

export default function HistoryScreen() {
    return (
        <>
            <View className='flex-1 px-6 justify-center items-center bg-grayFaint'>
                <Card>
                    <Text className='mb-4'>History Screen</Text>
                    <Text className='mb-4'>Histórico de Serviços do usuário</Text>
                </Card>
            </View>
        </>
    );
};