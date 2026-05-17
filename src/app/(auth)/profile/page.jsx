import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FiEdit2, FiMail, FiUser } from "react-icons/fi";

const MyProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  const user = session.user;

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-[#f8f8f8] flex items-center justify-center p-8">
            <Image
              src={user.image || "/default-user.png"}
              alt={user.name}
              width={450}
              height={450}
              className="rounded-2xl object-cover w-full h-[500px]"
            />
          </div>

          <div className="p-10 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900">
                My Profile
              </h1>
              <p className="text-gray-500 mt-4 text-lg leading-relaxed">
                Manage your profile information and enjoy your personalized
                shopping experience with SunCart.
              </p>
              <div className="mt-10 space-y-6">
                <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-2xl border border-gray-100">
                  <div className="bg-orange-100 p-4 rounded-xl">
                    <FiUser className="text-orange-500 text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">
                      Full Name
                    </p>
                    <h3 className="text-xl font-bold text-gray-800">
                      {user.name}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-2xl border border-gray-100">
                  <div className="bg-orange-100 p-4 rounded-xl">
                    <FiMail className="text-orange-500 text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">
                      Email Address
                    </p>
                    <h3 className="text-lg font-bold text-gray-800 break-all">
                      {user.email}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 flex justify-end">
              <Link href="/update-profile">
                <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-md hover:scale-105">
                  <FiEdit2 size={18} />
                  Update Profile
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;