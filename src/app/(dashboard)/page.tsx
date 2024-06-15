import createUser from "@/lib/actions/user.action";
import React from "react";

const page = async () => {
  const user = await createUser({
    clerkId: "clerk_123",
    username: "kainfe",
    email: "reckpo123@gmail.com",
  });
  return <div>page</div>;
};

export default page;
