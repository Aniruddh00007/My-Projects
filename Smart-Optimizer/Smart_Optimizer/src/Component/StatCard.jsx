import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const StatCard = ({ label, value, icon, isWarning, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.03, y: -4 }}
      className={cn(
        "glass-card p-6 relative overflow-hidden group cursor-default",
        isWarning ? "glow-danger" : "glow-primary"
      )}
    >
      {/* Ambient glow */}
      <div
        className={cn(
          "absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20 transition-opacity group-hover:opacity-40",
          isWarning ? "bg-destructive" : "bg-primary"
        )}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <span className="stat-label">{label}</span>
          <span className={cn("opacity-60", isWarning ? "text-destructive" : "text-primary")}>
            {icon}
          </span>
        </div>

        <p className={cn("stat-value", isWarning ? "text-destructive" : "text-primary")}>
          {value}
        </p>
      </div>
    </motion.div>
  );
};

export default StatCard;