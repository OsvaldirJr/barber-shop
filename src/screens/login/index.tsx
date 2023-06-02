import * as React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
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
                <View className='w-full gap-y-1 mb-7'>
                    <Text>E-Mail</Text>
                    <TextInput defaultValue='Inner shadow não ta funcionando socorro' className='w-full p-2 bg-grayFaint rounded-lg' autoComplete='email' />
                    <Text>Senha</Text>
                    <TextInput defaultValue='teste' className='w-full p-2 bg-grayFaint rounded-lg' secureTextEntry/>
                </View>
                <Button title='Entrar' onPress={() => {

                    }
                }/>
            </Card>
        </View>
    );
}