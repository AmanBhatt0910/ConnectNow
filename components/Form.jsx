"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { motion } from "framer-motion";
import { Mail, Lock, User } from "lucide-react";

const Form = ({ type }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    if (type === "register") {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) router.push("/");
      else toast.error("Something went wrong");
    }

    if (type === "login") {
      const res = await signIn("credentials", { ...data, redirect: false });
      if (res?.ok) router.push("/chats");
      else toast.error("Invalid email or password");
    }
  };

  return (
    <div className="auth relative overflow-hidden">

      {/* Background animation */}
      <motion.div
        animate={{ opacity: [0, 0.8, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.3),transparent_70%)] blur-3xl"
      />

      <motion.div
        animate={{ x: ["-30%", "20%", "-10%"], y: ["-10%", "8%", "-6%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-br from-blue-1 via-purple-2 to-blue-3 opacity-30 blur-2xl"
      />

      {/* Glass Card UI */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="content relative z-10 border border-white/30 backdrop-blur-2xl shadow-xl"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
          className="mb-3"
        >
          <Image
            src="/assets/logo.png"
            alt="ConnectNow Logo"
            width={208}
            height={64}
            className="logo drop-shadow-xl"
            priority
          />
        </motion.div>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="form w-full" noValidate>

          {/* Username (only in register mode) */}
          {type === "register" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full">
              <div className="input">
                <input
                  {...register("username", {
                    required: "Username is required",
                    minLength: { value: 3, message: "Minimum 3 characters required" },
                  })}
                  type="text"
                  placeholder=" "
                  className="input-field peer"
                />

                <label className="-top-4 text-small-medium peer-placeholder-shown:top-3 peer-placeholder-shown:text-grey-3 peer-focus:-top-4 peer-focus:text-blue-3 pointer-events-none absolute left-5 transition-all">
                  Username
                </label>

                <User className="absolute right-4 text-grey-3 peer-focus:text-blue-3" size={20} />
              </div>

              {errors.username && <p className="text-red-500 text-subtle-medium mt-1">{errors.username.message}</p>}
            </motion.div>
          )}

          {/* Email */}
          <motion.div className="w-full">
            <div className="input">
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                placeholder=" "
                className="input-field peer"
              />

              <label className="-top-4 text-small-medium peer-placeholder-shown:top-3 peer-placeholder-shown:text-grey-3 peer-focus:-top-4 peer-focus:text-blue-3 pointer-events-none absolute left-5 transition-all">
                Email
              </label>

              <Mail className="absolute right-4 text-grey-3 peer-focus:text-blue-3" size={20} />
            </div>

            {errors.email && <p className="text-red-500 text-subtle-medium mt-1">{errors.email.message}</p>}
          </motion.div>

          {/* Password */}
          <motion.div className="w-full">
            <div className="input">
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Min 6 chars required" },
                })}
                type="password"
                placeholder=" "
                className="input-field peer"
              />

              <label className="-top-4 text-small-medium peer-placeholder-shown:top-3 peer-placeholder-shown:text-grey-3 peer-focus:-top-4 peer-focus:text-blue-3 pointer-events-none absolute left-5 transition-all">
                Password
              </label>

              <Lock className="absolute right-4 text-grey-3 peer-focus:text-blue-3" size={20} />
            </div>

            {errors.password && <p className="text-red-500 text-subtle-medium mt-1">{errors.password.message}</p>}
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="button bg-gradient-to-r from-blue-1 to-blue-3 hover:shadow-blue-3/30"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            disabled={isSubmitting}
          >
            {type === "register" ? "Create Account" : "Continue"}
          </motion.button>
        </form>

        {/* Auth Link */}
        <div className="text-center">
          {type === "register" ? (
            <Link href="/" className="link">
              <p className="text-grey-3 hover:text-blue-3 transition-all">Already have an account? <span className="font-semibold">Sign In</span></p>
            </Link>
          ) : (
            <Link href="/register" className="link">
              <p className="text-grey-3 hover:text-blue-3 transition-all">Don't have an account? <span className="font-semibold">Register</span></p>
            </Link>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Form;