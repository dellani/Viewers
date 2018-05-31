import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

const accountData = { 
    email: 'default@ohif.org',
    password: '12345678aA*',
    profile: {
        fullName: 'Default User'
    }
};

export const createDefaultUser = () => {
    const user = Meteor.users.findOne({
        emails: {
            $elemMatch: {
                address: accountData.email
            }
        }
    });

    if (!user) {
        Accounts.createUser(accountData);
    }
};

export const signInDefaultUser = () => {
    Meteor.loginWithPassword(accountData.email, accountData.password);
};

export const checkDefaultUserSignIn = () => {
    return !Meteor.userId() && !Meteor.loggingIn();
}
