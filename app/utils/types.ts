import {DateTime} from 'luxon';

export interface loginType {
  email: string;
  password: string;
}

export interface registerType {
  username: string;
  email: string;
  password: string;
}

export interface transactionType {
  transactionData: FormData;
}

export interface updateUserType {
  userdata?: FormData;
}

export type RootStackParamList = {
  SplashScreen: undefined;
  AuthScreen: undefined;
  // Login: undefined;
  // SignUp: undefined;
  // CreatePin: undefined;
  Home: undefined;
  TransactionScreen: undefined;
  ProfileScreen: undefined;
  // ResetPassword: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
  CreatePin: undefined;
  ResetPassword: undefined;
};

export type TransactionStackParamList = {
  TransactionHistory: {id: number};
  SearchReceiver: undefined;
  Transfer: {id: number};
  PinConfirmation: {
    pin: string;
    data: FormData;
    date: DateTime;
  };
  TransactionInfo: {
    sender_id: number;
    receiver_id: number;
    amount: number;
    date: DateTime;
    notes: string;
    success: boolean;
  };
};

export type ProfileStackParamList = {
  Profile: undefined;
  PersonalInfo: {id: number; username: string; email: string; phone: string};
  ChangePassword: {id: number};
  ChangePin: {id: number; pin: string};
  AddPhoneNumber: {id: number};
  ManagePhoneNumber: {phoneNumber: string};
};
