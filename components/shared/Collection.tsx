"use client";

import Link from "next/link";

export const Collection = ({ noteList }: { noteList: Notes[] }) => {
  return (
    <>
      {noteList.length > 0 ? (
        <ul className="grid grid-rows-4 grid-flow-col gap-4">
          {noteList.map((note) => (
            <Card note={note} key={note._id} />
          ))}
        </ul>
      ) : (
        <div className="collection-empty">
          <p className="p-20-semibold">Empty List</p>
        </div>
      )}
    </>
  );
};

const Card = ({ note }: { note: Notes }) => {
  return (
    <li>
      <Link href={``} className="collection-card">
        <div key={note._id} className="grid items-start">
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none text-black uppercase mb-5">
              {note.title}
            </p>
            <p className="text-sm text-muted-foreground">{note.content}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};
