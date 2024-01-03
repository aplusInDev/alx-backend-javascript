import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  const values = await Promise.all([uploadPhoto(), createUser()]);
  console.log(values[0].body, values[1].firstName, values[1].lastName);
}
