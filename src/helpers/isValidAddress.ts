export async function isValid(address: string): Promise<boolean> {
  const ethereumCode = '0x';
  const networkCode = address.slice(0, 2);
  
  if (networkCode.includes(ethereumCode)) {
    return true;
  }

  return false;
}
