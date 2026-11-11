import { AdminAuthProvider } from '@/components/AdminAuthProvider';

export const metadata = {
  title: "Admin Portal | Aadhya's Homoeo Care",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AdminAuthProvider>{children}</AdminAuthProvider>;
}

