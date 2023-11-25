'use client';
import FormCreate from '@/app/{components}/FormCreate';
import { useRouter } from 'next/navigation';
import { NextResponse } from 'next/server';
import { toast } from 'react-toastify';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((r) => r.json());

const Ticket = ({ params }) => {
  const router = useRouter();
  const { data, error, isLoading } = useSWR(
    `http://localhost:3000/api/ticket/${params.id}`,
    fetcher
  );
  if (error) {
    return NextResponse.json(
      { message: 'Failed fetch GET data' },
      { status: 500 }
    );
  }
  if (isLoading) {
    return (
      <div className="flex">
        <span className="loading loading-dots loading-lg mx-auto items-center h-screen"></span>
      </div>
    );
  }

  const handleEdit = async (values) => {
    const isActive = values.active === 'true' ? true : false;
    const response = await fetch(
      `http://localhost:3000/api/ticket/${params.id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: values.title,
          description: values.description,
          category: values.category,
          priority: values.priority,
          progress: values.progress,
          status: values.status,
          active: isActive,
        }),
      }
    );
    const result = await response?.json();
    if (response.ok) {
      toast.success(`${result.data.message}`);
      router.push('/');
      router.refresh();
    } else {
      toast.error(`${result.error.message}`);
    }
  };
  return (
    <div>
      <FormCreate
        isEditing={true}
        initialValues={data.data}
        submit={handleEdit}
      />
    </div>
  );
};

export default Ticket;
