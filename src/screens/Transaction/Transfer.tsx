import React from 'react';
import {View, Text, TextInput} from 'react-native';
import FastImage from 'react-native-fast-image';
import {NavigationScreenProp, NavigationRoute} from 'react-navigation';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import userIcon from '../../assets/img/user.png';
import {styles} from './transactionStyle';
import {DateTime} from 'luxon';
import {RootState} from '../../store';
import {connect, ConnectedProps} from 'react-redux';
import {transactionType} from '../../utils/types';

//connecting state and dispatch
const mapState = (state: RootState) => ({
  user: state.user,
});

const connector = connect(mapState, {});

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  navigation: NavigationScreenProp<any, any>;
  route: NavigationRoute;
};

type State = {
  value: string;
  isBlur: boolean;
  notes: string;
  confirmed: boolean;
  datetime?: DateTime;
};

class Transfer extends React.Component<Props, State> {
  state: State = {
    value: '',
    isBlur: true,
    notes: '',
    confirmed: false,
    datetime: DateTime.local(),
  };

  handleOnChange = (event: any) => {
    const rawValue = event.nativeEvent.text;
    this.setState({value: rawValue});
  };

  onConfirm = () => {
    if (!this.state.confirmed) {
      this.setState({confirmed: true});
    } else {
      const transactionData: transactionType = {
        sender_id: this.props.user.user.credentials.id,
        receiver_id: this.props.route.params?.id,
        transaction_name: 'Transfer',
        transaction_type: 'out',
        amount: Number(this.state.value),
        notes: this.state.notes,
      };
      this.props.navigation.navigate('PinConfirmation', {
        pin: this.props.user.user.credentials.pin,
        transactionData,
        date: this.state.datetime,
      });
    }
  };

  render() {
    const {confirmed, isBlur} = this.state;
    const {contacts, user: currUser} = this.props.user;
    const idx =
      contacts?.findIndex((contact) => {
        return contact.id === this.props.route.params?.id;
      }) || 0;
    const user = contacts[idx];
    const balanceLeft = currUser.details.balance - Number(this.state.value);
    return (
      <>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerSection}>
              <Icon
                onPress={() => {
                  this.props.navigation.goBack();
                }}
                name="arrow-left"
                color="white"
                size={26}
              />
              <Text style={styles.headerText}>
                {confirmed ? 'Confirmation' : 'Transfer'}
              </Text>
            </View>
            <View style={styles.headerCard}>
              <FastImage
                style={styles.cardImage}
                source={user.image ? {uri: user.image} : userIcon}
                {...{resizeMode: 'cover'}}
              />
              <View style={styles.headerCardText}>
                <Text style={styles.nameText}>{user.username}</Text>
                <Text style={styles.phoneNumberText}>
                  {user.phoneNumber ? user.phoneNumber : 'No Phone Number'}
                </Text>
              </View>
            </View>
          </View>
          {!confirmed ? (
            <>
              <View style={styles.amountContainer}>
                <Text style={styles.textInputStyle}>
                  {this.state.value === '' ? '' : 'Rp'}
                </Text>
                <TextInput
                  placeholder={'0.00'}
                  style={styles.textInputStyle}
                  keyboardType="numeric"
                  onChange={this.handleOnChange}
                  value={this.state.value}
                />
              </View>
              <Text style={styles.balanceText}>
                Rp{Number(currUser.details.balance).toLocaleString('id-ID')}{' '}
                Available
              </Text>
              <Input
                leftIcon={
                  <Icon
                    name="edit-2"
                    size={22}
                    color={isBlur ? 'rgba(169, 169, 169, 0.6)' : '#6379F4'}
                  />
                }
                placeholder="Add some notes"
                placeholderTextColor="rgba(169, 169, 169, 0.8)"
                inputContainerStyle={
                  this.state.isBlur ? styles.notesStyleBlur : styles.notesStyle
                }
                inputStyle={styles.notesText}
                onChangeText={(text) => {
                  this.setState({notes: text});
                  if (text === '') {
                    this.setState({isBlur: true});
                  } else {
                    this.setState({isBlur: false});
                  }
                }}
                onFocus={() => {
                  this.setState({isBlur: false});
                }}
                onBlur={() => {
                  this.setState({isBlur: true});
                }}
                value={this.state.notes}
              />
            </>
          ) : (
            <>
              <View style={styles.confirmationContainer}>
                <View style={styles.cell}>
                  <Text style={styles.cellTitleText}>Amount</Text>
                  <Text style={styles.cellChildText}>
                    Rp{Number(this.state.value).toLocaleString('id-ID')}
                  </Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.cellTitleText}>Balance Left</Text>
                  <Text style={styles.cellChildText}>
                    Rp{Number(balanceLeft).toLocaleString('id-ID')}
                  </Text>
                </View>
              </View>
              <View style={styles.confirmationContainer}>
                <View style={styles.cell}>
                  <Text style={styles.cellTitleText}>Date</Text>
                  <Text style={styles.cellChildText}>
                    {this.state.datetime?.toFormat('LLL dd, yyyy')}
                  </Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.cellTitleText}>Time</Text>
                  <Text style={styles.cellChildText}>
                    {this.state.datetime?.toFormat('HH.mm')}
                  </Text>
                </View>
              </View>
              <View style={styles.longCell}>
                <Text style={styles.cellTitleText}>Notes</Text>
                <Text style={styles.cellChildText}>{this.state.notes}</Text>
              </View>
            </>
          )}
          <Button
            buttonStyle={styles.submitButton}
            title="Continue"
            titleStyle={styles.buttonText}
            onPress={this.onConfirm}
          />
        </View>
      </>
    );
  }
}

export default connector(Transfer);
