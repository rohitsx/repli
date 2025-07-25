"use client";

import { GmailIcon } from "../logo";
import { useEffect, useState } from "react";
import { ArrowRight, CheckIcon } from "lucide-react";
import { Button } from "../btn";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { allCountryCode } from "@/lib/countryCode";
import { CountrySelector } from "../ui/country-selector";
import { SuccessPopup } from "../successPopup";
import { updateWhatsappNoFormate } from "@/lib/whatsappNoFormater";
import { getUserGeo } from "@/lib/getUserGeo";
import { Client_Domain } from "@/lib/env";
import { authClient } from "@/lib/auth-client";
import { updateSession } from "@/lib/session";

export const GmailAuthCardContent = () => {
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState<
    keyof typeof allCountryCode | null
  >(null);
  const [dialCode, setDialCode] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [authUrl, setAuthUrl] = useState<null | string>(null);
  const { data: session } = authClient.useSession();

  const searchParams = useSearchParams();
  const router = useRouter();

  const authStatus = searchParams.get("auth");
  const whatsappNoStatus = searchParams.get("whatsapp-no");
  const [showSuccessPopup, setshowSuccessPopup] = useState(false);

  useEffect(() => {
    (async () => await updateSession())();
    getUserGeo().then(({ country_code, timezone }) => {
      setTimeZone(timezone.id);
      setCountryCode(country_code);
    });
  }, []);

  useEffect(() => {
    if (whatsappNoStatus && authStatus) router.push("/app");
  }, [router, whatsappNoStatus, authStatus]);

  useEffect(() => {
    if (!session?.user) return;
    const url = `${Client_Domain}/api/auth/gmail?email=${session.user.email}&id=${session.user.id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAuthUrl(data.authUrl));
  }, [session]);

  const handleSingin = async () => {
    if (!authUrl) throw new Error("your are not singing or url not found");
    router.push(authUrl);
  };

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
    const res = await fetch(`${Client_Domain}/api/add-whatsapp-no`, {
      method: "POST",
      body: JSON.stringify({
        phone,
        timeZone,
        countryCode,
        email: session?.user.email,
      }),
    });
    console.log({ res });
    // setshowSuccessPopup(true);
  };

  return (
    <>
      {showSuccessPopup && <SuccessPopup />}
      <Button
        className="py-6 w-full space-x-1 bg-white text-black border cursor-pointer"
        variant="outline"
        onClickAction={handleSingin}
        disabled={!!authStatus}
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
