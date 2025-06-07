'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMiniChevronRight } from "react-icons/hi2";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  count: number;
}

export const Accordion = ({ title, children, count }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#dfdfdf] overflow-hidden dark:border-none">
      <div className='bg-[#f3f6f9] dark:bg-[#132f4c80] px-[20px]'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left py-3 flex justify-between items-center text-[#000000e0] dark:text-[#fff] text-[16px] font-normal"
        >
          <div className='flex items-center gap-2 w-[80%]'>
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center"
            >
              <HiMiniChevronRight />
            </motion.div>
            <span>{title}</span>
          </div>
          <span className='hidden md:block lg:block w-[20%] text-right'>{count} bài giảng</span>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            // key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
