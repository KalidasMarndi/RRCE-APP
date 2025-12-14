import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Key } from 'lucide-react';
import { Zap } from 'lucide-react';
import googleIcon from 'figma:asset/e5e75c0305fa194056c2a3297b8add1873595fac.png';

interface LoginPageProps {
  onNavigateHome: () => void;
  onLoginSuccess: () => void;
}

export function LoginPage({ onNavigateHome, onLoginSuccess }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in production, this would call an API
    onLoginSuccess();
  };

  const handleSocialLogin = (provider: string) => {
    // Mock social login
    console.log(`Login with ${provider}`);
    onLoginSuccess();
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <button 
            onClick={onNavigateHome}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="bg-gradient-to-br from-amber-600 to-orange-600 p-3 rounded-xl">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-2xl">RRCE</h1>
              <p className="text-xs text-gray-500">Adobe Express Add-on</p>
            </div>
          </button>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10">
          <h2 className="text-3xl text-center mb-8 text-slate-800">Log in</h2>

          {/* Social Login Buttons */}
          <div className="space-y-3 mb-6">
            {/* Google Login */}
            <button
              onClick={() => handleSocialLogin('Google')}
              className="w-full bg-slate-800 hover:bg-slate-900 text-white py-3 px-4 rounded-xl flex items-center justify-center gap-3 transition-all"
            >
              <img src={googleIcon} alt="Google" className="w-5 h-5" />
              <span>Continue with Google</span>
            </button>

            {/* SSO and GitHub */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleSocialLogin('SSO')}
                className="bg-white border-2 border-slate-200 hover:border-amber-300 text-slate-700 py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all"
              >
                <Key className="w-5 h-5" />
                <span>SSO</span>
              </button>
              <button
                onClick={() => handleSocialLogin('GitHub')}
                className="bg-white border-2 border-slate-200 hover:border-amber-300 text-slate-700 py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm text-slate-400">or</span>
            </div>
          </div>

          {/* Email/Password Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email Input */}
            <div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-amber-400 focus:bg-white transition-all text-slate-700"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-amber-400 focus:bg-white transition-all text-slate-700"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white py-3 px-4 rounded-xl transition-all shadow-md hover:shadow-lg"
            >
              Log in
            </button>
          </form>

          {/* Trouble logging in */}
          <div className="text-center mt-6">
            <p className="text-sm text-slate-400">
              Trouble logging in?{' '}
              <button className="text-slate-700 hover:text-amber-600 transition-colors">
                Try magic link
              </button>{' '}
              or{' '}
              <button className="text-slate-700 hover:text-amber-600 transition-colors">
                reset password
              </button>
            </p>
          </div>
        </div>

        {/* Sign Up */}
        <div className="text-center mt-6 bg-white rounded-xl py-4 px-6 shadow-sm">
          <p className="text-slate-400">
            Don't have an account?{' '}
            <button className="text-amber-600 hover:text-orange-600 transition-colors">
              Sign up now
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}