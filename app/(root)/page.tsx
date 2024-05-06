import { Collection } from "@/components/shared/Collection";
import { getAllNote } from "@/lib/action/note.actions";

export default async function Home() {
  const allTodo = await getAllNote();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="sm:mt-12">
        <Collection noteList={allTodo} />
      </section>
    </main>
  );
}
