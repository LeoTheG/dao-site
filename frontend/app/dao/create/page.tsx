// create DAO, form page

"use client";

import Link from "next/link";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { withMetamaskAuth } from "@/app/contexts/MetamaskAuthContext";

const formSchema = z.object({
  name: z.string(),
  description: z.string()
});

function DAOForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: ""
    }
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="flex flex-col text-primary items-center p-12">
      <Card className="flex flex-col gap-4 p-4 w-fit min-w-[500px] max-w-screen">
        <CardHeader>
          <CardTitle>Create a DAO</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>DAO Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your DAO name" {...field} />
                    </FormControl>
                    <FormDescription>
                      {"This is your DAO's official name."}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>DAO Description</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your DAO description"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      {"This is your DAO's official description."}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <CardFooter className="gap-4 p-0">
                <Button type="submit" variant="secondary">
                  Submit
                </Button>
                <Link href="/dao">
                  <Button type="submit">Cancel</Button>
                </Link>
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default withMetamaskAuth(DAOForm);
