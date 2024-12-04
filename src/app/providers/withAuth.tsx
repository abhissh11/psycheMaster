import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "../redux/store";

export default function withAuth(Component: React.FC) {
  return function ProtectedPage(props: any) {
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);
    const router = useRouter();

    if (!isAuthenticated) {
      // Redirect to sign-in page if not authenticated
      if (typeof window !== "undefined") {
        router.replace("/auth/signin");
      }
      return null;
    }

    return <Component {...props} />;
  };
}
