// DETERMINE IF A STRING IS VALID PHONE NUMBER IN DASHED FORMAT

const isValidPhoneNumber = (phoneNumber: string): boolean => {
    const regex = /^\d{3}-?\d{3}-?\d{4}$/;
    return regex.test(phoneNumber);
}

console.log(isValidPhoneNumber('925-555-5555'));
