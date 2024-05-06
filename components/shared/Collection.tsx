"use client";

import Link from "next/link";

export const Collection = ({ noteList }: { noteList: Notes[] }) => {
  return (
    <>
      {noteList.length > 0 ? (
        <ul className="collection-list">
          {noteList.map((image) => (
            <Card note={image} key={image._id} />
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
        <div
          key={note._id}
          className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
        >
          <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">{note.title}</p>
            <p className="text-sm text-muted-foreground">{note.content}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};
