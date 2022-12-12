import * as bcrypt from 'bcrypt';

//비밀번호 bycypt알고리즘 적용
export const hashPassword = async (passowrd: string): Promise<string> => {
  const hashCount = 10;

  return await bcrypt.hash(passowrd, hashCount);
};

//비밀번호 검증
export const isHashValid = async (
  password: string,
  hashPassword: string,
): Promise<boolean> => {
  return await bcrypt.compare(password, hashPassword);
};
