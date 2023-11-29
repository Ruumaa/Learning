'use client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const SignUpForm = ({ isRegister, submit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="w-full mx-auto mt-10 flex justify-center">
      <div className="card w-1/2 shadow-xl  bg-slate-700">
        <div className="card-body">
          <div className="card-title justify-center text-4xl font-serif">
            {isRegister ? <span> Sign Up</span> : <span>Sign In</span>}
          </div>
          <form onSubmit={handleSubmit(submit)}>
            <div className="form-control w-full mx-auto mt-5">
              {isRegister ? (
                <>
                  <label className="label font-medium">Username</label>
                  <input
                    className="input input-bordered "
                    placeholder="John"
                    {...register('username', { required: true })}
                  />
                  {errors.username && (
                    <p className="error-form ">Username is required</p>
                  )}
                </>
              ) : null}
              <label className="label font-medium">Email</label>
              <input
                className="input input-bordered "
                type="email"
                placeholder="john@mail.com"
                {...register('email', { required: true })}
              />
              {errors.email && <p className="error-form ">Email is required</p>}
              <label className="label font-medium">Password</label>
              <input
                className="input input-bordered "
                type="password"
                placeholder="*****"
                {...register('password', { required: true })}
              />
              {errors.password && (
                <p className="error-form">Password is required</p>
              )}
            </div>
            <button
              type="submit"
              className="btn w-full btn-neutral btn-outline mt-7"
            >
              {isRegister ? <span>Register</span> : <span>Log in</span>}
            </button>
            {isRegister ? (
              <p className="text-center mt-3 mb-1">
                Already have an account{' '}
                <Link
                  href="/auth/sign-in"
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  Sign in
                </Link>
              </p>
            ) : (
              <p className="text-center mt-3 mb-1">
                If you don&apos;t have an account, please&nbsp;
                <Link
                  href="/auth/sign-up"
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  Sign up
                </Link>
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
