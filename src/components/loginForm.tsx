"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth-client";
import { useState } from "react";
import { Loader2Icon } from "lucide-react";
import { GoogleIcon } from "./logo";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [loading, setLoading] = useState(false);

  const GoogleBtn = () => (
    <Button
      variant="outline"
      type="button"
      className="w-full cursor-pointer"
      onClick={() => {
        signIn();
        setLoading(true);
      }}
    >
      <GoogleIcon />
      Continue with Google
    </Button>
  );

  const LoadingBtn = () => (
    <Button size="sm" disabled className="bg-white text-black border">
      <Loader2Icon className="animate-spin " />
      Please wait
    </Button>
  );

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form>
        <div className="flex flex-col gap-5">
          {loading ? <LoadingBtn /> : <GoogleBtn />}
        </div>
      </form>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our{" "}
        <a href="/terms-&-conditions" target="_blank">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="/privacy-&-policy" target="_blank">
          Privacy Policy
        </a>
        .
      </div>
    </div>
  );
}
