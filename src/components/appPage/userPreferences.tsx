import { InputField } from "./input-field";
import { Input } from "../ui/input";
import { useProfileStore } from "@/store/useProfileStore";
import { GmailControls } from "./GmailControls";

export const UserPreferences = () => {
  const {
    name,
    setName,
    whatsAppNo,
    setWhatsAppNo,
    emailSummaryTime,
    setEmailSummaryTime,
  } = useProfileStore();

  return (
    <div className="gap-3 w-full space-y-7">
      <InputField id="name" label="Name">
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="placeholder:text-xs"
        />
      </InputField>
      <InputField id="whatsapp" label="WhatsApp Number">
        <Input
          id="whatsapp"
          value={whatsAppNo}
          onChange={(e) => setWhatsAppNo(e.target.value)}
          placeholder="Enter WhatsApp Number"
          className="placeholder:text-xs"
        />
      </InputField>
      <InputField id="summaryTime" label="Email Summary Delivery Time">
        <Input
          id="summaryTime"
          type="time"
          value={emailSummaryTime}
          onChange={(e) => setEmailSummaryTime(e.target.value)}
          className="placeholder:text-xs"
        />
      </InputField>
      <div className="space-y-4">
        <GmailControls />
      </div>
    </div>
  );
};
