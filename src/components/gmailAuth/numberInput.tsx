import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../btn";
import { Input } from "@/components/ui/input";
import { allCountryCode } from "@/lib/countryCode";
import { CountrySelector } from "../ui/country-selector";
import { updateWhatsappNoFormate } from "@/lib/whatsappNoFormater";
import { Client_Domain } from "@/lib/env";
import { Session } from "@/lib/auth-client";

export const NumberInput = ({
  authStatus,
  setshowSuccessPopup,
  session,
}: {
  authStatus: string | null;
  setshowSuccessPopup: (val: boolean) => void;
  session: Session;
}) => {
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState<
    keyof typeof allCountryCode | null
  >(null);
  const [dialCode, setDialCode] = useState("");

  useEffect(() => {
    const getCountry = async () => {
      const res = await fetch(
        `${Client_Domain}/api/db/billing/country?email=${session.user.email}`,
      );
      const { country } = await res.json();
      setCountryCode(country);
    };
    getCountry();
  }, []);

  useEffect(() => {
    const input = updateWhatsappNoFormate({ input: "", dialCode });

    setPhone(input);
  }, [dialCode]);

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;
    input = updateWhatsappNoFormate({ input, dialCode });
    setPhone(input);
  };

  const handleSubmitForm = async () => {
    await fetch(`${Client_Domain}/api/db/paid-user/number-&-timeZone`, {
      method: "POST",
      body: JSON.stringify({
        phone,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        email: session.user.email,
        name: session.user.name,
      }),
    });
    setshowSuccessPopup(true);
  };

  return (
    <>
      <div className="flex w-full">
        <CountrySelector
          setDialCode={setDialCode}
          countryCode={countryCode as any}
        />
        <div className="flex w-full">
          <Input
            type="text"
            placeholder="Enter Whatsapp Number"
            value={phone}
            onChange={handleOnchange}
            className="w-full placeholder:text-sm rounded-none rounded-r-md h-[50px]"
            inputMode="numeric"
          />
        </div>
      </div>
      <Button
        className="w-full space-x-2 bg-whatsapp text-white hover:bg-whatsapp-h hover:text-white cursor-pointer
			"
        variant="outline"
        onClickAction={handleSubmitForm}
        disabled={phone.length < 12 || !authStatus}
      >
        <p className="text-sm md:text-base"> Submit</p>
        <ArrowRight />
      </Button>
    </>
  );
};
