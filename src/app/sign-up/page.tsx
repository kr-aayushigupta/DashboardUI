"use client";
// components from shadcn
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";
// import { Toaster } from "@/components/ui/sonner";

// components from reactjs
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
// components from nextjs
import Link from "next/link";

import { TriangleAlert } from "lucide-react";
// ====================================================================================
const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    gender: "",
    profession: "",
    maritalstatus: "",
  });

  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    // This prevents the default form submission behavior, which would cause a page reload.
    e.preventDefault();
    setPending(true);
    console.log(form);

    const res = await fetch("/api/auth/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      setPending(false);

      toast.success(data.message);
      router.push("/sign-in");
    } else if (res.status === 400) {
      setError(data.message);
      setPending(false);
    } else if (res.status === 500) {
      setError(data.message);
      setPending(false);
    }
  };

  return (
    <div className="h-full flex items-center justify-center  min-h-full">
      <Card className="md:h-auto w-[80%] sm:w-[420px] p-4 sm:p-8">
        <CardHeader>
          <CardTitle className="text-center">Signup</CardTitle>
          <CardDescription className="text-sm text-center text-accent-foreground ">
            Use email to sign up
          </CardDescription>
        </CardHeader>

        {/* !!error is a javascript trick to treat error as boolean  */}
        {!!error && (
          <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
            <TriangleAlert></TriangleAlert>
            <p>{error}</p>
          </div>
        )}

        <CardContent className="px-2 sm:px-6">
          <form action="" className="space-y-3 " onSubmit={handleSubmit}>
            <Input
              type="text"
              disabled={pending}
              placeholder="Enter your  name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            ></Input>

            {/* =============================================== */}
            <div className="flex gap-4 items-center">
              Gender :
              <label className="flex items-center gap-2">
                <Input
                  type="radio"
                  name="gender"
                  disabled={pending}
                  value="male"
                  checked={form.gender === "male"}
                  onChange={(e) => setForm({ ...form, gender: e.target.value })}
                  required
                ></Input>
                Male
              </label>
              <label className="flex items-center gap-2">
                <Input
                  type="radio"
                  name="gender"
                  disabled={pending}
                  value="female"
                  checked={form.gender === "female"}
                  onChange={(e) => setForm({ ...form, gender: e.target.value })}
                  required
                ></Input>
                Female
              </label>
            </div>

            {/* ========================================================= */}

            {/* =============================================== */}
            <div className="flex gap-4 items-center">
              Profession :
              <label className="flex items-center gap-2">
                <Input
                  type="radio"
                  name="profession"
                  disabled={pending}
                  value="student"
                  checked={form.profession === "student"}
                  onChange={(e) =>
                    setForm({ ...form, profession: e.target.value })
                  }
                  required
                ></Input>
                Student
              </label>
              <label className="flex items-center gap-2">
                <Input
                  type="radio"
                  name="profession"
                  disabled={pending}
                  value="working"
                  checked={form.profession === "working"}
                  onChange={(e) =>
                    setForm({ ...form, profession: e.target.value })
                  }
                  required
                ></Input>
                Working
              </label>
            </div>

            {/* ========================================================= */}

            {/* =============================================== */}
            <div className="flex gap-4 items-center">
              Marital Status :
              <label className="flex items-center gap-2">
                <Input
                  type="radio"
                  name="maritalstatus"
                  disabled={pending}
                  value="married"
                  checked={form.maritalstatus === "married"}
                  onChange={(e) =>
                    setForm({ ...form, maritalstatus: e.target.value })
                  }
                  required
                ></Input>
                Married
              </label>
              <label className="flex items-center gap-2">
                <Input
                  type="radio"
                  name="maritalstatus"
                  disabled={pending}
                  value="single"
                  checked={form.maritalstatus === "single"}
                  onChange={(e) =>
                    setForm({ ...form, maritalstatus: e.target.value })
                  }
                  required
                ></Input>
                Single
              </label>
            </div>

            {/* ========================================================== */}
            <Input
              type="email"
              disabled={pending}
              placeholder="Enter your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            ></Input>

            <Input
              type="password"
              disabled={pending}
              placeholder="Enter your password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            ></Input>

            <Input
              type="password"
              disabled={pending}
              placeholder="Confirm your Password"
              value={form.confirmpassword}
              onChange={(e) =>
                setForm({ ...form, confirmpassword: e.target.value })
              }
              required
            ></Input>

            <Button
              className="ml-25 cursor-pointer hover:bg-green-500 "
              size="lg"
              disabled={pending}
            >
              Register
            </Button>
          </form>

          <Separator>
            <p className="text-center text-sm mt-2 text-muted-foreground">
              Already have an account?
              <Link
                href="sign-in"
                className="text-sky-700 ml-4 hover:underline cursor:pointer"
              >
                Login
              </Link>
            </p>
          </Separator>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
