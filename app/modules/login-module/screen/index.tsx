import React, { useState, useContext } from 'react';
import { View, Text, Alert, TouchableHighlight } from 'react-native';
import CheckBox from 'expo-checkbox';
import { Feather } from '@expo/vector-icons';
import { Card } from '../../../shared/components/card';
import CustomButton from '../../../shared/components/custom-button';
import CustomTextInput from '../../../shared/components/custom-text-input';
import { AuthContext } from '../../../contexts/auth';
import RegisterModal from '../components/registerModal';
import { ModalsContext } from '../../../contexts/modals';


export default function LoginScreen({ }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [keepLoggedCheckbox, setKeepLoggedCheckbox] = useState(false);
    const { signIn } = useContext<any>(AuthContext);
    const { modalVisibility } = useContext<any>(ModalsContext)

    function loginHandler() {
        signIn(email, password)
    };

    function modalHandler() {
        modalVisibility(true)
    };

    return (
        <View className='flex-1 px-8 items-center justify-center bg-grayFaint'>
                <RegisterModal />
                <View className='items-center gap-1 mb-12'>
                    <Feather name='aperture' size={50} color='#004F75' />
                    <Text className='text-lg text-accentBlue'>Bem vindo</Text>
                </View>
                <Card>
                    <View className='w-full gap-y-4 mb-7'>
                        <Text className='mb-1'>E-Mail</Text>
                        <CustomTextInput
                            placeholder='Favor digitar e-mail brou'
                            autoComplete='email'
                            onChangeText={(newValue: string) => {
                                setEmail(newValue)
                            }}
                        />
                        <View className='w-full justify-between flex-row mb-1'>
                            <Text>Senha</Text>
                            <TouchableHighlight
                                activeOpacity={0.6}
                                underlayColor="#F0F0F0"
                                onPress={() => { console.log('Esqueci minha senha clicado') }}
                            >
                                <Text className='text-grayDark'>Esqueci minha senha</Text>
                            </TouchableHighlight>
                        </View>
                        <CustomTextInput
                            placeholder='Digite sua senha'
                            secureTextEntry
                            onChangeText={(newValue: string) => {
                                setPassword(newValue)
                            }}
                        />
                        <View className='flex-row items-center gap-x-2'>
                            <CheckBox
                                value={keepLoggedCheckbox}
                                onValueChange={setKeepLoggedCheckbox}
                                color={'#004F75'}
                                className='w-4 h-4'
                            />
                            <Text className='text-accentBlue'>Permanecer conectado</Text>
                        </View>
                    </View>
                    <CustomButton
                        onPress={() => {
                            if (email === '') {
                                Alert.alert('Erro de autenticação', 'Favor informar o E-mail')
                            } else if (password === '') {
                                Alert.alert('Erro de autenticação', 'Favor informar a senha')
                            } else {
                                loginHandler()
                            }
                        }}
                        variant='primary'
                    >
                        Entrar
                    </CustomButton>
                    <View className='items-center'>
                        <Text className='text-grayDark text-base my-4'>ou</Text>
                        <CustomButton variant='outlined' onPress={() => { }}>Implementar google login aqui</CustomButton>
                        <Text className='text-grayDark text-base mt-4'>Não tem uma conta?</Text>
                        <TouchableHighlight
                            activeOpacity={0.6}
                            underlayColor="#F0F0F0"
                            onPress={() => {modalHandler()}}
                        >
                            <Text className='text-accentBlue text-base'>Faça seu cadastro aqui!</Text>
                        </TouchableHighlight>
                    </View>
                </Card>
        </View >
    );
}