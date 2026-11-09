/** @type {import('next').Next.js Configuration} */
const nextConfig = {
  output: 'export',
  // যদি আপনার প্রজেক্টে ইমেজ অপ্টিমাইজেশন নিয়ে সমস্যা করে, তবে এটি যোগ করতে পারেন:
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
