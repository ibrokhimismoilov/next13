import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Suspense } from "react";
import { IUser, IPost } from "@/types";
import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import { UserPosts } from "./components/UserPosts";
import getAllUsers from "@/lib/getAllUsers";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<IUser> = await getUser(userId);
  const user = await userData;

  if (!user?.name) {
    return {
      title: "User not Found",
    };
  }

  return {
    title: user.name,
    description: `This is page of ${user.name}`,
  };
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<IUser> = await getUser(userId);
  const userPostsData: Promise<IPost[]> = await getUserPosts(userId);

  const [user, userPosts] = await Promise.all([userData, userPostsData]);

  if (!user?.name) return notFound();

  const content = (
    <section>
      <Link href={"/users-static"}>Go Back</Link>
      <hr />
      <h2>{user.name}</h2>
      <ul>
        <li>
          <strong>username: </strong>
          {user.username}
        </li>
        <li>
          <strong>email: </strong>
          {user.email}
        </li>
        <li>
          <strong>Phone: </strong>
          {user.phone}
        </li>
      </ul>

      <br />
      <h2>Posts</h2>
      <hr />
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        {/* @ts-expect-error Server Component */}
        <UserPosts promise={userPosts} />
      </Suspense>
    </section>
  );

  return content;
}

export async function generateStaticParams() {
  const usersData: Promise<IUser[]> = await getAllUsers();
  const users = await usersData;

  return users.map((user) => ({ userId: user.id }));
}
