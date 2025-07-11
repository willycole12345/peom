import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export function RegisterForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Welcome back</CardTitle>
                    <CardDescription>
                        {`Register an account`}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid gap-6">
                            <div className="grid gap-6">
                                <div className="grid gap-3">
                                    <Label htmlFor="email">Firstname</Label>
                                    <Input
                                        id="email"
                                        type="text"
                                        placeholder="m@example.com"
                                        required
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="email">Lastname</Label>
                                    <Input
                                        id="email"
                                        type="text"
                                        placeholder="Alex"
                                        required
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="email">Email address</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Great"
                                        required
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">Password</Label>
                                    </div>
                                    <Input id="password" type="password" placeholder="Password" required />
                                </div>
                                <div className="grid gap-3">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">Re-assword</Label>
                                    </div>
                                    <Input id="password" type="password" placeholder="Password" required />
                                </div>
                                <Button type="submit" className="w-full">
                                    Register
                                </Button>
                            </div>
                            <div className="text-center text-sm">
                                {`You have an account`} {" "}
                                <Link href="/signup" className="underline underline-offset-4">
                                    Log in
                                </Link>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
            <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
                By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
                and <a href="#">Privacy Policy</a>.
            </div>
        </div>
    )
}
