import React from "react";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Header from "@/components/shared/Header";
import { getUserById } from "@/lib/action/user.actions";
import AddNotesForme from "@/components/shared/AddNotesForme";

const NotePage = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);
  return (
    <div>
      <Header title={"Add a new note"} subtitle={""} />
      <AddNotesForme userId={user._id} creditBalance={user.creditBalance} />
    </div>
  );
};

export default NotePage;
