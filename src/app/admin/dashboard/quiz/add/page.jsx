"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const quizSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  timeLimit: z.coerce.number().min(1, "Time must be at least 1 minute"),
  isPublished: z.boolean().default(false),
});

export default function QuizForm({ defaultValues = {} }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(quizSchema),
    defaultValues: {
      title: defaultValues.title || "",
      description: defaultValues.description || "",
      timeLimit: defaultValues.timeLimit || 5,
      isPublished: defaultValues.isPublished || false,
    },
  });

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    // try {
    //   const res = await fetch('/api/admin/quizzes', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data),
    //   })
    //   const result = await res.json()
    //   console.log(result)
    // } catch (err) {
    //   console.error(err)
    // }
  };

  return (
    <Card className="max-w-xl mx-auto">
      <CardHeader>
        <CardTitle className={"text-xl font-bold"}>
          {defaultValues._id ? "Edit Quiz" : "Create Quiz"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Title */}
          <div>
            <Label htmlFor="title" className={"mb-2"}>
              Title
            </Label>
            <Input id="title" {...register("title")} />
            {errors.title && (
              <p className="text-sm text-red-500">{errors.title.message}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <Label htmlFor="description" className={"mb-2"}>
              Description
            </Label>
            <Textarea id="description" {...register("description")} />
            {errors.description && (
              <p className="text-sm text-red-500">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Time Limit */}
          <div>
            <Label htmlFor="timeLimit" className="mb-2">
              Time Limit (minutes)
            </Label>
            <Input id="timeLimit" type="number" {...register("timeLimit")} />
            {errors.timeLimit && (
              <p className="text-sm text-red-500">{errors.timeLimit.message}</p>
            )}
          </div>

          {/* Is Published */}
          <div className="flex items-center space-x-2">
            <Checkbox id="isPublished" {...register("isPublished")} />
            <Label htmlFor="isPublished">Published</Label>
          </div>

          <Button type="submit" className="w-full">
            {defaultValues._id ? "Update Quiz" : "Create Quiz"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
