"use client"

import React from 'react'
import { useCourseByNumberQuery } from '@/queries/useCourses';

type Props = {
  params: Promise<{ course_number: string }>,
};

const ShowKhoaHocPage = (props: Props) => {
  const params = React.use(props.params);
  const { data } = useCourseByNumberQuery(params.course_number);

  return (
    <>
    <span>{data?.title}</span>
    <span>{data?.course_number}</span>
    </>
  );
}

export default ShowKhoaHocPage;