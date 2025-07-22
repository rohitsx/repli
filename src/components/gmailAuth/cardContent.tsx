"use client";

import { GmailIcon } from "../logo";
import { useEffect, useState } from "react";
import { ArrowRight, CheckIcon } from "lucide-react";
import { gmailSignIn } from "@/lib/auth-client";
import { Button } from "../btn";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { allCountryCode } from "@/lib/countryCode";
import { CountrySelector } from "../ui/country-selector";

export const GmailAuthCardContent = () => {
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState<
    keyof typeof allCountryCode | null
  >(null);
  const [dialCode, setDialCode] = useState("");
  const [timeZone, setTimeZone] = useState("");

  const searchParams = useSearchParams();

  const authStatus = searchParams.get("auth");

  useEffect(() => {
    fetch("https://ipwho.is/")
      .then((res) => res.json())
      .then((data) => {
        setCountryCode(data.country_code);
        setTimeZone(data.timezone.id);
      });
  }, []);

  const handleSingin = () => {
    gmailSignIn();
  };

  const formatPhoneNumber = (number: string): string => {
    number = number.replace(/\D/g, "");
    const match = number.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

    if (!match) return number;

    return [match[1], match[2], match[3]].filter(Boolean).join(" ");
  };

  const updatePhoneFormate = (input: string) => {
    if (!input.startsWith(dialCode)) {
      setPhone(dialCode + " " + formatPhoneNumber(input));
    } else {
      const numberPart = input.slice(dialCode.length).replace(/\D/g, "");
      setPhone(dialCode + " " + formatPhoneNumber(numberPart));
    }
  };

  useEffect(() => {
    updatePhoneFormate("");
  }, [dialCode]);

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;
    updatePhoneFormate(input);
  };

  const handleSubmitForm = () => {
    console.log({ phone, timeZone, countryCode });
  };

  return (
    <>
      <Button
        className={`py-6 w-full space-x-1 bg-white text-black border ${authStatus ? "cursor-not-allowed" : "cursor-pointer"}`}
        variant="outline"
        onClickAction={handleSingin}
        disabled={authStatus}
      >
        <GmailIcon />
        <p className="text-sm md:text-base ">
          {authStatus ? "Connected" : "Connect Gmail"}
        </p>
        {authStatus && <CheckIcon className="text-whatsapp" />}
      </Button>
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
        className="w-full space-x-2 cursor-pointer bg-whatsapp text-white hover:bg-whatsapp-h hover:text-white"
        variant="outline"
        onClickAction={handleSubmitForm}
      >
        <p className="text-sm md:text-base"> Submit</p>
        <ArrowRight />
      </Button>
    </>
  );
};
