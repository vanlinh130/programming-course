"use client"

import React from 'react'
import { useCourseNumberDetailQuery } from '@/queries/useCourses';

type Props = {
  params: Promise<{ course_number: string }>,
};

const Page = (props: Props) => {
  const params = React.use(props.params);
  const { data, isLoading } = useCourseNumberDetailQuery(params.course_number);
  console.log('ss',data);
  
  if (isLoading) return <div className='text-red-600'>Loading...</div>;

  return (
    <div>
      Show Khoa Hoc User  Page: {data?.title}
    </div>
  );
}

export default Page;