import React from "react";
import type { Metadata } from "next";
import { User } from "@/types";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users page",
};

export default async function UsersPage() {
  const usersData: Promise<User[]> = await getAllUsers();
  const users = await usersData;

  const content = (
    <section>
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
