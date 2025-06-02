"use client"

import React from 'react'
import { useCourseByNumberQuery } from '@/queries/useCourses';
import CourseDetail from './course-detail';

type Props = {
  params: Promise<{ course_number: string }>,
};

const ShowKhoaHocPage = (props: Props) => {
  const params = React.use(props.params);
  const { data, isLoading } = useCourseByNumberQuery(params.course_number);

  return (
    <>
      <CourseDetail data={data} isLoading={isLoading}/>
    </>
  );
}

export default ShowKhoaHocPage;