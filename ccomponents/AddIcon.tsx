import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {useForm, Controller} from 'react-hook-form';
import {dataType, storage} from '../screens/Home';
let initialState: dataType = {
  id: 0,
  name: '',
  email: '',
  address: '',
  phone: '',
  parentId: 0,
  backgroundColor: '',
  reportingManager: '',
  subordinates: '',
};
const AddIcon = ({
  data,
  setData,
}: {
  data: dataType[];
  setData: React.Dispatch<React.SetStateAction<dataType[]>>;
}) => {
  const [show, setShow] = React.useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: initialState,
  });

  const onPressSend = async (formData: dataType) => {
    // Perform actions with the validated form data
    let idExist = data.find(d => d.id == formData.id);
    if (idExist) return Alert.alert('This Id already exist');
    if (formData.parentId == formData.id)
      return Alert.alert('Parent Id cannot be equal to user Id');
    setData([...data, formData]);
    const storageData = storage.getString('data');
    if (!storageData) return;
    let convert = JSON.parse(storageData);
    convert = [...convert, formData];
    storage.setString('data', JSON.stringify(convert));
    Alert.alert('Successfully saved');
    reset();
    setShow(false);
  };
  console.log(errors);
  return (
    <KeyboardAvoidingView>
      <Pressable
        onPress={() => {
          setShow(true);
          console.log('clicked');
        }}
        style={styles.addView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={show}
          onRequestClose={() => {
            setShow(!show);
          }}
          style={styles.modalView}>
          <ScrollView>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text
                  style={{
                    color: '#115e59',
                    fontWeight: '700',
                    marginBottom: -wp(2),
                  }}>
                  Add New User
                </Text>
                <Pressable
                  style={{position: 'absolute', right: wp(4), top: hp(1)}}>
                  <Icon
                    name="close"
                    color="red"
                    size={wp(9)}
                    onPress={() => setShow(!show)}
                  />
                </Pressable>
                <View style={styles.fieldContainer}>
                  <Text style={styles.label}>Id</Text>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({field: {onChange, value}}) => (
                      <TextInput
                        style={styles.input}
                        placeholder="for example:1"
                        placeholderTextColor={'#d8b4fe'}
                        keyboardType="number-pad"
                        value={value?.toString()}
                        onChangeText={onChange}
                      />
                    )}
                    name="id"
                  />
                  <Text style={styles.textError}>
                    {errors.id && '*Missing id'}
                  </Text>
                </View>
                <View style={styles.fieldContainer}>
                  <Text style={styles.label}>Name</Text>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({field: {onChange, value}}) => (
                      <TextInput
                        style={styles.input}
                        placeholder="for example:john doe"
                        placeholderTextColor={'#d8b4fe'}
                        value={value}
                        onChangeText={onChange}
                      />
                    )}
                    name="name"
                  />
                  <Text style={styles.textError}>
                    {errors.name && '*Missing name'}
                  </Text>
                </View>
                <View style={styles.fieldContainer}>
                  <Text style={styles.label}>Email</Text>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                      pattern: {
                        value: new RegExp(
                          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        ),
                        message: '*Invalid email',
                      },
                    }}
                    render={({field: {onChange, value}}) => (
                      <TextInput
                        style={styles.input}
                        placeholder="for example: john@gmail.com"
                        placeholderTextColor={'#d8b4fe'}
                        value={value}
                        onChangeText={onChange}
                        autoCapitalize="none"
                      />
                    )}
                    name="email"
                  />
                  <Text style={styles.textError}>
                    {errors.email?.type == 'required' && '*Missing email'}
                    {errors.email?.type == 'pattern' &&
                      '*Please enter a valid email!'}
                  </Text>
                </View>
                <View style={styles.fieldContainer}>
                  <Text style={styles.label}>Address</Text>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({field: {onChange, value}}) => (
                      <TextInput
                        style={styles.input}
                        placeholder="for example: 123 main street "
                        placeholderTextColor={'#d8b4fe'}
                        value={value}
                        onChangeText={onChange}
                      />
                    )}
                    name="address"
                  />
                  <Text style={styles.textError}>
                    {errors.address && '*Missing address'}
                  </Text>
                </View>
                <View style={styles.fieldContainer}>
                  <Text style={styles.label}>Phone</Text>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({field: {onChange, value}}) => (
                      <TextInput
                        style={styles.input}
                        placeholder="for example: 1234567809"
                        placeholderTextColor={'#d8b4fe'}
                        value={value}
                        onChangeText={onChange}
                        keyboardType="number-pad"
                      />
                    )}
                    name="phone"
                  />
                  <Text style={styles.textError}>
                    {errors.id && '*Missing phone'}
                  </Text>
                </View>
                <View style={styles.fieldContainer}>
                  <Text style={styles.label}>Parent Id</Text>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({field: {onChange, value}}) => (
                      <TextInput
                        style={styles.input}
                        placeholder="for example: 78"
                        placeholderTextColor={'#d8b4fe'}
                        keyboardType="number-pad"
                        value={value?.toString()}
                        onChangeText={onChange}
                      />
                    )}
                    name="parentId"
                  />
                  <Text style={styles.textError}>
                    {errors.id && '*Missing parent id'}
                  </Text>
                </View>
                <View style={styles.fieldContainer}>
                  <Text style={styles.label}>Manager's name</Text>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({field: {onChange, value}}) => (
                      <TextInput
                        style={styles.input}
                        placeholder="for example: Sam Ballen"
                        placeholderTextColor={'#d8b4fe'}
                        value={value}
                        onChangeText={onChange}
                      />
                    )}
                    name="reportingManager"
                  />
                  <Text style={styles.textError}>
                    {errors.reportingManager && '*Missing manager name'}
                  </Text>
                </View>
                <View style={styles.fieldContainer}>
                  <Text style={styles.label}>Subordinate</Text>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({field: {onChange, value}}) => (
                      <TextInput
                        style={styles.input}
                        placeholder="for example: Rodrigaz"
                        placeholderTextColor={'#d8b4fe'}
                        value={value}
                        onChangeText={onChange}
                      />
                    )}
                    name="subordinates"
                  />
                  <Text style={styles.textError}>
                    {errors.subordinates && '*Missing subordinate'}
                  </Text>
                </View>
                <View style={styles.fieldContainer}>
                  <Text style={styles.label}>Background Color</Text>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({field: {onChange, value}}) => (
                      <TextInput
                        style={styles.input}
                        placeholder="for example: white"
                        placeholderTextColor={'#d8b4fe'}
                        value={value}
                        onChangeText={onChange}
                        autoCapitalize="none"
                      />
                    )}
                    name="backgroundColor"
                  />
                  <Text style={styles.textError}>
                    {errors.backgroundColor && '*Missing background color'}
                  </Text>
                </View>
                <Pressable
                  onPress={handleSubmit(onPressSend)}
                  style={styles.saveButton}>
                  <Text style={{fontWeight: '700'}}>SAVE</Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </Modal>
        <Text>
          <Icon name="plus" color={'#fff'} size={22} />
        </Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default AddIcon;

const styles = StyleSheet.create({
  addView: {
    position: 'absolute',
    bottom: hp(3),
    right: wp(3),
    height: wp(16),
    width: wp(16),
    borderRadius: wp(8),
    backgroundColor: '#2563eb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#e5e5e5',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: wp(90),
    flex: 0,
    gap: hp(2),
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  fieldContainer: {
    width: '100%',
  },
  label: {
    color: '#8b5cf6',
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#c084fc',
    borderRadius: wp(2),
    color: '#c084fc',
  },
  saveButton: {
    color: 'white',
    backgroundColor: '#059669',
    paddingHorizontal: wp(10),
    paddingVertical: hp(1.2),
    borderRadius: wp(10),
  },
  textError: {
    color: 'red',
    fontSize: hp(1.8),
    fontWeight: '700',
  },
});
