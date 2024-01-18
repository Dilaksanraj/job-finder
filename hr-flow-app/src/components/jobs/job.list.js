// JobList.js
import React from 'react';
import JobCard from '../jobs/JobCard';
import { Col, Row } from 'antd';
import { DndContext, PointerSensor, closestCenter, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, arrayMove, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { MyPointerSensor } from '../../shared/Custom.sensor';

const SortableJobs = ({ job, isExpandAll }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: job.id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  }
  return (
    <Col style={style} ref={setNodeRef} {...attributes} {...listeners} key={job.id} xs={24} sm={24} md={12} lg={8} xl={6} xxl={6} className="gutter-row" span={4}>
      <JobCard style={style} ref={setNodeRef} {...attributes} {...listeners} job={job} isExpandAll={isExpandAll} />
    </Col>
  )
}
const JobList = ({ jobs, isExpandAll,updateJobsOrder }) => {
  const sensors = useSensors(
    useSensor(PointerSensor, {
        activationConstraint: { delay: 500 }
    }),)
  const onDragEnd = event => {

    const { active, over } = event;
    if (active.id === over.id) {
      return;
    }
    // Assuming you have a function like arrayMove to perform the reorder
    const newJobs = arrayMove(jobs, jobs.findIndex((job) => job.id === active.id), jobs.findIndex((job) => job.id === over.id));
    // Notify the parent about the updated job order
    updateJobsOrder(newJobs);

  }
  return (
    <div>
      <Row gutter={16}>
        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd} sensors={sensors} >
          <SortableContext items={jobs} strategy={verticalListSortingStrategy}>
            {jobs?.map((job) => (
              <SortableJobs key={job.id} job={job} isExpandAll={isExpandAll} />
            ))}
          </SortableContext>
        </DndContext>
      </Row>
    </div>
  );
};

export default JobList;
