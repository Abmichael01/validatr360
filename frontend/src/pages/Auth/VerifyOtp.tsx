import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import React from "react";

const otpSchema = z.object({
  otp: z.string().length(6, { message: "Please enter a valid 6-digit code" }),
});

type OTPValues = z.infer<typeof otpSchema>;

export const  VerifyOTP: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<OTPValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });

  function onSubmit(data: OTPValues) {
    setIsLoading(true);
    // Here you would typically send a request to your backend to verify the OTP
    console.log(data);
    // For demo purposes, we'll just navigate to the reset password page after a short delay
    setTimeout(() => {
      setIsLoading(false);
      navigate("/auth/reset-password");
    }, 1500);
  }

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Verify OTP</CardTitle>
        <CardDescription>
          Enter the 6-digit code we sent to your email.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormItem className="flex flex-col items-center justify-center w-full">
                  <FormLabel>One-Time Password</FormLabel>
                  <FormControl >
                    <InputOTP maxLength={6} {...field} >
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                      </InputOTPGroup>
                      <InputOTPSeparator />
                      <InputOTPGroup>
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                      </InputOTPGroup>
                      <InputOTPSeparator />
                      <InputOTPGroup>
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Verifying..." : "Verify OTP"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
