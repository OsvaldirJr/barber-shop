import * as React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Card } from '../../components/card';

export default function LoginScreen() {
    return (
        <View className='flex-1 w-full items-center justify-center bg-grayFaint px-6'>
            <View className='items-center gap-2 mb-12'>
                <Feather name='home' size={50} color='#000100' />
                <Text className='text-lg text-black'>Bem vindo</Text>
            </View>
            <Card className='w-full p-6'>
                <Text> olar</Text>
                <TextInput placeholder='useless'/>
            </Card>
        </View>
    );
}