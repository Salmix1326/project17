import { LoginForm } from "@/features/auth";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="bg-black border-2 border-yellow-400 rounded-xl p-8 w-full max-w-md shadow-lg">
        <h1 className="text-yellow-400 text-3xl font-bold mb-6 text-center">
          Enter the System
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}
