import React from 'react';
import { Card } from '../../../shared/components/card';
import { View, Text } from 'react-native';

export default function ProfileScreen() {
    return (
        <>
            <View className='flex-1 px-6 justify-center items-center bg-grayFaint'>
                <Card>
                    <Text className='mb-4'>Profile Screen</Text>
                    <Text className='mb-4'>Várias informações daora sobre o user</Text>
                </Card>
            </View>
        </>
    );
};