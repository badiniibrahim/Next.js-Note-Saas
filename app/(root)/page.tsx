import { Collection } from "@/components/shared/Collection";
import { getAllNote } from "@/lib/action/note.actions";

export default async function Home() {
  const allNote = await getAllNote();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <section>
        <Collection noteList={allNote} />
      </section>
    </main>
  );
}
