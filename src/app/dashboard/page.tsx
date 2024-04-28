import { currentUser } from '@clerk/nextjs/server';

export default async function Page() {
  const user = await currentUser();



  // check if user is present or not
  // if user not present then create new user
  // if user present then show edit functionality



  if (!user) return <div>Not signed in</div>;

  return <div>Hello {user?.firstName}</div>;
}