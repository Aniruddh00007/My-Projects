import React, { useEffect, useState, useRef } from "react";
import { Loader2 } from "lucide-react";

// Helper for class names
const cn = (...classes) => classes.filter(Boolean).join(" ");

// Button variants
const confettiButtonVariants = ({ variant, size, animation }) => {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    outline: "border bg-white hover:bg-gray-100",
    ghost: "hover:bg-gray-100",
    link: "text-blue-600 underline",
    gradient: "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700",
  };
  const sizes = {
    default: "h-10 px-4 py-2 rounded-md",
    sm: "h-8 px-3 py-1 rounded-md text-sm",
    lg: "h-12 px-6 py-3 rounded-md text-lg",
    xl: "h-14 px-8 py-4 rounded-md text-xl",
    icon: "h-10 w-10 rounded-full",
    pill: "h-10 px-6 py-2 rounded-full",
  };
  const animations = {
    none: "",
    pulse: "animate-pulse",
    bounce: "hover:animate-bounce",
    scale: "active:scale-95",
    shake: "hover:animate-[wiggle_0.3s_ease-in-out]",
    glow: "hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]",
    expand: "active:scale-110 transition-transform",
  };

  return cn(
    base,
    variants[variant] || variants.default,
    sizes[size] || sizes.default,
    animations[animation] || animations.scale
  );
};

const ConfettiButton = React.forwardRef(
  (
    {
      className,
      variant = "default",
      size = "default",
      animation = "scale",
      children,
      icon,
      iconPosition = "left",
      loading = false,
      confettiOptions = { particleCount: 100, spread: 70 },
      autoConfetti = false,
      triggerOnHover = false,
      onClick,
      disabled,
      ...props
    },
    ref
  ) => {
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const buttonRef = useRef(null);

    // Load confetti script dynamically
    useEffect(() => {
      if (!window.confetti) {
        const script = document.createElement("script");
        script.src =
          "https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js";
        script.async = true;
        script.onload = () => setScriptLoaded(true);
        document.body.appendChild(script);

        return () => {
          if (script.parentNode) script.parentNode.removeChild(script);
        };
      } else {
        setScriptLoaded(true);
      }
    }, []);

    // Auto confetti on mount
    useEffect(() => {
      if (scriptLoaded && autoConfetti && window.confetti && buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const x = (rect.left + rect.width / 2) / window.innerWidth;
        const y = (rect.top + rect.height / 2) / window.innerHeight;
        window.confetti({ ...confettiOptions, origin: { x, y } });
      }
    }, [scriptLoaded, autoConfetti, confettiOptions]);

    const triggerConfetti = () => {
      if (scriptLoaded && window.confetti && buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const x = (rect.left + rect.width / 2) / window.innerWidth;
        const y = (rect.top + rect.height / 2) / window.innerHeight;
        window.confetti({ ...confettiOptions, origin: { x, y } });
      }
    };

    return (
     <button
  ref={(node) => {
    if (typeof ref === "function") ref(node);
    else if (ref) ref.current = node;
    buttonRef.current = node;
  }}
  className={cn(
    confettiButtonVariants({ variant, size, animation }),
    "bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg",
    className
  )}
  onClick={(e) => {
    if (scriptLoaded) triggerConfetti();
    if (onClick) onClick(e);
  }}
  onMouseEnter={triggerOnHover ? triggerConfetti : undefined}
  disabled={loading || disabled}
  {...props}
>
  {loading && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
  {!loading && icon && iconPosition === "left" && <span className="mr-1">{icon}</span>}
  {children}
  {!loading && icon && iconPosition === "right" && <span className="ml-1">{icon}</span>}
</button>

    );
  }
);

ConfettiButton.displayName = "ConfettiButton";

export { ConfettiButton, confettiButtonVariants };
