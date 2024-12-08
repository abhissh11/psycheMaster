"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // Assuming this is the Shadcn button component
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useTestimonials } from "@/app/utils/useTestimonials";
import { deleteTestimonial } from "@/app/utils/deleteTestimonial";
import { toast } from "react-toastify";

export default function TestimonialTable() {
  const { testimonials, setTestimonials, loading, error } = useTestimonials();
  const [isDeleting, setIsDeleting] = useState<string | null>(null);

  const handleDelete = async (testimonialId: string) => {
    try {
      setIsDeleting(testimonialId);
      await deleteTestimonial(testimonialId);
      toast.success("Testimonial deleted successfully!");

      // Update testimonials list locally without needing to refresh
      setTestimonials((prevTestimonials) =>
        prevTestimonials.filter(
          (testimonial) => testimonial._id !== testimonialId
        )
      );
    } catch (err) {
      console.log(err);
      toast.error(`Error deleting testimonial ${err} `);
    } finally {
      setIsDeleting(null);
    }
  };

  if (loading) {
    return <div>Loading testimonials...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!testimonials || testimonials.length === 0) {
    return <div>No testimonials found.</div>;
  }

  const clipText = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) {
      return text;
    }
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell className="text-base font-semibold">Name</TableCell>
          <TableCell className="text-base font-semibold">Testimonial</TableCell>
          <TableCell className="text-base font-semibold">Action</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {testimonials.map((tests) => (
          <TableRow key={tests._id}>
            <TableCell>{tests.name}</TableCell>
            <TableCell>{clipText(tests.testimonial, 8)}</TableCell>
            <TableCell>
              <Button
                variant="destructive"
                onClick={() => handleDelete(tests._id)}
                disabled={isDeleting === tests._id}
              >
                {isDeleting === tests._id ? "Deleting..." : "Delete"}
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
