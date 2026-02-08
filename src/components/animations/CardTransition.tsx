import { motion } from "framer-motion";

interface CardTransitionProps {
    children: React.ReactNode;
}

export function CardTransition({ children }: CardTransitionProps) {
    return (
        <motion.div
            className="w-full max-w-md"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{
                duration: 0.2,
                ease: "easeOut",
            }}
        >
            {children}
        </motion.div>
    );
}
