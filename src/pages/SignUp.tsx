// import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { realestateGif } from "@/utils";

const SignUp = () => {
  return (
    <>
      <div className="flex items-center h-[100vh] lg:justify-normal justify-center">
        <div className="relative w-1/2 lg:block hidden">
          <img
            src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Login Img"
            className="w-full h-[100vh] object-cover"
          />
        </div>
        <div className="flex items-center flex-col lg:w-1/2 w-full ">
          <div className="flex items-center gap-4 mb-2">
            <img
              src={realestateGif}
              alt="realstate img"
              className="w-8 h-8 object-contain"
            />
            <h4 className=" text-3xl font-semibold ">Real Estate</h4>
          </div>
          <span className=" text-red-700"></span>
          <div className="w-full md:w-auto">
            <form>
              <Card className="w-full lg:w-[45vw] md:w-[50vw] border-none ">
                <CardHeader>
                  <CardTitle>Sign Up</CardTitle>
                  <CardDescription>Enter your credentials</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid w-full gap-4">
                    <div className="flex flex-col items-start space-y-2">
                      <div className="flex justify-between w-full">
                        <Label htmlFor="username">
                          Username{" "}
                          <span className="text-sm text-red-700">*</span>
                        </Label>
                      </div>
                      <Input id="username" type="text" />
                    </div>
                    <div className="flex flex-col items-start space-y-2">
                      <div className="flex justify-between w-full">
                        <Label htmlFor="email">
                          Email <span className="text-sm text-red-700">*</span>
                        </Label>
                        <span className="text-xs text-red-700"></span>
                      </div>
                      <Input id="email" placeholder="m@example.com" />
                    </div>
                    <div className="flex flex-col items-start space-y-2">
                      <div className="flex justify-between w-full">
                        <Label htmlFor="password">
                          Password{" "}
                          <span className="text-sm text-red-700">*</span>
                        </Label>
                      </div>
                      <Input id="password" type="password" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" type="submit">
                    Submit
                  </Button>
                </CardFooter>
              </Card>
            </form>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Back to login
                </span>
              </div>
            </div>
            <CardFooter>
              <Link to="/login" className="w-full my-4">
                <Button variant="outline" type="button" className=" w-full">
                  Login
                </Button>
              </Link>
            </CardFooter>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
