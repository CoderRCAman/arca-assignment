import {View, Text, Pressable} from 'react-native';
import StyleSheet from 'react-native-media-query';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {dataType} from '../screens/Home';
import {getContrastingHex} from 'color-contrast-picker';
import {hexValue} from '../utility';
import {RootStackParamList} from '../App';

export default function Card({info}: {info: dataType}) {
  const textColor = getContrastingHex(
    hexValue(info.backgroundColor) as `#${string}`,
    4.5,
  ) as string;
  return (
    <View style={{...styles.card, backgroundColor: info.backgroundColor}}>
      <View style={{display: 'flex', gap: 14}}>
        <View
          style={{
            flex: 0,
            flexDirection: 'row',

            gap: 12,
          }}>
          <Icon name="id-card" color={textColor} size={19} />
          <Text
            style={{
              fontSize: wp(5),
              color: textColor,
              fontWeight: '600',
              marginTop: -4,
            }}>
            {info.id}
          </Text>
        </View>
        <View
          style={{
            flex: 0,
            flexDirection: 'row',

            gap: 12,
          }}>
          <Icon name="user" color={textColor} size={19} />
          <Text
            style={{
              fontSize: wp(5),
              color: textColor,
              fontWeight: '600',
              marginTop: -4,
              width: wp(60),
            }}>
            {info.name}
          </Text>
        </View>
        <View
          style={{
            flex: 0,
            flexDirection: 'row',

            gap: 12,
          }}>
          <Icon name="envelope" color={textColor} size={19} />
          <Text
            style={{
              fontSize: wp(5),
              color: textColor,
              fontWeight: '600',
              marginTop: -4,
              width: wp(60),
            }}>
            {info.email}
          </Text>
        </View>
        <View
          style={{
            flex: 0,
            flexDirection: 'row',

            gap: 12,
          }}>
          <Icon name="location-arrow" color={textColor} size={19} />
          <Text
            style={{
              fontSize: wp(4),
              color: textColor,
              fontWeight: '600',
              marginTop: -3,
              width: wp(60),
            }}>
            {info.address}
          </Text>
        </View>
        <View
          style={{
            flex: 0,
            flexDirection: 'row',

            gap: 12,
          }}>
          <Icon name="phone" color={textColor} size={19} />
          <Text
            style={{
              fontSize: wp(5),
              color: textColor,
              fontWeight: '600',
              marginTop: -5,
            }}>
            {info.phone}
          </Text>
        </View>
      </View>
    </View>
  );
}

const {ids, styles} = StyleSheet.create({
  card: {
    '@media (max-width: 768px)': {
      width: wp(90),
    },
    width: wp(30),
    height: hp(35),
    borderRadius: wp(5),
    elevation: 6, // Android box shadow
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
