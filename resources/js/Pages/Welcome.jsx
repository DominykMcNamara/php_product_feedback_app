import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <Navbar user={auth.user} />
        </>
    );
}
