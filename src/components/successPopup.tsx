import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const SuccessPopup = () => {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  useEffect(() => {
    !open && router.push("/app");
  }, [open, router]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[350px] space-y-5">
        <DialogHeader>
          <DialogTitle>Success</DialogTitle>
          <DialogDescription>
            You are all set up! Open WhatsApp to find Repli AI. Ask questions
            about your email, and you will start receiving summaries from
            tomorrow morning.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center">
          <CheckIcon
            className="w-[60px] h-[60px] p-2 bg-green-500 text-white rounded-full "
            aria-label="Success checkmark"
          />
        </div>
        <DialogFooter>
          <Button
            onClick={() => setOpen(false)}
            className="w-full cursor-pointer"
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
