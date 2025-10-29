// components/Form.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser } from "react-icons/hi";
import { motion } from "framer-motion";

const InputIcon = ({ children }) => (
  <div className="w-9 h-9 flex items-center justify-center rounded-lg text-text-sub">
    {children}
  </div>
);

const Form = ({ type }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    // Keep original logic exactly the same
    if (type === "register") {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        router.push("/");
      } else {
        // try to parse error if any, fallback to toast
        try {
          const errBody = await res.json();
          toast.error(errBody?.message || "Something went wrong");
        } catch {
          toast.error("Something went wrong");
        }
      }
    }

    if (type === "login") {
      const res = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (res?.ok) {
        router.push("/chats");
      } else {
        toast.error("Invalid email or password");
      }
    }
  };

  return (
    <div className="auth">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.36 }}
        className="content"
        aria-live="polite"
      >
        {/* Logo */}
        <div className="mb-1 flex items-center justify-center">
          <Image
            src="/assets/logo.png"
            alt="Halo Chat logo"
            width={208}
            height={64}
            className="logo"
            priority
          />
        </div>

        <form
          className="form w-full"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          aria-label={type === "register" ? "Register form" : "Login form"}
        >
          {/* Username (register only) */}
          {type === "register" && (
            <div className="w-full">
              <label className="sr-only" htmlFor="username">
                Username
              </label>
              <motion.div
                whileFocus={{ scale: 1.01 }}
                className="input"
              >
                <input
                  id="username"
                  defaultValue=""
                  {...register("username", {
                    required: "Username is required",
                    validate: (value) => {
                      if (value.length < 3) {
                        return "Username must be at least 3 characters";
                      }
                    },
                  })}
                  type="text"
                  placeholder="Username"
                  className="input-field"
                  aria-invalid={errors.username ? "true" : "false"}
                  aria-describedby={errors.username ? "username-error" : undefined}
                />
                <InputIcon>
                  <HiOutlineUser size={18} />
                </InputIcon>
              </motion.div>

              {errors.username && (
                <p id="username-error" className="mt-2 text-sm text-red-500">
                  {errors.username.message}
                </p>
              )}
            </div>
          )}

          {/* Email */}
          <div className="w-full">
            <label className="sr-only" htmlFor="email">
              Email
            </label>

            <motion.div whileFocus={{ scale: 1.01 }} className="input">
              <input
                id="email"
                defaultValue=""
                {...register("email", { required: "Email is required" })}
                type="email"
                placeholder="Email"
                className="input-field"
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              <InputIcon>
                <HiOutlineMail size={18} />
              </InputIcon>
            </motion.div>

            {errors.email && (
              <p id="email-error" className="mt-2 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="w-full">
            <label className="sr-only" htmlFor="password">
              Password
            </label>

            <motion.div whileFocus={{ scale: 1.01 }} className="input">
              <input
                id="password"
                defaultValue=""
                {...register("password", {
                  required: "Password is required",
                  validate: (value) => {
                    if (
                      value.length < 5 ||
                      !value.match(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/)
                    ) {
                      return "Password must be at least 5 characters and contain at least one special character";
                    }
                  },
                })}
                type="password"
                placeholder="Password"
                className="input-field"
                aria-invalid={errors.password ? "true" : "false"}
                aria-describedby={errors.password ? "password-error" : undefined}
              />
              <InputIcon>
                <HiOutlineLockClosed size={18} />
              </InputIcon>
            </motion.div>

            {errors.password && (
              <p id="password-error" className="mt-2 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            className="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            aria-live="polite"
          >
            {type === "register" ? "Join Free" : "Let's Chat"}
          </motion.button>
        </form>

        {/* Links */}
        <div className="w-full text-center">
          {type === "register" ? (
            <Link href="/" className="link">
              <p className="text-sm text-text-sub hover:text-accent transition-colors">
                Already have an account? <span className="text-accent font-medium">Sign In</span>
              </p>
            </Link>
          ) : (
            <Link href="/register" className="link">
              <p className="text-sm text-text-sub hover:text-accent transition-colors">
                Don't have an account? <span className="text-accent font-medium">Register</span>
              </p>
            </Link>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Form;