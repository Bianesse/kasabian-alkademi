// middleware.ts (at root of project)
import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },
});

export const config = {
  matcher: ["/users/:path*", "/about/:path*"], // all protected routes
};
