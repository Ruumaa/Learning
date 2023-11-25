'use client';

import { useForm } from 'react-hook-form';
const FormCreate = ({ isEditing, initialValues, submit }) => {
  const modifiedValues = { ...initialValues };
  modifiedValues.active = modifiedValues.active?.toString();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: modifiedValues });

  return (
    <div className="w-full mx-auto mt-10 flex justify-center">
      <div className="card w-1/2 shadow-xl  bg-slate-700">
        <div className="card-body">
          <div className="card-title justify-center text-4xl">
            {isEditing ? <span>Update</span> : <span>Create</span>} New Ticket
          </div>
          <form onSubmit={handleSubmit(submit)}>
            <div className="form-control w-full mx-auto mt-5">
              <label className="label font-medium">Title</label>
              <input
                className="input input-bordered "
                {...register('title', { required: true })}
              />
              {errors.title && <p className="error-form ">Title is required</p>}
              <label className="label font-medium">Description</label>
              <textarea
                className="textarea textarea-bordered "
                {...register('description', { required: true })}
              />
              {errors.description && (
                <p className="error-form">Description is required</p>
              )}
              <label className="label font-medium">Category</label>
              <input
                className="input input-bordered "
                {...register('category', { required: true })}
              />
              {errors.category && (
                <p className="error-form">Category is required</p>
              )}
              <label className="label font-medium">Priority</label>
              <input
                type="number"
                className="input input-bordered "
                {...register('priority', {
                  required: true,
                  valueAsNumber: true,
                  min: 1,
                  max: 5,
                })}
              />
              {errors.priority && (
                <p className="error-form">Priority should be 1-5</p>
              )}
              <label className="label font-medium">Progress</label>
              <input
                type="number"
                className="input input-bordered "
                {...register('progress', {
                  required: true,
                  valueAsNumber: true,
                  min: 0,
                  max: 100,
                })}
              />
              {errors.progress && (
                <p className="error-form">Progress should be 0-100</p>
              )}
              <label className="label font-medium">Status</label>
              <select
                className="select select-bordered "
                {...register('status', { required: true })}
              >
                <option>Starting</option>
                <option>On Progress</option>
                <option>Finished</option>
              </select>
              {errors.status && (
                <p className="error-form">Status is required</p>
              )}
              <label className="label font-medium">Active</label>
              <select
                className="select select-bordered "
                {...register('active', { required: true })}
              >
                <option>true</option>
                <option>false</option>
              </select>
              {errors.active && (
                <p className="error-form">Active is required</p>
              )}
            </div>
            <button
              type="submit"
              className="btn w-full btn-neutral btn-outline mt-7"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormCreate;
