'use client';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { BASE_URL } from '@/lib/BASE_URL';
import AuthForm from './AuthForm';

const FormSignUp = ({}) => {
  const router = useRouter();
  const handleRegister = async (values) => {
    const response = await fetch(`${BASE_URL}/api/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: values.username,
        email: values.email,
        password: values.password,
      }),
    });

    const result = await response.json();
    if (response.ok) {
      toast.success(`${result.message}`);
      router.push('/auth/sign-in');
      router.refresh();
    } else {
      toast.error(`${result.message}`);
    }
  };

  return (
    <>
      <AuthForm isRegister={true} submit={handleRegister} />
    </>
  );
};

export default FormSignUp;
