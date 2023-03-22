import React from "react";
import type { Metadata } from "next";
import { IUser } from "@/types";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users list",
};

export default async function UsersListPage() {
  const usersData: Promise<IUser[]> = await getAllUsers();
  const users = await usersData;

  const content = (
    <section>
      <Link href={"/"}>GoBack</Link>
      <hr />
      <h2>List of Users</h2>

      {users.map((user) => (
        <p key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
          <br />
        </p>
      ))}
    </section>
  );

  return content;
}
