import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Wishlist = async () => {

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="text-5xl font-bold text-center m-20">
      <h1>My Wishlist</h1>
    </div>
  );
};

export default Wishlist;