import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    return await {
      photo: (await uploadPhoto()) || null,
      user: (await createUser()) || null,
    };
  } catch (err) {
    return err.toString();
  }
}
