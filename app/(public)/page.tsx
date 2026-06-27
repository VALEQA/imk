import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-700 bg-slate-800/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-red-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">SK</span>
              </div>
              <span className="text-lg font-bold text-white">StudiKompas</span>
            </div>
            <Link href="/sign-in">
              <Button className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
          Find Your Perfect Study Program
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto text-balance">
          StudiKompas is your intelligent guide to discovering the right study program. Get personalized recommendations, connect with counselors, and make informed decisions about your education.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/sign-up">
            <Button className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white px-8 py-3 text-lg">
              Get Started
            </Button>
          </Link>
          <Button
            variant="outline"
            className="border-slate-600 text-slate-300 hover:bg-slate-700 px-8 py-3 text-lg"
          >
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Why Choose StudiKompas?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-lg border border-slate-700 bg-slate-800/30 p-8">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-semibold text-white mb-3">Smart Wizard</h3>
            <p className="text-slate-300">
              Our intelligent quiz system analyzes your interests, skills, and goals to provide personalized program recommendations matched to your profile.
            </p>
          </div>

          <div className="rounded-lg border border-slate-700 bg-slate-800/30 p-8">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-semibold text-white mb-3">Explore Programs</h3>
            <p className="text-slate-300">
              Browse thousands of programs from universities worldwide. Filter by field, duration, tuition, and other criteria to find what fits you.
            </p>
          </div>

          <div className="rounded-lg border border-slate-700 bg-slate-800/30 p-8">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-semibold text-white mb-3">Expert Guidance</h3>
            <p className="text-slate-300">
              Connect with academic counselors via live chat or schedule consultations. Get expert advice from education professionals.
            </p>
          </div>

          <div className="rounded-lg border border-slate-700 bg-slate-800/30 p-8">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-3">Advanced Search</h3>
            <p className="text-slate-300">
              Filter and search by university, program name, field of study, duration, and more. Save your favorites for easy comparison.
            </p>
          </div>

          <div className="rounded-lg border border-slate-700 bg-slate-800/30 p-8">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-xl font-semibold text-white mb-3">Compare Programs</h3>
            <p className="text-slate-300">
              Create comparison lists of multiple programs to evaluate them side-by-side based on your priorities and preferences.
            </p>
          </div>

          <div className="rounded-lg border border-slate-700 bg-slate-800/30 p-8">
            <div className="text-4xl mb-4">♿</div>
            <h3 className="text-xl font-semibold text-white mb-3">Accessible & Inclusive</h3>
            <p className="text-slate-300">
              Built with WCAG 2.1 AA accessibility standards to ensure our platform is usable by everyone, regardless of ability.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-400 font-bold">1</span>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Sign Up</h4>
            <p className="text-slate-300 text-sm">Create your account as a student or counselor in seconds</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-400 font-bold">2</span>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Take the Quiz</h4>
            <p className="text-slate-300 text-sm">Answer questions about your interests and career goals</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-400 font-bold">3</span>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Get Recommendations</h4>
            <p className="text-slate-300 text-sm">Receive personalized program matches based on your profile</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-400 font-bold">4</span>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Decide & Apply</h4>
            <p className="text-slate-300 text-sm">Explore options and apply to your chosen programs with confidence</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-16">
        <div className="rounded-xl border border-slate-700 bg-gradient-to-r from-slate-800 to-slate-800/50 p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Find Your Perfect Program?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have discovered their ideal study path with StudiKompas
          </p>
          <Link href="/sign-up">
            <Button className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white px-8 py-3 text-lg">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-800/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400">
          <p>&copy; 2024 StudiKompas. All rights reserved. | WCAG 2.1 AA Accessible</p>
        </div>
      </footer>
    </div>
  )
}
