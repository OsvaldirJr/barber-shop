import React, { useContext, useState } from "react";
import { View, Modal, Text, TouchableHighlight, Button, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ModalsContext } from "../../../contexts/modals";
import CustomButton from "../../../shared/components/custom-button";
import CustomTextInput from "../../../shared/components/custom-text-input";
import Checkbox from "expo-checkbox";

export default function RegisterModal() {
    const { modalVisibility, isModalVisible } = useContext<any>(ModalsContext);
    const [isFirstPage, setIsFirstPage] = useState(true);
    const [agreementCheckbox, setAgreementCheckbox] = useState(false);
    const [newsletterCheckbox, setNewsletterCheckbox] = useState(false);

    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={isModalVisible}
            onRequestClose={() => {
                setIsFirstPage(true);
                modalVisibility(false)
            }}
        >
            <View className='mt-52 items-center flex-1 bg-white90'>
                {/* Modal header start */}
                <View className='flex-row items-center justify-between px-10 py-8 w-full'>
                    {
                        isFirstPage
                            ? <View className='w-8'>{/*Gambiarra só pra distribuir o espaçamento do header em 3 partes iguais*/}</View>
                            : <TouchableHighlight
                                activeOpacity={0.6}
                                underlayColor="#FFFFFF"
                                onPress={() => { setIsFirstPage(true) }}
                            >
                                <View className='w-8'>
                                    <Feather name='chevron-left' size={30} />
                                </View>
                            </TouchableHighlight>
                    }
                    <Text className='font-medium text-lg'>Cadastro de usuário</Text>
                    <TouchableHighlight
                        activeOpacity={0.6}
                        underlayColor="#FFFFFF"
                        onPress={() => { setIsFirstPage(true); modalVisibility(false) }}
                    >
                        <View className='w-8'>
                            <Feather name='x' size={30} />
                        </View>
                    </TouchableHighlight>
                </View>
                {/* Modal header end */}
                <ScrollView fadingEdgeLength={30} contentContainerStyle={{ alignItems: 'center', paddingBottom: 40 }} className="w-full px-8">
                    <View className='w-full gap-y-2 mb-7'>
                        <Text className='mb-1'>Nome</Text>
                        <CustomTextInput
                            autoComplete='email'
                            onChangeText={(newValue: string) => {
                                console.log(newValue)
                            }}
                        />
                        <Text className='mb-1'>Sobrenome</Text>
                        <CustomTextInput
                            secureTextEntry
                            onChangeText={(newValue: string) => {
                                console.log(newValue)
                            }}
                        />
                        <Text className='mb-1'>Data de nascimento</Text>
                        <CustomTextInput
                            placeholder='DD/MM/AAAA'
                            secureTextEntry
                            onChangeText={(newValue: string) => {
                                console.log(newValue)
                            }}
                        />
                        <Text className='mb-1'>E-mail</Text>
                        <CustomTextInput
                            secureTextEntry
                            onChangeText={(newValue: string) => {
                                console.log(newValue)
                            }}
                        />
                        <Text className='mb-1'>Senha</Text>
                        <CustomTextInput
                            secureTextEntry
                            onChangeText={(newValue: string) => {
                                console.log(newValue)
                            }}
                        />
                        <Text className='mb-1'>Confirmar senha</Text>
                        <CustomTextInput
                            secureTextEntry
                            onChangeText={(newValue: string) => {
                                console.log(newValue)
                            }}
                        />
                        <View className='flex-row items-center gap-x-2 pt-4'>
                            <Checkbox
                                value={agreementCheckbox}
                                onValueChange={setAgreementCheckbox}
                                color={'#004F75'}
                                className='w-4 h-4'
                            />
                            <Text className='text-grayDark text-xs'>Li e concordo com os <Text className='text-accentBlue font-medium'>termos de uso</Text> e <Text className="text-accentBlue font-medium">política de privacidade</Text>.</Text>
                        </View>
                        <View className='flex-row items-center gap-x-2'>
                            <Checkbox
                                value={newsletterCheckbox}
                                onValueChange={setNewsletterCheckbox}
                                color={'#004F75'}
                                className='w-4 h-4'
                            />
                            <Text className='text-grayDark text-xs'>Desejo receber promoções e anúncios por e-mail.</Text>
                        </View>
                    </View>
                    <CustomButton variant='primary' onPress={() => { setIsFirstPage(false) }} >Continuar</CustomButton>
                </ScrollView>
            </View>
        </Modal>
    );
}