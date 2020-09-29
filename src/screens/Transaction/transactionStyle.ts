import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    // flexDirection: 'column',
    flex: 1,
    height,
    backgroundColor: '#FAFCFF',
  },
  headerSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  header: {
    // flex: 1,
    width,
    height: 220,
    backgroundColor: '#6379F4',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 42,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 22,
    paddingRight: 22,
    paddingTop: 42,
  },
  headerPinText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#4D4B57',
    marginLeft: 26,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    marginLeft: 26,
  },
  headerCard: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    width: 343,
    height: 96,
    marginTop: 40,
    alignSelf: 'center',
    borderRadius: 10,
  },
  cardImage: {
    height: 56,
    width: 56,
    alignSelf: 'center',
    marginLeft: 16,
    borderRadius: 10,
  },
  headerCardText: {
    display: 'flex',
    flexDirection: 'column',
    // alignSelf: 'center',
    justifyContent: 'space-evenly',
    marginLeft: 15,
  },
  nameText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4D4B57',
  },
  phoneNumberText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#7A7886',
  },
  amountContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 25,
    alignSelf: 'center',
    width,
    justifyContent: 'center',
  },
  textInputStyle: {
    fontWeight: '700',
    fontSize: 42,
    color: '#6379F4',
    alignSelf: 'center',
    // backgroundColor: 'blue',
    // padding: 0,
  },
  balanceText: {
    marginTop: 32,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7C7895',
    alignSelf: 'center',
  },
  notesStyle: {
    marginTop: 35,
    borderBottomColor: '#6379F4',
    alignSelf: 'flex-end',
  },
  notesText: {
    fontSize: 16,
    color: '#3A3D42',
    fontWeight: '600',
  },
  notesStyleBlur: {
    marginTop: 35,
    borderBottomColor: 'rgba(169, 169, 169, 0.6)',
    alignSelf: 'flex-end',
  },
  submitButton: {
    width: 343,
    height: 57,
    backgroundColor: '#6379F4',
    borderRadius: 12,
    marginTop: 105,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
  },
  confirmationContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  cell: {
    width: 162,
    height: 87,
    backgroundColor: 'white',
    elevation: 3,
    borderRadius: 10,
    marginTop: 30,
    padding: 15,
    justifyContent: 'space-between',
  },
  cellTitleText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#7A7886',
  },
  cellChildText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#514F5B',
  },
  longCell: {
    width: 343,
    minHeight: 87,
    backgroundColor: 'white',
    elevation: 3,
    borderRadius: 10,
    marginTop: 30,
    alignSelf: 'center',
    padding: 15,
    justifyContent: 'space-between',
  },
  pinContainerStyle: {
    alignSelf: 'center',
  },
  pinCell: {
    width: 47,
    height: 58,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(169, 169, 169, 0.6)',
  },
  pinCellFocused: {
    width: 47,
    height: 58,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#6379F4',
  },
  pinText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#3A3D42',
  },
  pinTextFocused: {
    fontSize: 24,
    fontWeight: '700',
    color: '#3A3D42',
    borderBottomWidth: 1,
    borderColor: 'rgba(169, 169, 169, 0.4)',
  },
  pinErrorMsg: {
    fontSize: 16,
    marginTop: 20,
    color: '#FF5B37',
    alignSelf: 'center',
  },
  transferButton: {
    height: 57,
    borderRadius: 12,
    backgroundColor: '#6379F4',
    marginTop: 392,
    marginBottom: 64,
  },
  formContainer: {
    height: 0.8 * height,
    width,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 59,
    marginTop: 38,
  },
  subTitleText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(58, 61, 66, 0.6)',
    textAlign: 'center',
    marginBottom: 50,
    marginLeft: 20,
    marginRight: 20,
  },
  transferDetailsTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    alignSelf: 'center',
  },
  transferDetailHeader: {
    width,
    height: 97,
    backgroundColor: '#6379F4',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 42,
  },
  checklistIcon: {
    width: 70,
    height: 70,
    alignSelf: 'center',
    marginTop: 40,
  },
});
