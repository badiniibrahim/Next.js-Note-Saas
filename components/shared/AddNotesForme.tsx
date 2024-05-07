"use client";

import React, { useState, useTransition } from "react";
import { CustomField } from "./CustomField";
import { Form } from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { formSchema } from "@/validations";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "../ui/textarea";
import { handleError } from "@/lib/utils";
import { updateCredits } from "@/lib/action/user.actions";
import { InsufficientCreditsModal } from "./InsufficientCreditsModal";
import { creditFee } from "@/constants";
import { createNote } from "@/lib/action/note.actions";

const AddNotesForme = ({ userId, creditBalance }: AddNotesFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { title: "", content: "" },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    console.log({ creditBalance });
    try {
      const todo = {
        title: values.title,
        content: values.content,
      };

      const newTodo = await createNote(userId, todo);
      if (newTodo) {
        startTransition(async () => {
          await updateCredits(userId, creditFee);
        });
        form.reset();
      }
    } catch (error) {
      handleError(error);
    } finally {
    }
    setIsSubmitting(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {creditBalance < Math.abs(creditFee) && <InsufficientCreditsModal />}

        <CustomField
          control={form.control}
          name="title"
          formLabel="Title"
          className="w-full"
          render={({ field }) => <Input {...field} className="input-field" />}
        />

        <CustomField
          control={form.control}
          name="content"
          formLabel="Content"
          className="w-full"
          render={({ field }) => (
            <Textarea {...field} className="input-field" />
          )}
        />

        <div className="flex flex-col gap-4">
          <Button
            type="submit"
            className="submit-button capitalize"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Add new note"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddNotesForme;
