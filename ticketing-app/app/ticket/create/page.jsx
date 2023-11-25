'use client';
import FormCreate from '@/app/{components}/FormCreate';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const Create = () => {
  const router = useRouter();
  const handleSubmit = async (values) => {
    const isActive = values.active === 'true' ? true : false;
    const response = await fetch('/api/ticket/create', {
      method: 'POST',
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
    });
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
      <div>
        <FormCreate isEditing={false} submit={handleSubmit} />
      </div>
    </div>
  );
};

export default Create;
