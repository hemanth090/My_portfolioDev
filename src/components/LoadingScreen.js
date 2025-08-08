import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 dark:from-gray-950 dark:via-slate-900 dark:to-indigo-950/50 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-400/10 to-blue-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="text-center relative z-10">
        {/* Enhanced Logo Animation */}
        <motion.div
          className="relative mb-12"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
        >
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-600 rounded-3xl flex items-center justify-center text-5xl font-bold text-white shadow-2xl relative overflow-hidden">
            <span className="relative z-10">NH</span>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/50 to-purple-500/50 rounded-3xl animate-pulse"></div>
          </div>
          {/* Floating rings */}
          <div className="absolute inset-0 rounded-3xl border-2 border-blue-400/30 animate-spin" style={{ animationDuration: '10s' }}></div>
          <div className="absolute inset-2 rounded-3xl border border-purple-400/20 animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }}></div>
        </motion.div>
        
        {/* Enhanced Name Animation */}
        <motion.div
          className="mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-2">
            Naveen Hemanth Kokkonda
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            CSE Student • Data Science • AI Enthusiast
          </p>
        </motion.div>
        
        {/* Modern Loading Animation */}
        <motion.div
          className="flex justify-center items-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="flex space-x-2">
            <motion.div
              className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="w-3 h-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2
              }}
            />
            <motion.div
              className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4
              }}
            />
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.p
          className="mt-6 text-gray-600 dark:text-gray-400 text-sm font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          Loading amazing things...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;