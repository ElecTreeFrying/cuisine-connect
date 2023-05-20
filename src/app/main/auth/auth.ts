const titleCase = (data: string): string => {
  return data[0].toUpperCase() + data.slice(1).toLowerCase();
};

const auth = {
  sessionExpired: 'Session expired, please sign in again.',
  emailAlreadyInUse: 'The email address is already in use. Please try again.',
  specificEmailAlreadyInUse: (email: string) => `Email address (${email}) already exists. Please try again.`,
  emailAlreadyRegistered: (providerId: string) => `Email address already registered. Please sign in using your ${titleCase(providerId.slice(0, -4))} account.`,
  invalidEmail: 'Invalid email address. Please try again.',
  missingEmail: 'Please enter your email address.',
  weakPassword: 'Weak password. Please try again.',
  userDisabled: 'User is disabled. Please try again.',
  userNotFound: 'User not found. Please try again.',
  wrongPassword: 'Incorrect password. Please try again.',
  requireRecentLogin: 'Please try again...',
  tooManyRequests_verifyEmail: 'Too many attempts. Please try again later.',
  resetPassLinkSent: 'Please check your email to reset your password.',
  passwordNotMatch: 'Password does not match. Please try again.',
  sendingVerifyLink: 'Sending verification link...',
  verifyLinkSent: 'Please check your email to verify your email.',
};

const common = {
  pleaseTryAgain: 'Please try again.',
};

export function errorMessageByErrorCode(errorCode: string): string {
  switch (errorCode) {
    case 'auth/email-already-in-use': {
      return auth.emailAlreadyInUse;
    }
    case 'auth/invalid-email': {
      return auth.invalidEmail;
    }
    case 'auth/missing-email': {
      return auth.missingEmail;
    }
    case 'auth/operation-not-allowed': {
      return common.pleaseTryAgain;
    }
    case 'auth/admin-restricted-operation': {
      return common.pleaseTryAgain;
    }
    case 'auth/weak-password': {
      return auth.weakPassword;
    }
    case 'auth/user-disabled': {
      return auth.userDisabled;
    }
    case 'auth/user-not-found': {
      return auth.userNotFound;
    }
    case 'auth/wrong-password': {
      return auth.wrongPassword;
    }
    case 'auth/invalid-persistence-type': {
      return auth.wrongPassword;
    }
    case 'auth/unsupported-persistence-type': {
      return auth.wrongPassword;
    }
    case 'auth/requires-recent-login': {
      return auth.requireRecentLogin;
    }
    case 'auth/too-many-requests': {
      return auth.tooManyRequests_verifyEmail;
    }
    case 'auth/internal-error': {
      return common.pleaseTryAgain;
    }
    default: {
      return `Undefined`;
    }
  }
}
