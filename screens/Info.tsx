import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {getContrastingHex} from 'color-contrast-picker';
import {hexValue} from '../utility';
import {dataType} from './Home';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
type InfoProps = NativeStackScreenProps<RootStackParamList, 'Info'>;

export default function Info({route}: InfoProps) {
  const data: dataType = route.params;
  const textColor = getContrastingHex(
    hexValue(data.backgroundColor) as `#${string}`,
    4.5,
  ) as string;

  return (
    <View style={{...styles.container, backgroundColor: data.backgroundColor}}>
      <View
        style={{
          display: 'flex',
          gap: 14,
          borderWidth: 1,
          padding: wp(4),
          borderColor: textColor,
          borderRadius: wp(4),
        }}>
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
            {data.id}
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
              maxWidth: wp(70),
            }}>
            {data.name}
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
              maxWidth: wp(70),
            }}>
            {data.email}
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
              maxWidth: wp(70),
            }}>
            {data.address}
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
            {data.phone}
          </Text>
        </View>

        <View
          style={{
            flex: 0,
            flexDirection: 'row',

            gap: 12,
          }}>
          <Text
            style={{
              fontSize: wp(4),
              color: textColor,
              fontWeight: '600',
              maxWidth: wp(70),
            }}>
            Parent ID :
          </Text>
          <Text
            style={{
              fontSize: wp(5),
              color: textColor,
              fontWeight: '600',
              marginTop: -5,
            }}>
            {data.parentId ? data.parentId : 'NA'}
          </Text>
        </View>

        <View
          style={{
            flex: 0,
            flexDirection: 'row',

            gap: 12,
          }}>
          <Text
            style={{
              fontSize: wp(4),
              color: textColor,
              fontWeight: '600',
              maxWidth: wp(70),
            }}>
            Reporting Manager :
          </Text>
          <Text
            style={{
              fontSize: wp(5),
              color: textColor,
              fontWeight: '600',
              marginTop: -5,
            }}>
            {data.reportingManager ? data.reportingManager : 'NA'}
          </Text>
        </View>
        <View
          style={{
            flex: 0,
            flexDirection: 'row',

            gap: 12,
          }}>
          <Text
            style={{
              fontSize: wp(4),
              color: textColor,
              fontWeight: '600',
              maxWidth: wp(70),
            }}>
            Subordinate :
          </Text>
          <Text
            style={{
              fontSize: wp(5),
              color: textColor,
              fontWeight: '600',
              marginTop: -5,
            }}>
            {data.subordinates ? data.subordinates : 'NA'}
          </Text>
        </View>
        <View
          style={{
            flex: 0,
            flexDirection: 'row',

            gap: 12,
          }}>
          <Text
            style={{
              fontSize: wp(4),
              color: textColor,
              fontWeight: '600',
              maxWidth: wp(70),
            }}>
            Background Color :
          </Text>
          <Text
            style={{
              fontSize: wp(5),
              color: textColor,
              fontWeight: '600',
              marginTop: -5,
            }}>
            {data.backgroundColor ? data.backgroundColor : 'NA'}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
