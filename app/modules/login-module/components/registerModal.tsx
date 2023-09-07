import React, { useContext, useState } from "react";
import { View, Modal, Text, TouchableHighlight, ScrollView } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { ModalsContext } from "../../../contexts/modals";
import CustomButton from "../../../shared/components/custom-button";
import CustomTextInput from "../../../shared/components/custom-text-input";
import Checkbox from "expo-checkbox";
import SelectDropdown from 'react-native-select-dropdown';

export default function RegisterModal() {
    const { modalVisibility, isModalVisible } = useContext<any>(ModalsContext);
    const [pageIndex, setPageIndex] = useState(1);
    //PÁGINA 1
    const [username, setUsername] = useState('');
    const [lastname, setLastname] = useState('');
    const [birthday, setBirthday] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [agreementCheckbox, setAgreementCheckbox] = useState(false);
    const [newsletterCheckbox, setNewsletterCheckbox] = useState(false);
    //PÁGINA 2
    //PÁGINA 3
    const [cardOwner, setCardOwner] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [cardGoodThru, setCardGoodThru] = useState('');
    const [cardConfirmationCode, setCardConfirmationCode] = useState('');

    const payMethods = ['Cartão', 'Débito', 'Paypal', 'Pix'];
    const [selectedMethod, setSelectedMethod] = useState('Cartão');

    const handleSubmit = () => {
        setUsername('');
        setLastname('');
        setBirthday('');
        setEmail('');
        setPassword('');
        setPasswordConfirmation('');
        setAgreementCheckbox(false);
        setNewsletterCheckbox(false);
        setCardOwner('');
        setCardNumber('');
        setCardName('');
        setCardGoodThru('');
        setCardConfirmationCode('');

        modalVisibility(false)
    }

    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={isModalVisible}
            onRequestClose={() => {
                setPageIndex(1);
                modalVisibility(false)
            }}
        >
            <View className='mt-52 items-center flex-1 bg-white90'>
                {/* Modal header start */}
                <View className='flex-row items-center justify-between px-10 py-4 w-full'>
                    {
                        pageIndex === 1
                            ? <View className='w-8'>{/*Gambiarra só pra distribuir o espaçamento do header em 3 partes iguais*/}</View>
                            : <TouchableHighlight
                                activeOpacity={0.6}
                                underlayColor="#FFFFFF"
                                onPress={() => { setPageIndex(pageIndex - 1) }}
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
                        onPress={() => { setPageIndex(1); modalVisibility(false) }}
                    >
                        <View className='w-8'>
                            <Feather name='x' size={30} />
                        </View>
                    </TouchableHighlight>
                </View>
                {/* Modal header end */}
                <ScrollView fadingEdgeLength={30} contentContainerStyle={{ paddingTop: 8, alignItems: 'center', paddingBottom: 40 }} className="w-full px-8">
                    {(() => {
                        switch (pageIndex) {
                            case 1: return <View className='w-full gap-y-2 mb-7'>
                                <Text className='mb-1'>Nome</Text>
                                <CustomTextInput
                                    value={username}
                                    onChangeText={(newValue: string) => {
                                        setUsername(newValue)
                                    }}
                                />
                                <Text className='mb-1'>Sobrenome</Text>
                                <CustomTextInput
                                    value={lastname}
                                    onChangeText={(newValue: string) => {
                                        setLastname(newValue)
                                    }}
                                />
                                <Text className='mb-1'>Data de nascimento</Text>
                                <CustomTextInput
                                    value={birthday}
                                    placeholder='DD/MM/AAAA'
                                    onChangeText={(newValue: string) => {
                                        setBirthday(newValue)
                                    }}
                                />
                                <Text className='mb-1'>E-mail</Text>
                                <CustomTextInput
                                    value={email}
                                    autoComplete='email'
                                    onChangeText={(newValue: string) => {
                                        setEmail(newValue)
                                    }}
                                />
                                <Text className='mb-1'>Senha</Text>
                                <CustomTextInput
                                    value={password}
                                    secureTextEntry
                                    onChangeText={(newValue: string) => {
                                        setPassword(newValue)
                                    }}
                                />
                                <Text className='mb-1'>Confirmar senha</Text>
                                <CustomTextInput
                                    value={passwordConfirmation}
                                    secureTextEntry
                                    onChangeText={(newValue: string) => {
                                        setPasswordConfirmation(newValue)
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
                            </View>;
                            case 2: return <View className='w-full gap-y-2 mb-7'>
                                <Text>
                                    Page 2
                                </Text>
                            </View>;
                            case 3: return <View className='w-full gap-y-2 mb-7'>
                                <Text className='mb-1 font-medium text-base'>Selecionar forma</Text>
                                <SelectDropdown
                                    data={payMethods}
                                    defaultValue={selectedMethod}
                                    onSelect={(selectedItem, index) => {
                                        setSelectedMethod(selectedItem)
                                        console.log(selectedItem, index);
                                    }}
                                    buttonTextAfterSelection={(selectedItem, index) => {
                                        // text represented after item is selected
                                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                                        return selectedItem
                                    }}
                                    rowTextForSelection={(item, index) => {
                                        // text represented for each item in dropdown
                                        // if data array is an array of objects then return item.property to represent item in dropdown
                                        return item
                                    }}
                                    buttonStyle={{ width: '60%', marginBottom: 16, paddingHorizontal: 20, backgroundColor: '#F0F0F0', borderWidth: 1, borderRadius: 8, borderColor: '#BEBEBE', elevation: 10 }}
                                    selectedRowStyle={{ backgroundColor: '#BEBEBE', elevation: 4 }}
                                    dropdownStyle={{
                                        marginTop: -52,
                                        borderTopWidth: 0,
                                        borderBottomWidth: 1,
                                        borderLeftWidth: 1,
                                        borderRightWidth: 1,
                                        borderColor: '#BEBEBE',
                                        borderRadius: 8
                                    }}
                                    renderDropdownIcon={() => { return <Ionicons name="caret-down-outline" size={16} style={{color: "#BEBEBE"}} /> }}
                                    dropdownIconPosition="right"
                                />
                                <Text className='mb-1'>Nome do titular</Text>
                                <CustomTextInput
                                    value={cardOwner}
                                    placeholder='José Sample'
                                    autoComplete='email'
                                    onChangeText={(newValue: string) => {
                                        setCardOwner(newValue)
                                    }}
                                />
                                <Text className='mb-1'>Número do cartão</Text>
                                <CustomTextInput
                                    value={cardNumber}
                                    placeholder='0000-0000-0000-0000'
                                    secureTextEntry
                                    onChangeText={(newValue: string) => {
                                        setCardNumber(newValue)
                                    }}
                                />
                                <Text className='mb-1'>Nome no cartão</Text>
                                <CustomTextInput
                                    value={cardName}
                                    placeholder='José Sample'
                                    secureTextEntry
                                    onChangeText={(newValue: string) => {
                                        setCardName(newValue)
                                    }}
                                />
                                <View className="flex-row justify-center">
                                    <View className="flex-1 pr-2">
                                        <Text className='mb-1'>Vencimento</Text>
                                        <CustomTextInput
                                            value={cardGoodThru}
                                            placeholder='DD/MM/AAAA'
                                            secureTextEntry
                                            onChangeText={(newValue: string) => {
                                                setCardGoodThru(newValue)
                                            }}
                                        />
                                    </View>
                                    <View className="flex-1">
                                        <Text className='mb-1'>Código de confirmação</Text>
                                        <CustomTextInput
                                            value={cardConfirmationCode}
                                            placeholder='000'
                                            secureTextEntry
                                            onChangeText={(newValue: string) => {
                                                setCardConfirmationCode(newValue)
                                            }}
                                        />
                                    </View>
                                </View>
                            </View>;
                            default: return <Text>Erro</Text>;
                        }
                    })()}

                    <CustomButton
                        variant='primary'
                        onPress={() => {
                            if (pageIndex < 3) {
                                setPageIndex(pageIndex + 1)
                            } else {
                                setPageIndex(1);
                                handleSubmit()
                            }
                        }}
                    >
                        {pageIndex === 3 ? 'Cadastrar' : 'Continuar'}
                    </CustomButton>
                </ScrollView>
            </View>
        </Modal>
    );
}