export const getSignature = () => {
  const sigR8x = "13692340849919074629431384397504503745238970557428973719013760553241945274451";
  const sigR8y = "18066895302190271072509218697462294016350129302467595054878773027470753683267";
  const sigS = "238898180964301975640138172772451490757586081215817420470161945050687067203";
  const signature = `${sigR8x},${sigR8y},${sigS}`;
  return signature;
};