import { HomeLayout } from "@/modules/home/ui/layouts/HomeLayout";
interface HomeLayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: HomeLayoutProps) {
  return <HomeLayout>{children}</HomeLayout>;
}
