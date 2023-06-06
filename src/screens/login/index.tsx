import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Card } from '../../components/card';
import { setEmail } from '../../stores/ducks';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../stores/hooks/use-app-selector';


export default function LoginScreen({ navigation }) {
    const [emailField, setEmailField] = useState('');
    const reduxedEmail= useAppSelector((state) => state.user.userEmail);
    const dispatch = useDispatch();

    function loginHandler() {
        dispatch(setEmail(emailField))
    };

    return (
        <View className='flex-1 w-full items-center justify-center bg-grayFaint px-6'>
            <View className='items-center gap-2 mb-12'>
                <Feather name='home' size={50} color='#000100' />
                <Text className='text-lg text-black'>Bem vindo</Text>
            </View>
            <Card className='w-full p-6'>
                <View className='w-full gap-y-1 mb-7'>
                    <Text>E-Mail</Text>
                    <TextInput
                        placeholder='Favor digitar e-mail brou'
                        className='w-full p-2 bg-grayFaint rounded-lg'
                        autoComplete='email'
                        onChangeText={(newValue: string) => {
                            setEmailField(newValue)
                        }}
                    />
                    <Text>Senha</Text>
                    <TextInput defaultValue='teste' className='w-full p-2 bg-grayFaint rounded-lg' secureTextEntry />
                </View>
                {/* ↓↓ fazer botão personalizado pra usar ↓↓ */}
                <Button title='Entrar' onPress={() => {
                    loginHandler()
                    navigation.navigate('Home')
                }} />
            </Card>
        </View>
    );
}