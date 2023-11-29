'use client';
import { useSession } from 'next-auth/react';

const User = () => {
  const { data: session } = useSession();

  return <pre>{JSON.stringify(session)}</pre>;
};

export default User;
// kurang session client server page.jsx, nav, provider, layout,user (modified)
