import React from "react";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Header from "@/components/shared/Header";
import { getUserById } from "@/lib/action/user.actions";

const NotePage = async () => {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");

  //const user = await getUserById(userId);

  return (
    <div>
      <Header title={"Note"} subtitle={""} />
    </div>
  );
};

export default NotePage;
