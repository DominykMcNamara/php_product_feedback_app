import FilterByTag from "@/Components/FilterByTag";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />
            <div className="flex flex-col w-[90rem] h-[83rem]">
                <div className="bg-[url(https://file.rendit.io/n/nme2VAqJw3OcKiEAtHbh.svg)] bg-cover flex flex-col justify-end text-start h-[8.5rem] w-[20rem] rounded-xl">
                    <div className="ml-[1.5rem] mb-[1.5rem]">
                        <h1 className="text-xl  font-bold tracking-[-0.25] text-white">
                            {" "}
                            Frontend Mentor
                        </h1>

                        <p className="text-sm font-medium text-white">
                            Feedback Board
                        </p>
                    </div>
                </div>
                <div>
                    <FilterByTag />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
