'use strict';
const length = 12;
const charset =
  'abcdefghijklmnopqrstuvwxyz' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + '0123456789';

function passwordGenerator() {
  let password = '';
  for (let i = 0; i < length; i++) {
    password += charset[Math.floor(Math.random() * charset.length)];
  }
  const includeAllTypes = 
    /[a-z]/.test(password) && /[A-Z]/.test(password) && /[0-9]/.test(password);
  return includeAllTypes ? password : passwordGenerator();
}

console.log(passwordGenerator());
/**
 * ユーザ名: パスワード
 * admin: OmNB9C3SbGXw
 * guest1: FAdMGuBoTQv3
 * guest2: l9gjChNn9dfe
 */