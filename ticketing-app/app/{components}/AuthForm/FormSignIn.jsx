'use client';
import { useRouter } from 'next/navigation';
import AuthForm from './AuthForm';
import { signIn } from 'next-auth/react';
import { toast } from 'react-toastify';

const FormSignIn = () => {
  const router = useRouter();
  const handleLogin = async (values) => {
    const signInData = await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (signInData?.error) {
      // console.log(signInData.error);
      toast.error('Invalid email or password');
    } else {
      toast.success('Login success');
      router.push('/');
    }
  };
  return (
    <div>
      <AuthForm isRegister={false} submit={handleLogin} />
    </div>
  );
};

export default FormSignIn;
