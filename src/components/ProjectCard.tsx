import TechIcon from './TechIcon'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description?: string
  technologies: string[]
  url?: string
  imageUrl?: string
  architecture?: string[]
}

export default function ProjectCard({ 
  title, 
  description, 
  technologies, 
  url, 
  imageUrl,
  architecture 
}: ProjectCardProps) {
  const CardContent = () => (
    <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/30 overflow-hidden hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
      
      {imageUrl && (
        <div className="relative mb-6 rounded-t-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
          <Image
            src={imageUrl}
            alt={title}
            width={400}
            height={200}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      )}
      
      <div className="p-8">
        <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-indigo-600 transition-colors duration-300 leading-tight">
          {title}
        </h3>
        
        {description && (
          <p className="text-gray-600 mb-6 leading-relaxed">
            {description}
          </p>
        )}
        
        {architecture && architecture.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              <h4 className="text-sm font-semibold text-gray-700 tracking-wide">
                アーキテクチャ
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {architecture.map((arch) => (
                <TechIcon key={arch} name={arch} />
              ))}
            </div>
          </div>
        )}
        
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            <h4 className="text-sm font-semibold text-gray-700 tracking-wide">
              使用技術
            </h4>
          </div>
          <div className="flex flex-wrap gap-1">
            {technologies.map((tech) => (
              <TechIcon key={tech} name={tech} />
            ))}
          </div>
        </div>
        
        {url && (
          <div className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-200/50">
            <div className="flex items-center gap-2 text-indigo-600 font-medium group-hover:text-indigo-700 transition-colors duration-300">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">🔗</span>
              </div>
              <span className="text-sm">プロジェクトを見る</span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent"></div>
          </div>
        )}
      </div>
    </div>
  )

  if (url) {
    return (
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <CardContent />
      </a>
    )
  }

  return <CardContent />
}