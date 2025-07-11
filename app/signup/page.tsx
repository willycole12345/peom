import Image from "next/image";
import { RegisterForm } from "../components/RegisterForm";
export default function Signuppage() {
    return (
        <>
            <div className="bg-inherit flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
                <div className="flex w-full max-w-sm flex-col gap-6">
                    <a href="#" className="flex items-center gap-2 self-center font-medium">
                        <Image
                            src="/logo.png"
                            width={100}
                            height={100}
                            alt="Picture of the author"
                        />
                    </a>
                    <RegisterForm />
                </div>
            </div>
        </>
    );
}