export default function ApplicationLogo(props) {
    return (
        <div className="flex flex-row">
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#AD1FEA"
                className="w-10 h-10"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                />
            </svg>
            <h1 className="text-2xl  font-bold tracking-[-0.33] text-[#3a4374] w-min">
                Suggester
            </h1>
        </div>
    );
}
