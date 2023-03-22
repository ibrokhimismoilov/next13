import getUser from "@/lib/getUser";
import { User } from "@/types";

type Params = {
  params: {
    userId: string;
  };
};

export default async function page({ params: { userId } }: Params) {
  const userData: Promise<User> = await getUser(userId);
  const data = await userData;

  const content = (
    <section>
      <h2>{data.name}</h2>
      <ul>
        <li>
          <strong>username: </strong>
          {data.username}
        </li>
        <li>
          <strong>email: </strong>
          {data.email}
        </li>
        <li>
          <strong>Phone: </strong>
          {data.phone}
        </li>
      </ul>
    </section>
  );

  return content;
}
