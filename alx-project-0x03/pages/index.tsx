import Button from "@/components/common/Button";
import { useRouter } from "next/router";
import { PageRouteProps } from "@/interfaces";

export default function Home() {
  const router = useRouter();

  // Imperative routing with useRouter
  const routeToNextPage = ({ pageRoute }: PageRouteProps) => {
    router.push(pageRoute, undefined, { shallow: false });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center">
      {/* Welcome Message */}
      <
