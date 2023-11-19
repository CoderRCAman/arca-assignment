import {Pressable, ScrollView, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Card from '../ccomponents/Card';
import StyleSheet from 'react-native-media-query';
import axios from 'axios';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AddIcon from '../ccomponents/AddIcon';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {MMKVLoader, useMMKVStorage} from 'react-native-mmkv-storage';
type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type dataType = {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  parentId: null | number;
  backgroundColor: string;
  reportingManager: string | undefined;
  subordinates: string | undefined;
};
export const storage = new MMKVLoader().initialize();
const Home = ({navigation}: HomeProps) => {
  const [data, setData] = React.useState<dataType[]>([]);
  React.useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          'https://mocki.io/v1/3a4b56bd-ad05-4b12-a181-1eb9a4f5ac8d',
        );
        setData(res.data);
        storage.setString('data', JSON.stringify(res.data));
      } catch (error) {
        console.log(error);
      }
    }
    async function initialLoad() {
      let dataExist = await storage.getItem('');
      if (!dataExist) {
        fetchData();
        return;
      }
      let localData = storage.getString('data');
      setData(JSON.parse(localData || ''));
    }
    initialLoad();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 14,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {data.map(d => (
            <Pressable key={d.id} onPress={() => navigation.push('Info', d)}>
              <Card info={d} />
            </Pressable>
          ))}
        </View>
      </ScrollView>
      <AddIcon data={data} setData={setData} />
    </SafeAreaView>
  );
};

export default Home;

const {ids, styles} = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    backgroundColor: '#F3F4F6',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: hp(2),
  },
});
