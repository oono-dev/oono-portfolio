interface TechIconProps {
  name: string
  className?: string
}

const techIcons: Record<string, { icon: string; color: string }> = {
  'TypeScript': { icon: '🔷', color: 'from-blue-500 to-blue-700' },
  'React': { icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
  'Hono': { icon: '🔥', color: 'from-orange-400 to-red-500' },
  'Terraform': { icon: '🧱', color: 'from-purple-500 to-violet-700' },
  'Next.js': { icon: '▲', color: 'from-gray-800 to-gray-600' },
  'PHP': { icon: '🐘', color: 'from-indigo-500 to-purple-600' },
  'Laravel': { icon: '🔶', color: 'from-red-500 to-orange-500' },
  'AWS': { icon: '☁️', color: 'from-orange-400 to-yellow-500' },
  'EC2': { icon: '🖥️', color: 'from-orange-400 to-red-500' },
  'RDS': { icon: '🗄️', color: 'from-blue-500 to-indigo-600' },
  'S3': { icon: '📦', color: 'from-green-400 to-blue-500' },
  'CloudFront': { icon: '🌐', color: 'from-purple-400 to-pink-500' },
  'ECS': { icon: '🐳', color: 'from-blue-400 to-cyan-500' },
  'Fargate': { icon: '🚀', color: 'from-purple-500 to-pink-600' },
  'CodeBuild': { icon: '🔧', color: 'from-yellow-400 to-orange-500' },
  'Vercel': { icon: '▲', color: 'from-gray-900 to-gray-700' },
  'Heroku': { icon: '🟣', color: 'from-purple-500 to-indigo-600' },
  'Flutter': { icon: '🐦', color: 'from-blue-400 to-cyan-500' },
  'Dart': { icon: '🎯', color: 'from-blue-600 to-indigo-700' },
  'TestFlight': { icon: '✈️', color: 'from-blue-500 to-sky-600' },
  'Micro CMS': { icon: '📝', color: 'from-green-400 to-cyan-500' },
  'GMPペイメントゲートウェイ': { icon: '💳', color: 'from-emerald-400 to-teal-500' },
  'DDD': { icon: '🏗️', color: 'from-slate-600 to-gray-700' },
  'Scrum Master': { icon: '🔄', color: 'from-emerald-500 to-teal-600' }
}

export default function TechIcon({ name, className = '' }: TechIconProps) {
  const tech = techIcons[name] || { icon: '🔧', color: 'from-gray-400 to-gray-600' }
  
  return (
    <div className={`group relative flex flex-col items-center gap-3 p-3 ${className}`}>
      <div className="relative">
        <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
        <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-white/20 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
          <div className="text-2xl">{tech.icon}</div>
        </div>
      </div>
      <span className="text-xs font-medium text-gray-600 text-center leading-tight group-hover:text-gray-800 transition-colors duration-300">
        {name}
      </span>
    </div>
  )
}