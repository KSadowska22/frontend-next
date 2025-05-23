"use client";


import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Button} from "@/components/ui/button";
import {ChevronRight, GraduationCap, Star} from "lucide-react";
import React, {useState} from "react";
import {Badge} from "@/components/ui/badge";

interface CoursesSideListProps {
  courses: Array<any>
}

export default function CoursesList({courses}: CoursesSideListProps) {

  let [selectedCourse, setSelectedCourse] = useState(courses[0]);

  return (
    <>
      <div className="w-full md:w-1/3 lg:w-1/4">
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Courses</CardTitle>
            <CardDescription>Browse available courses</CardDescription>
          </CardHeader>
          <ScrollArea className="h-[calc(100vh-12rem)]">
            <div className="space-y-1 p-2">
              {courses.map((course) => (
                <Button
                  key={course.id}
                  variant={selectedCourse.id === course.id ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setSelectedCourse(course)}
                >
                  <div className="flex w-full items-center justify-between">
                    <span className="line-clamp-1 text-left">{course.title}</span>
                    <ChevronRight
                      className={`h-4 w-4 shrink-0 transition-transform ${
                        selectedCourse.id === course.id ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                </Button>
              ))}
            </div>
          </ScrollArea>
        </Card>
      </div>
      <div className="w-full md:w-2/3 lg:w-3/4">
        <Card className="h-full">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">{selectedCourse.title}</CardTitle>
                <CardDescription className="mt-2 text-base">{selectedCourse.description}</CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
    </>
  )
}