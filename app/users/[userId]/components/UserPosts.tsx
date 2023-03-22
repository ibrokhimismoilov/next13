import { IPost, IUserPosts } from "@/types";
import React from "react";

type Props = {
  promise: IPost[];
};

export const UserPosts = async ({ promise }: Props) => {
  const posts = await promise;

  const content = posts.map((post) => (
    <article key={post.id}>
      <h5>
        #{post.id} | {post.title}
      </h5>
      <p>{post.body}</p>
      <hr />
      <br />
    </article>
  ));

  return content;
};
