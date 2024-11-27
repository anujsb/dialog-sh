import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Questionnaire from "./Questionnaire";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">button n</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[60rem] w-full rounded-xl md:rounded-xl border border-[#DEE5FF] bg-[#DEE5FF] text-[#27293B]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
        </DialogHeader>
        <div className="">
          <Questionnaire />
        </div>
      </DialogContent>
    </Dialog>
  );
}
