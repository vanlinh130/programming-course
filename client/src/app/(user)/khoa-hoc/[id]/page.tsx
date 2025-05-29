"use client"

import { useCourseDetailQuery } from '@/queries/useCourses';
import React from 'react'

type Props = {
  params: Promise<{ id: string }>,
};

const ShowKhoaHocPage = (props: Props) => {
  const params = React.use(props.params);
  const { data, isLoading } = useCourseDetailQuery(params.id);
  console.log(data);
  

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      ShowKhoaHocPage: {data?.title}
    </div>
  );
}

export default ShowKhoaHocPage;