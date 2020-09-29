import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Button} from 'react-native-elements';
import {styles} from './transactionStyle';
import {NavigationScreenProp, NavigationRoute} from 'react-navigation';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import checkIcon from '../../assets/img/check.png';

const userSelector = (state: RootState) => state.user.user;

type Props = {
  navigation: NavigationScreenProp<any, any>;
  route: NavigationRoute;
};

const TransferInformation = (props: Props) => {
  const user = useSelector(userSelector);
  const {amount, date, notes} = props.route.params;
  return (
    <>
      <View style={styles.container}>
        <View style={styles.transferDetailHeader}>
          <Text style={styles.transferDetailsTitle}>Transfer Details</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FastImage
            source={checkIcon}
            style={styles.checklistIcon}
            {...{resizeMode: 'cover'}}
          />
          <Text
            style={[
              styles.transferDetailsTitle,
              {color: 'black', marginTop: 30},
            ]}>
            Transfer Success
          </Text>

          <View style={styles.confirmationContainer}>
            <View style={styles.cell}>
              <Text style={styles.cellTitleText}>Amount</Text>
              <Text style={styles.cellChildText}>
                Rp
                {Number(amount).toLocaleString('id-ID')}
              </Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellTitleText}>Balance Left</Text>
              <Text style={styles.cellChildText}>
                Rp
                {user.details.balance.toLocaleString('id-ID')}
              </Text>
            </View>
          </View>
          <View style={styles.confirmationContainer}>
            <View style={styles.cell}>
              <Text style={styles.cellTitleText}>Date</Text>
              <Text style={styles.cellChildText}>
                {date.toFormat('LLL dd, yyyy')}
              </Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellTitleText}>Time</Text>
              <Text style={styles.cellChildText}>{date.toFormat('HH.mm')}</Text>
            </View>
          </View>
          <View style={styles.longCell}>
            <Text style={styles.cellTitleText}>Notes</Text>
            <Text style={styles.cellChildText}>{notes}</Text>
          </View>
          <Button
            onPress={() => {
              props.navigation.navigate('Home');
            }}
            buttonStyle={[
              styles.transferButton,
              {marginLeft: 16, marginRight: 16, marginTop: 66},
            ]}
            title="Back to Home"
          />
        </ScrollView>
      </View>
    </>
  );
};

export default TransferInformation;
